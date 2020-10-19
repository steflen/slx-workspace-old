const fg = require('fast-glob');
const ConnectionString = require('connection-string');
const packageJson = require('package.json');
const angularJson = require('angular.json');
const fs = require('fs');
const path = require('path');
const runnedInMigration = process.env.MIGRATIONS === 'true';
const envName = process.env.NODE_ENV || 'develop';
const isDevelop = envName === 'develop';
const sourceRootKey = isDevelop ? 'sourceRoot' : 'outputPath';
const entitiesExt = '{.js,.ts}';
// const packageJson = JSON.parse(fs.readFileSync('package.json'));
// const angularJson = JSON.parse(fs.readFileSync('angular.json'));

const vendors = packageJson.externalLibs || [];

require('dotenv').config({ path: path.resolve(__dirname, 'apps', 'api', 'src', 'assets', '.env') });

console.log('ORM CONFIG LOADEING', process.env.DATABASE_URL);

const connectionString = new ConnectionString(process.env.DATABASE_URL || 'sqlite://database/sqlitedb.db');
const vendorsLibs = Object.keys(vendors).map((index) => {
  const vendorConfig = {};
  vendorConfig[sourceRootKey] = vendors[index];
  return vendorConfig;
});
const libs = Object.keys(angularJson.projects)
  .filter((key) => angularJson.projects[key].projectType === 'library')
  .filter(
    (lib) =>
      isDevelop ||
      lib[sourceRootKey] !== undefined ||
      (lib.architect &&
        lib.architect.build &&
        lib.architect.build.options &&
        lib.architect.build.options[sourceRootKey] !== undefined),
  )
  .map((key) => angularJson.projects[key]);
const apps = Object.keys(angularJson.projects)
  .filter((key) => angularJson.projects[key].projectType === 'application')
  .filter(
    (lib) =>
      isDevelop ||
      lib[sourceRootKey] !== undefined ||
      (lib.architect &&
        lib.architect.build &&
        lib.architect.build.options &&
        lib.architect.build.options[sourceRootKey] !== undefined),
  )
  .map((key) => angularJson.projects[key]);
const defaultProject = angularJson.defaultProject;
const defaultApp = angularJson.projects[defaultProject];
const migrationsDir = `${defaultApp[sourceRootKey]}/migrations`;

const entities = fg.sync([
  ...(runnedInMigration
    ? [...vendorsLibs, ...libs, ...apps].map(
        (lib) =>
          `${
            lib[sourceRootKey] || lib.architect.build.options[sourceRootKey]
          }/**/migrations_entities/**/*.entity${entitiesExt}`,
      )
    : []),
  ...(!runnedInMigration
    ? [...vendorsLibs, ...libs, ...apps].map(
        (lib) =>
          `${lib[sourceRootKey] || lib.architect.build.options[sourceRootKey]}/**/entities/**/*.entity${entitiesExt}`,
      )
    : []),
]);
const migrations = normalizationFileList(
  fg.sync(
    runnedInMigration
      ? [...vendorsLibs, ...libs, ...apps].map(
          (lib) =>
            `${lib[sourceRootKey] || lib.architect.build.options[sourceRootKey]}/**/migrations/**/*${entitiesExt}`,
        )
      : [],
  ),
);
const subscribers = fg.sync(
  [...vendorsLibs, ...libs, ...apps].map(
    (lib) => `${lib[sourceRootKey] || lib.architect.build.options[sourceRootKey]}/**/subscribers/**/*${entitiesExt}`,
  ),
);
if (connectionString.protocol === 'sqlite') {
  const dbFile =
    './' +
    (connectionString.hosts ? connectionString.hosts[0].name : '') +
    (connectionString.path ? '/' + connectionString.path[0] : '');
  module.exports = {
    type: 'sqlite',
    database: dbFile,
    entities: entities,
    migrations: migrations,
    subscribers: subscribers,
    logging: 'all',
    synchronize: false,
    cli: {
      migrationsDir: migrationsDir,
    },
  };
} else {
  module.exports = {
    type: connectionString.protocol,
    host: connectionString.hosts && connectionString.hosts[0].name,
    port: connectionString.hosts && +connectionString.hosts[0].port,
    username: connectionString.user,
    password: connectionString.password,
    database: connectionString.path && connectionString.path[0],
    entities: entities,
    migrations: migrations,
    subscribers: subscribers,
    logging: 'all',
    synchronize: false,
    cli: {
      migrationsDir: migrationsDir,
    },
  };
}

function normalizationFileList(files) {
  const newFiles = [];
  for (var i = 0; i < files.length; i++) {
    const filename = files[i];
    if (filename.indexOf('.d.ts') === -1) {
      var founded = false;
      for (var j = 0; j < newFiles.length; j++) {
        const filename = newFiles[j];
        if (path.basename(filename, path.parse(filename).ext) === path.basename(files[i], path.parse(files[i]).ext)) {
          founded = true;
        }
      }
      if (!founded) {
        newFiles.push(files[i]);
      }
    }
  }
  return newFiles;
}
