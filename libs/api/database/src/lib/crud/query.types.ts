// https://github.com/typeorm/typeorm/blob/master/src/common/DeepPartial.ts
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]> | T[P];
};

export type QueryPartialEntity<T> = {
  [P in keyof T]?: T[P] | (() => string);
};

export type QueryDeepPartialEntity<T> = {
  [P in keyof T]?:
    | (T[P] extends Array<infer U>
        ? Array<QueryDeepPartialEntity<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<QueryDeepPartialEntity<U>>
        : QueryDeepPartialEntity<T[P]>)
    | (() => string);
};
