import { AccountService } from './account.service';
import { ContentTypesService } from './content-types.service';
import { GroupsService } from './groups.service';
import { PermissionsService } from './permissions.service';
import { UsersService } from './users.service';

export const CORE_SERVICES = [AccountService, GroupsService, UsersService, ContentTypesService, PermissionsService];
