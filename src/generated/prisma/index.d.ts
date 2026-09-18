
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model task
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model task_category
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type task_category = $Result.DefaultSelection<Prisma.$task_categoryPayload>
/**
 * Model bill_expense
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type bill_expense = $Result.DefaultSelection<Prisma.$bill_expensePayload>
/**
 * Model expense
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type expense = $Result.DefaultSelection<Prisma.$expensePayload>
/**
 * Model stock
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type stock = $Result.DefaultSelection<Prisma.$stockPayload>
/**
 * Model transaction
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model transportation_expense
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type transportation_expense = $Result.DefaultSelection<Prisma.$transportation_expensePayload>
/**
 * Model income
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type income = $Result.DefaultSelection<Prisma.$incomePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DateRepeatType: {
  YEARLY: 'YEARLY',
  MONTHLY: 'MONTHLY',
  DAILY: 'DAILY',
  MANUAL: 'MANUAL',
  BIWEEKLY: 'BIWEEKLY',
  WEEKLY: 'WEEKLY'
};

export type DateRepeatType = (typeof DateRepeatType)[keyof typeof DateRepeatType]


export const aal_level: {
  aal1: 'aal1',
  aal2: 'aal2',
  aal3: 'aal3'
};

export type aal_level = (typeof aal_level)[keyof typeof aal_level]


export const code_challenge_method: {
  s256: 's256',
  plain: 'plain'
};

export type code_challenge_method = (typeof code_challenge_method)[keyof typeof code_challenge_method]


export const factor_status: {
  unverified: 'unverified',
  verified: 'verified'
};

export type factor_status = (typeof factor_status)[keyof typeof factor_status]


export const factor_type: {
  totp: 'totp',
  webauthn: 'webauthn',
  phone: 'phone',
  recovery_code: 'recovery_code'
};

export type factor_type = (typeof factor_type)[keyof typeof factor_type]


export const oauth_authorization_status: {
  pending: 'pending',
  approved: 'approved',
  denied: 'denied',
  expired: 'expired'
};

export type oauth_authorization_status = (typeof oauth_authorization_status)[keyof typeof oauth_authorization_status]


export const oauth_client_type: {
  public: 'public',
  confidential: 'confidential'
};

export type oauth_client_type = (typeof oauth_client_type)[keyof typeof oauth_client_type]


export const oauth_registration_type: {
  dynamic: 'dynamic',
  manual: 'manual'
};

export type oauth_registration_type = (typeof oauth_registration_type)[keyof typeof oauth_registration_type]


export const oauth_response_type: {
  code: 'code'
};

export type oauth_response_type = (typeof oauth_response_type)[keyof typeof oauth_response_type]


export const one_time_token_type: {
  confirmation_token: 'confirmation_token',
  reauthentication_token: 'reauthentication_token',
  recovery_token: 'recovery_token',
  email_change_token_new: 'email_change_token_new',
  email_change_token_current: 'email_change_token_current',
  phone_change_token: 'phone_change_token'
};

export type one_time_token_type = (typeof one_time_token_type)[keyof typeof one_time_token_type]


export const TransactionStatus: {
  PAID: 'PAID',
  CANCELLED: 'CANCELLED',
  PENDING: 'PENDING'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const ExpenseType: {
  HOUSE: 'HOUSE',
  PERSONAL: 'PERSONAL',
  TRANSPORTATION: 'TRANSPORTATION',
  GROCERY: 'GROCERY',
  MISC: 'MISC'
};

export type ExpenseType = (typeof ExpenseType)[keyof typeof ExpenseType]

}

export type DateRepeatType = $Enums.DateRepeatType

export const DateRepeatType: typeof $Enums.DateRepeatType

export type aal_level = $Enums.aal_level

export const aal_level: typeof $Enums.aal_level

export type code_challenge_method = $Enums.code_challenge_method

export const code_challenge_method: typeof $Enums.code_challenge_method

export type factor_status = $Enums.factor_status

export const factor_status: typeof $Enums.factor_status

export type factor_type = $Enums.factor_type

export const factor_type: typeof $Enums.factor_type

export type oauth_authorization_status = $Enums.oauth_authorization_status

export const oauth_authorization_status: typeof $Enums.oauth_authorization_status

export type oauth_client_type = $Enums.oauth_client_type

export const oauth_client_type: typeof $Enums.oauth_client_type

export type oauth_registration_type = $Enums.oauth_registration_type

export const oauth_registration_type: typeof $Enums.oauth_registration_type

export type oauth_response_type = $Enums.oauth_response_type

export const oauth_response_type: typeof $Enums.oauth_response_type

export type one_time_token_type = $Enums.one_time_token_type

export const one_time_token_type: typeof $Enums.one_time_token_type

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type ExpenseType = $Enums.ExpenseType

export const ExpenseType: typeof $Enums.ExpenseType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task_category`: Exposes CRUD operations for the **task_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Task_categories
    * const task_categories = await prisma.task_category.findMany()
    * ```
    */
  get task_category(): Prisma.task_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill_expense`: Exposes CRUD operations for the **bill_expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bill_expenses
    * const bill_expenses = await prisma.bill_expense.findMany()
    * ```
    */
  get bill_expense(): Prisma.bill_expenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.expenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.stockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportation_expense`: Exposes CRUD operations for the **transportation_expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transportation_expenses
    * const transportation_expenses = await prisma.transportation_expense.findMany()
    * ```
    */
  get transportation_expense(): Prisma.transportation_expenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.income`: Exposes CRUD operations for the **income** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incomes
    * const incomes = await prisma.income.findMany()
    * ```
    */
  get income(): Prisma.incomeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    task: 'task',
    task_category: 'task_category',
    bill_expense: 'bill_expense',
    expense: 'expense',
    stock: 'stock',
    transaction: 'transaction',
    transportation_expense: 'transportation_expense',
    income: 'income'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "task" | "task_category" | "bill_expense" | "expense" | "stock" | "transaction" | "transportation_expense" | "income"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      task_category: {
        payload: Prisma.$task_categoryPayload<ExtArgs>
        fields: Prisma.task_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.task_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.task_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          findFirst: {
            args: Prisma.task_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.task_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          findMany: {
            args: Prisma.task_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>[]
          }
          create: {
            args: Prisma.task_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          createMany: {
            args: Prisma.task_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.task_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>[]
          }
          delete: {
            args: Prisma.task_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          update: {
            args: Prisma.task_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          deleteMany: {
            args: Prisma.task_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.task_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.task_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>[]
          }
          upsert: {
            args: Prisma.task_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          aggregate: {
            args: Prisma.Task_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask_category>
          }
          groupBy: {
            args: Prisma.task_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Task_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.task_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Task_categoryCountAggregateOutputType> | number
          }
        }
      }
      bill_expense: {
        payload: Prisma.$bill_expensePayload<ExtArgs>
        fields: Prisma.bill_expenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bill_expenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bill_expenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>
          }
          findFirst: {
            args: Prisma.bill_expenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bill_expenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>
          }
          findMany: {
            args: Prisma.bill_expenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>[]
          }
          create: {
            args: Prisma.bill_expenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>
          }
          createMany: {
            args: Prisma.bill_expenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bill_expenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>[]
          }
          delete: {
            args: Prisma.bill_expenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>
          }
          update: {
            args: Prisma.bill_expenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>
          }
          deleteMany: {
            args: Prisma.bill_expenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bill_expenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bill_expenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>[]
          }
          upsert: {
            args: Prisma.bill_expenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bill_expensePayload>
          }
          aggregate: {
            args: Prisma.Bill_expenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill_expense>
          }
          groupBy: {
            args: Prisma.bill_expenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bill_expenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.bill_expenseCountArgs<ExtArgs>
            result: $Utils.Optional<Bill_expenseCountAggregateOutputType> | number
          }
        }
      }
      expense: {
        payload: Prisma.$expensePayload<ExtArgs>
        fields: Prisma.expenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          findFirst: {
            args: Prisma.expenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          findMany: {
            args: Prisma.expenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[]
          }
          create: {
            args: Prisma.expenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          createMany: {
            args: Prisma.expenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[]
          }
          delete: {
            args: Prisma.expenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          update: {
            args: Prisma.expenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          deleteMany: {
            args: Prisma.expenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[]
          }
          upsert: {
            args: Prisma.expenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.expenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.expenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      stock: {
        payload: Prisma.$stockPayload<ExtArgs>
        fields: Prisma.stockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findFirst: {
            args: Prisma.stockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findMany: {
            args: Prisma.stockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          create: {
            args: Prisma.stockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          createMany: {
            args: Prisma.stockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          delete: {
            args: Prisma.stockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          update: {
            args: Prisma.stockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          deleteMany: {
            args: Prisma.stockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          upsert: {
            args: Prisma.stockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.stockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.stockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      transportation_expense: {
        payload: Prisma.$transportation_expensePayload<ExtArgs>
        fields: Prisma.transportation_expenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transportation_expenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transportation_expenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>
          }
          findFirst: {
            args: Prisma.transportation_expenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transportation_expenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>
          }
          findMany: {
            args: Prisma.transportation_expenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>[]
          }
          create: {
            args: Prisma.transportation_expenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>
          }
          createMany: {
            args: Prisma.transportation_expenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transportation_expenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>[]
          }
          delete: {
            args: Prisma.transportation_expenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>
          }
          update: {
            args: Prisma.transportation_expenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>
          }
          deleteMany: {
            args: Prisma.transportation_expenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transportation_expenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transportation_expenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>[]
          }
          upsert: {
            args: Prisma.transportation_expenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transportation_expensePayload>
          }
          aggregate: {
            args: Prisma.Transportation_expenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportation_expense>
          }
          groupBy: {
            args: Prisma.transportation_expenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transportation_expenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.transportation_expenseCountArgs<ExtArgs>
            result: $Utils.Optional<Transportation_expenseCountAggregateOutputType> | number
          }
        }
      }
      income: {
        payload: Prisma.$incomePayload<ExtArgs>
        fields: Prisma.incomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.incomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.incomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          findFirst: {
            args: Prisma.incomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.incomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          findMany: {
            args: Prisma.incomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>[]
          }
          create: {
            args: Prisma.incomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          createMany: {
            args: Prisma.incomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.incomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>[]
          }
          delete: {
            args: Prisma.incomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          update: {
            args: Prisma.incomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          deleteMany: {
            args: Prisma.incomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.incomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.incomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>[]
          }
          upsert: {
            args: Prisma.incomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          aggregate: {
            args: Prisma.IncomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncome>
          }
          groupBy: {
            args: Prisma.incomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.incomeCountArgs<ExtArgs>
            result: $Utils.Optional<IncomeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    task?: taskOmit
    task_category?: task_categoryOmit
    bill_expense?: bill_expenseOmit
    expense?: expenseOmit
    stock?: stockOmit
    transaction?: transactionOmit
    transportation_expense?: transportation_expenseOmit
    income?: incomeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Task_categoryCountOutputType
   */

  export type Task_categoryCountOutputType = {
    task: number
  }

  export type Task_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Task_categoryCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * Task_categoryCountOutputType without action
   */
  export type Task_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task_categoryCountOutputType
     */
    select?: Task_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Task_categoryCountOutputType without action
   */
  export type Task_categoryCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    task: number
    transaction: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ExpenseCountOutputTypeCountTaskArgs
    transaction?: boolean | ExpenseCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    created_at: Date | null
    email: string | null
    id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    created_at: Date | null
    email: string | null
    id: string | null
  }

  export type UsersCountAggregateOutputType = {
    created_at: number
    email: number
    id: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    created_at?: true
    email?: true
    id?: true
  }

  export type UsersMaxAggregateInputType = {
    created_at?: true
    email?: true
    id?: true
  }

  export type UsersCountAggregateInputType = {
    created_at?: true
    email?: true
    id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    created_at: Date
    email: string
    id: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    email?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    email?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    email?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    created_at?: boolean
    email?: boolean
    id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created_at" | "email" | "id", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created_at: Date
      email: string
      id: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const usersWithCreated_atOnly = await prisma.users.findMany({ select: { created_at: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `created_at`
     * const usersWithCreated_atOnly = await prisma.users.createManyAndReturn({
     *   select: { created_at: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `created_at`
     * const usersWithCreated_atOnly = await prisma.users.updateManyAndReturn({
     *   select: { created_at: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly email: FieldRef<"users", 'String'>
    readonly id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    priority_level: number | null
    task_category_id: number | null
    expense_id: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: bigint | null
    priority_level: number | null
    task_category_id: bigint | null
    expense_id: bigint | null
  }

  export type TaskMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    description: string | null
    completed: boolean | null
    completed_at: Date | null
    title: string | null
    priority_level: number | null
    due_date: Date | null
    task_category_id: bigint | null
    repeating_type: $Enums.DateRepeatType | null
    expense_id: bigint | null
    is_archived: boolean | null
  }

  export type TaskMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    description: string | null
    completed: boolean | null
    completed_at: Date | null
    title: string | null
    priority_level: number | null
    due_date: Date | null
    task_category_id: bigint | null
    repeating_type: $Enums.DateRepeatType | null
    expense_id: bigint | null
    is_archived: boolean | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    created_at: number
    description: number
    completed: number
    completed_at: number
    title: number
    priority_level: number
    due_date: number
    task_category_id: number
    repeating_type: number
    expense_id: number
    is_archived: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    priority_level?: true
    task_category_id?: true
    expense_id?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    priority_level?: true
    task_category_id?: true
    expense_id?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    created_at?: true
    description?: true
    completed?: true
    completed_at?: true
    title?: true
    priority_level?: true
    due_date?: true
    task_category_id?: true
    repeating_type?: true
    expense_id?: true
    is_archived?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    created_at?: true
    description?: true
    completed?: true
    completed_at?: true
    title?: true
    priority_level?: true
    due_date?: true
    task_category_id?: true
    repeating_type?: true
    expense_id?: true
    is_archived?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    created_at?: true
    description?: true
    completed?: true
    completed_at?: true
    title?: true
    priority_level?: true
    due_date?: true
    task_category_id?: true
    repeating_type?: true
    expense_id?: true
    is_archived?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: bigint
    created_at: Date
    description: string | null
    completed: boolean
    completed_at: Date | null
    title: string | null
    priority_level: number
    due_date: Date | null
    task_category_id: bigint | null
    repeating_type: $Enums.DateRepeatType | null
    expense_id: bigint | null
    is_archived: boolean
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    description?: boolean
    completed?: boolean
    completed_at?: boolean
    title?: boolean
    priority_level?: boolean
    due_date?: boolean
    task_category_id?: boolean
    repeating_type?: boolean
    expense_id?: boolean
    is_archived?: boolean
    expense?: boolean | task$expenseArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    description?: boolean
    completed?: boolean
    completed_at?: boolean
    title?: boolean
    priority_level?: boolean
    due_date?: boolean
    task_category_id?: boolean
    repeating_type?: boolean
    expense_id?: boolean
    is_archived?: boolean
    expense?: boolean | task$expenseArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    description?: boolean
    completed?: boolean
    completed_at?: boolean
    title?: boolean
    priority_level?: boolean
    due_date?: boolean
    task_category_id?: boolean
    repeating_type?: boolean
    expense_id?: boolean
    is_archived?: boolean
    expense?: boolean | task$expenseArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectScalar = {
    id?: boolean
    created_at?: boolean
    description?: boolean
    completed?: boolean
    completed_at?: boolean
    title?: boolean
    priority_level?: boolean
    due_date?: boolean
    task_category_id?: boolean
    repeating_type?: boolean
    expense_id?: boolean
    is_archived?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "description" | "completed" | "completed_at" | "title" | "priority_level" | "due_date" | "task_category_id" | "repeating_type" | "expense_id" | "is_archived", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | task$expenseArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }
  export type taskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | task$expenseArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }
  export type taskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | task$expenseArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      expense: Prisma.$expensePayload<ExtArgs> | null
      task_category: Prisma.$task_categoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      description: string | null
      completed: boolean
      completed_at: Date | null
      title: string | null
      priority_level: number
      due_date: Date | null
      task_category_id: bigint | null
      repeating_type: $Enums.DateRepeatType | null
      expense_id: bigint | null
      is_archived: boolean
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {taskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends taskCreateManyAndReturnArgs>(args?: SelectSubset<T, taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {taskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends taskUpdateManyAndReturnArgs>(args: SelectSubset<T, taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends task$expenseArgs<ExtArgs> = {}>(args?: Subset<T, task$expenseArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    task_category<T extends task$task_categoryArgs<ExtArgs> = {}>(args?: Subset<T, task$task_categoryArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'BigInt'>
    readonly created_at: FieldRef<"task", 'DateTime'>
    readonly description: FieldRef<"task", 'String'>
    readonly completed: FieldRef<"task", 'Boolean'>
    readonly completed_at: FieldRef<"task", 'DateTime'>
    readonly title: FieldRef<"task", 'String'>
    readonly priority_level: FieldRef<"task", 'Int'>
    readonly due_date: FieldRef<"task", 'DateTime'>
    readonly task_category_id: FieldRef<"task", 'BigInt'>
    readonly repeating_type: FieldRef<"task", 'DateRepeatType'>
    readonly expense_id: FieldRef<"task", 'BigInt'>
    readonly is_archived: FieldRef<"task", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data?: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task createManyAndReturn
   */
  export type taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task updateManyAndReturn
   */
  export type taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task.expense
   */
  export type task$expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    where?: expenseWhereInput
  }

  /**
   * task.task_category
   */
  export type task$task_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    where?: task_categoryWhereInput
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model task_category
   */

  export type AggregateTask_category = {
    _count: Task_categoryCountAggregateOutputType | null
    _avg: Task_categoryAvgAggregateOutputType | null
    _sum: Task_categorySumAggregateOutputType | null
    _min: Task_categoryMinAggregateOutputType | null
    _max: Task_categoryMaxAggregateOutputType | null
  }

  export type Task_categoryAvgAggregateOutputType = {
    id: number | null
  }

  export type Task_categorySumAggregateOutputType = {
    id: bigint | null
  }

  export type Task_categoryMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    title: string | null
    user_id: string | null
  }

  export type Task_categoryMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    title: string | null
    user_id: string | null
  }

  export type Task_categoryCountAggregateOutputType = {
    id: number
    created_at: number
    title: number
    user_id: number
    _all: number
  }


  export type Task_categoryAvgAggregateInputType = {
    id?: true
  }

  export type Task_categorySumAggregateInputType = {
    id?: true
  }

  export type Task_categoryMinAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    user_id?: true
  }

  export type Task_categoryMaxAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    user_id?: true
  }

  export type Task_categoryCountAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    user_id?: true
    _all?: true
  }

  export type Task_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_category to aggregate.
     */
    where?: task_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_categories to fetch.
     */
    orderBy?: task_categoryOrderByWithRelationInput | task_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: task_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned task_categories
    **/
    _count?: true | Task_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Task_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Task_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Task_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Task_categoryMaxAggregateInputType
  }

  export type GetTask_categoryAggregateType<T extends Task_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTask_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_category[P]>
      : GetScalarType<T[P], AggregateTask_category[P]>
  }




  export type task_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_categoryWhereInput
    orderBy?: task_categoryOrderByWithAggregationInput | task_categoryOrderByWithAggregationInput[]
    by: Task_categoryScalarFieldEnum[] | Task_categoryScalarFieldEnum
    having?: task_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Task_categoryCountAggregateInputType | true
    _avg?: Task_categoryAvgAggregateInputType
    _sum?: Task_categorySumAggregateInputType
    _min?: Task_categoryMinAggregateInputType
    _max?: Task_categoryMaxAggregateInputType
  }

  export type Task_categoryGroupByOutputType = {
    id: bigint
    created_at: Date
    title: string
    user_id: string
    _count: Task_categoryCountAggregateOutputType | null
    _avg: Task_categoryAvgAggregateOutputType | null
    _sum: Task_categorySumAggregateOutputType | null
    _min: Task_categoryMinAggregateOutputType | null
    _max: Task_categoryMaxAggregateOutputType | null
  }

  type GetTask_categoryGroupByPayload<T extends task_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Task_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Task_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Task_categoryGroupByOutputType[P]>
        }
      >
    >


  export type task_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    user_id?: boolean
    task?: boolean | task_category$taskArgs<ExtArgs>
    _count?: boolean | Task_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_category"]>

  export type task_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    user_id?: boolean
  }, ExtArgs["result"]["task_category"]>

  export type task_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    user_id?: boolean
  }, ExtArgs["result"]["task_category"]>

  export type task_categorySelectScalar = {
    id?: boolean
    created_at?: boolean
    title?: boolean
    user_id?: boolean
  }

  export type task_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "title" | "user_id", ExtArgs["result"]["task_category"]>
  export type task_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | task_category$taskArgs<ExtArgs>
    _count?: boolean | Task_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type task_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type task_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $task_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task_category"
    objects: {
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      title: string
      user_id: string
    }, ExtArgs["result"]["task_category"]>
    composites: {}
  }

  type task_categoryGetPayload<S extends boolean | null | undefined | task_categoryDefaultArgs> = $Result.GetResult<Prisma.$task_categoryPayload, S>

  type task_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<task_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Task_categoryCountAggregateInputType | true
    }

  export interface task_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_category'], meta: { name: 'task_category' } }
    /**
     * Find zero or one Task_category that matches the filter.
     * @param {task_categoryFindUniqueArgs} args - Arguments to find a Task_category
     * @example
     * // Get one Task_category
     * const task_category = await prisma.task_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends task_categoryFindUniqueArgs>(args: SelectSubset<T, task_categoryFindUniqueArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {task_categoryFindUniqueOrThrowArgs} args - Arguments to find a Task_category
     * @example
     * // Get one Task_category
     * const task_category = await prisma.task_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends task_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, task_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryFindFirstArgs} args - Arguments to find a Task_category
     * @example
     * // Get one Task_category
     * const task_category = await prisma.task_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends task_categoryFindFirstArgs>(args?: SelectSubset<T, task_categoryFindFirstArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryFindFirstOrThrowArgs} args - Arguments to find a Task_category
     * @example
     * // Get one Task_category
     * const task_category = await prisma.task_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends task_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, task_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Task_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_categories
     * const task_categories = await prisma.task_category.findMany()
     * 
     * // Get first 10 Task_categories
     * const task_categories = await prisma.task_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const task_categoryWithIdOnly = await prisma.task_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends task_categoryFindManyArgs>(args?: SelectSubset<T, task_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task_category.
     * @param {task_categoryCreateArgs} args - Arguments to create a Task_category.
     * @example
     * // Create one Task_category
     * const Task_category = await prisma.task_category.create({
     *   data: {
     *     // ... data to create a Task_category
     *   }
     * })
     * 
     */
    create<T extends task_categoryCreateArgs>(args: SelectSubset<T, task_categoryCreateArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Task_categories.
     * @param {task_categoryCreateManyArgs} args - Arguments to create many Task_categories.
     * @example
     * // Create many Task_categories
     * const task_category = await prisma.task_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends task_categoryCreateManyArgs>(args?: SelectSubset<T, task_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Task_categories and returns the data saved in the database.
     * @param {task_categoryCreateManyAndReturnArgs} args - Arguments to create many Task_categories.
     * @example
     * // Create many Task_categories
     * const task_category = await prisma.task_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Task_categories and only return the `id`
     * const task_categoryWithIdOnly = await prisma.task_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends task_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, task_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task_category.
     * @param {task_categoryDeleteArgs} args - Arguments to delete one Task_category.
     * @example
     * // Delete one Task_category
     * const Task_category = await prisma.task_category.delete({
     *   where: {
     *     // ... filter to delete one Task_category
     *   }
     * })
     * 
     */
    delete<T extends task_categoryDeleteArgs>(args: SelectSubset<T, task_categoryDeleteArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task_category.
     * @param {task_categoryUpdateArgs} args - Arguments to update one Task_category.
     * @example
     * // Update one Task_category
     * const task_category = await prisma.task_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends task_categoryUpdateArgs>(args: SelectSubset<T, task_categoryUpdateArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Task_categories.
     * @param {task_categoryDeleteManyArgs} args - Arguments to filter Task_categories to delete.
     * @example
     * // Delete a few Task_categories
     * const { count } = await prisma.task_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends task_categoryDeleteManyArgs>(args?: SelectSubset<T, task_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_categories
     * const task_category = await prisma.task_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends task_categoryUpdateManyArgs>(args: SelectSubset<T, task_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_categories and returns the data updated in the database.
     * @param {task_categoryUpdateManyAndReturnArgs} args - Arguments to update many Task_categories.
     * @example
     * // Update many Task_categories
     * const task_category = await prisma.task_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Task_categories and only return the `id`
     * const task_categoryWithIdOnly = await prisma.task_category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends task_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, task_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task_category.
     * @param {task_categoryUpsertArgs} args - Arguments to update or create a Task_category.
     * @example
     * // Update or create a Task_category
     * const task_category = await prisma.task_category.upsert({
     *   create: {
     *     // ... data to create a Task_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_category we want to update
     *   }
     * })
     */
    upsert<T extends task_categoryUpsertArgs>(args: SelectSubset<T, task_categoryUpsertArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Task_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryCountArgs} args - Arguments to filter Task_categories to count.
     * @example
     * // Count the number of Task_categories
     * const count = await prisma.task_category.count({
     *   where: {
     *     // ... the filter for the Task_categories we want to count
     *   }
     * })
    **/
    count<T extends task_categoryCountArgs>(
      args?: Subset<T, task_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Task_categoryAggregateArgs>(args: Subset<T, Task_categoryAggregateArgs>): Prisma.PrismaPromise<GetTask_categoryAggregateType<T>>

    /**
     * Group by Task_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends task_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_categoryGroupByArgs['orderBy'] }
        : { orderBy?: task_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, task_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTask_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task_category model
   */
  readonly fields: task_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends task_category$taskArgs<ExtArgs> = {}>(args?: Subset<T, task_category$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task_category model
   */
  interface task_categoryFieldRefs {
    readonly id: FieldRef<"task_category", 'BigInt'>
    readonly created_at: FieldRef<"task_category", 'DateTime'>
    readonly title: FieldRef<"task_category", 'String'>
    readonly user_id: FieldRef<"task_category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * task_category findUnique
   */
  export type task_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_category to fetch.
     */
    where: task_categoryWhereUniqueInput
  }

  /**
   * task_category findUniqueOrThrow
   */
  export type task_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_category to fetch.
     */
    where: task_categoryWhereUniqueInput
  }

  /**
   * task_category findFirst
   */
  export type task_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_category to fetch.
     */
    where?: task_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_categories to fetch.
     */
    orderBy?: task_categoryOrderByWithRelationInput | task_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_categories.
     */
    cursor?: task_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_categories.
     */
    distinct?: Task_categoryScalarFieldEnum | Task_categoryScalarFieldEnum[]
  }

  /**
   * task_category findFirstOrThrow
   */
  export type task_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_category to fetch.
     */
    where?: task_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_categories to fetch.
     */
    orderBy?: task_categoryOrderByWithRelationInput | task_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_categories.
     */
    cursor?: task_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_categories.
     */
    distinct?: Task_categoryScalarFieldEnum | Task_categoryScalarFieldEnum[]
  }

  /**
   * task_category findMany
   */
  export type task_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_categories to fetch.
     */
    where?: task_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_categories to fetch.
     */
    orderBy?: task_categoryOrderByWithRelationInput | task_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing task_categories.
     */
    cursor?: task_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_categories.
     */
    distinct?: Task_categoryScalarFieldEnum | Task_categoryScalarFieldEnum[]
  }

  /**
   * task_category create
   */
  export type task_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a task_category.
     */
    data?: XOR<task_categoryCreateInput, task_categoryUncheckedCreateInput>
  }

  /**
   * task_category createMany
   */
  export type task_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_categories.
     */
    data: task_categoryCreateManyInput | task_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_category createManyAndReturn
   */
  export type task_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many task_categories.
     */
    data: task_categoryCreateManyInput | task_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_category update
   */
  export type task_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a task_category.
     */
    data: XOR<task_categoryUpdateInput, task_categoryUncheckedUpdateInput>
    /**
     * Choose, which task_category to update.
     */
    where: task_categoryWhereUniqueInput
  }

  /**
   * task_category updateMany
   */
  export type task_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_categories.
     */
    data: XOR<task_categoryUpdateManyMutationInput, task_categoryUncheckedUpdateManyInput>
    /**
     * Filter which task_categories to update
     */
    where?: task_categoryWhereInput
    /**
     * Limit how many task_categories to update.
     */
    limit?: number
  }

  /**
   * task_category updateManyAndReturn
   */
  export type task_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * The data used to update task_categories.
     */
    data: XOR<task_categoryUpdateManyMutationInput, task_categoryUncheckedUpdateManyInput>
    /**
     * Filter which task_categories to update
     */
    where?: task_categoryWhereInput
    /**
     * Limit how many task_categories to update.
     */
    limit?: number
  }

  /**
   * task_category upsert
   */
  export type task_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the task_category to update in case it exists.
     */
    where: task_categoryWhereUniqueInput
    /**
     * In case the task_category found by the `where` argument doesn't exist, create a new task_category with this data.
     */
    create: XOR<task_categoryCreateInput, task_categoryUncheckedCreateInput>
    /**
     * In case the task_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_categoryUpdateInput, task_categoryUncheckedUpdateInput>
  }

  /**
   * task_category delete
   */
  export type task_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter which task_category to delete.
     */
    where: task_categoryWhereUniqueInput
  }

  /**
   * task_category deleteMany
   */
  export type task_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_categories to delete
     */
    where?: task_categoryWhereInput
    /**
     * Limit how many task_categories to delete.
     */
    limit?: number
  }

  /**
   * task_category.task
   */
  export type task_category$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task_category without action
   */
  export type task_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
  }


  /**
   * Model bill_expense
   */

  export type AggregateBill_expense = {
    _count: Bill_expenseCountAggregateOutputType | null
    _avg: Bill_expenseAvgAggregateOutputType | null
    _sum: Bill_expenseSumAggregateOutputType | null
    _min: Bill_expenseMinAggregateOutputType | null
    _max: Bill_expenseMaxAggregateOutputType | null
  }

  export type Bill_expenseAvgAggregateOutputType = {
    id: number | null
    expense_id: number | null
    running_bill: number | null
  }

  export type Bill_expenseSumAggregateOutputType = {
    id: bigint | null
    expense_id: bigint | null
    running_bill: number | null
  }

  export type Bill_expenseMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    expense_id: bigint | null
    repeating_type: $Enums.DateRepeatType | null
    running_bill: number | null
  }

  export type Bill_expenseMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    expense_id: bigint | null
    repeating_type: $Enums.DateRepeatType | null
    running_bill: number | null
  }

  export type Bill_expenseCountAggregateOutputType = {
    id: number
    created_at: number
    expense_id: number
    repeating_type: number
    running_bill: number
    _all: number
  }


  export type Bill_expenseAvgAggregateInputType = {
    id?: true
    expense_id?: true
    running_bill?: true
  }

  export type Bill_expenseSumAggregateInputType = {
    id?: true
    expense_id?: true
    running_bill?: true
  }

  export type Bill_expenseMinAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
    repeating_type?: true
    running_bill?: true
  }

  export type Bill_expenseMaxAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
    repeating_type?: true
    running_bill?: true
  }

  export type Bill_expenseCountAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
    repeating_type?: true
    running_bill?: true
    _all?: true
  }

  export type Bill_expenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bill_expense to aggregate.
     */
    where?: bill_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bill_expenses to fetch.
     */
    orderBy?: bill_expenseOrderByWithRelationInput | bill_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bill_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bill_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bill_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bill_expenses
    **/
    _count?: true | Bill_expenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bill_expenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bill_expenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bill_expenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bill_expenseMaxAggregateInputType
  }

  export type GetBill_expenseAggregateType<T extends Bill_expenseAggregateArgs> = {
        [P in keyof T & keyof AggregateBill_expense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill_expense[P]>
      : GetScalarType<T[P], AggregateBill_expense[P]>
  }




  export type bill_expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bill_expenseWhereInput
    orderBy?: bill_expenseOrderByWithAggregationInput | bill_expenseOrderByWithAggregationInput[]
    by: Bill_expenseScalarFieldEnum[] | Bill_expenseScalarFieldEnum
    having?: bill_expenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bill_expenseCountAggregateInputType | true
    _avg?: Bill_expenseAvgAggregateInputType
    _sum?: Bill_expenseSumAggregateInputType
    _min?: Bill_expenseMinAggregateInputType
    _max?: Bill_expenseMaxAggregateInputType
  }

  export type Bill_expenseGroupByOutputType = {
    id: bigint
    created_at: Date
    expense_id: bigint
    repeating_type: $Enums.DateRepeatType | null
    running_bill: number | null
    _count: Bill_expenseCountAggregateOutputType | null
    _avg: Bill_expenseAvgAggregateOutputType | null
    _sum: Bill_expenseSumAggregateOutputType | null
    _min: Bill_expenseMinAggregateOutputType | null
    _max: Bill_expenseMaxAggregateOutputType | null
  }

  type GetBill_expenseGroupByPayload<T extends bill_expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bill_expenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bill_expenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bill_expenseGroupByOutputType[P]>
            : GetScalarType<T[P], Bill_expenseGroupByOutputType[P]>
        }
      >
    >


  export type bill_expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    repeating_type?: boolean
    running_bill?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill_expense"]>

  export type bill_expenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    repeating_type?: boolean
    running_bill?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill_expense"]>

  export type bill_expenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    repeating_type?: boolean
    running_bill?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill_expense"]>

  export type bill_expenseSelectScalar = {
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    repeating_type?: boolean
    running_bill?: boolean
  }

  export type bill_expenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "expense_id" | "repeating_type" | "running_bill", ExtArgs["result"]["bill_expense"]>
  export type bill_expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }
  export type bill_expenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }
  export type bill_expenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }

  export type $bill_expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bill_expense"
    objects: {
      expense: Prisma.$expensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      expense_id: bigint
      repeating_type: $Enums.DateRepeatType | null
      running_bill: number | null
    }, ExtArgs["result"]["bill_expense"]>
    composites: {}
  }

  type bill_expenseGetPayload<S extends boolean | null | undefined | bill_expenseDefaultArgs> = $Result.GetResult<Prisma.$bill_expensePayload, S>

  type bill_expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bill_expenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bill_expenseCountAggregateInputType | true
    }

  export interface bill_expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bill_expense'], meta: { name: 'bill_expense' } }
    /**
     * Find zero or one Bill_expense that matches the filter.
     * @param {bill_expenseFindUniqueArgs} args - Arguments to find a Bill_expense
     * @example
     * // Get one Bill_expense
     * const bill_expense = await prisma.bill_expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bill_expenseFindUniqueArgs>(args: SelectSubset<T, bill_expenseFindUniqueArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill_expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bill_expenseFindUniqueOrThrowArgs} args - Arguments to find a Bill_expense
     * @example
     * // Get one Bill_expense
     * const bill_expense = await prisma.bill_expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bill_expenseFindUniqueOrThrowArgs>(args: SelectSubset<T, bill_expenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill_expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_expenseFindFirstArgs} args - Arguments to find a Bill_expense
     * @example
     * // Get one Bill_expense
     * const bill_expense = await prisma.bill_expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bill_expenseFindFirstArgs>(args?: SelectSubset<T, bill_expenseFindFirstArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill_expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_expenseFindFirstOrThrowArgs} args - Arguments to find a Bill_expense
     * @example
     * // Get one Bill_expense
     * const bill_expense = await prisma.bill_expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bill_expenseFindFirstOrThrowArgs>(args?: SelectSubset<T, bill_expenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bill_expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_expenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bill_expenses
     * const bill_expenses = await prisma.bill_expense.findMany()
     * 
     * // Get first 10 Bill_expenses
     * const bill_expenses = await prisma.bill_expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bill_expenseWithIdOnly = await prisma.bill_expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bill_expenseFindManyArgs>(args?: SelectSubset<T, bill_expenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill_expense.
     * @param {bill_expenseCreateArgs} args - Arguments to create a Bill_expense.
     * @example
     * // Create one Bill_expense
     * const Bill_expense = await prisma.bill_expense.create({
     *   data: {
     *     // ... data to create a Bill_expense
     *   }
     * })
     * 
     */
    create<T extends bill_expenseCreateArgs>(args: SelectSubset<T, bill_expenseCreateArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bill_expenses.
     * @param {bill_expenseCreateManyArgs} args - Arguments to create many Bill_expenses.
     * @example
     * // Create many Bill_expenses
     * const bill_expense = await prisma.bill_expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bill_expenseCreateManyArgs>(args?: SelectSubset<T, bill_expenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bill_expenses and returns the data saved in the database.
     * @param {bill_expenseCreateManyAndReturnArgs} args - Arguments to create many Bill_expenses.
     * @example
     * // Create many Bill_expenses
     * const bill_expense = await prisma.bill_expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bill_expenses and only return the `id`
     * const bill_expenseWithIdOnly = await prisma.bill_expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bill_expenseCreateManyAndReturnArgs>(args?: SelectSubset<T, bill_expenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill_expense.
     * @param {bill_expenseDeleteArgs} args - Arguments to delete one Bill_expense.
     * @example
     * // Delete one Bill_expense
     * const Bill_expense = await prisma.bill_expense.delete({
     *   where: {
     *     // ... filter to delete one Bill_expense
     *   }
     * })
     * 
     */
    delete<T extends bill_expenseDeleteArgs>(args: SelectSubset<T, bill_expenseDeleteArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill_expense.
     * @param {bill_expenseUpdateArgs} args - Arguments to update one Bill_expense.
     * @example
     * // Update one Bill_expense
     * const bill_expense = await prisma.bill_expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bill_expenseUpdateArgs>(args: SelectSubset<T, bill_expenseUpdateArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bill_expenses.
     * @param {bill_expenseDeleteManyArgs} args - Arguments to filter Bill_expenses to delete.
     * @example
     * // Delete a few Bill_expenses
     * const { count } = await prisma.bill_expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bill_expenseDeleteManyArgs>(args?: SelectSubset<T, bill_expenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bill_expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bill_expenses
     * const bill_expense = await prisma.bill_expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bill_expenseUpdateManyArgs>(args: SelectSubset<T, bill_expenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bill_expenses and returns the data updated in the database.
     * @param {bill_expenseUpdateManyAndReturnArgs} args - Arguments to update many Bill_expenses.
     * @example
     * // Update many Bill_expenses
     * const bill_expense = await prisma.bill_expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bill_expenses and only return the `id`
     * const bill_expenseWithIdOnly = await prisma.bill_expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bill_expenseUpdateManyAndReturnArgs>(args: SelectSubset<T, bill_expenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill_expense.
     * @param {bill_expenseUpsertArgs} args - Arguments to update or create a Bill_expense.
     * @example
     * // Update or create a Bill_expense
     * const bill_expense = await prisma.bill_expense.upsert({
     *   create: {
     *     // ... data to create a Bill_expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill_expense we want to update
     *   }
     * })
     */
    upsert<T extends bill_expenseUpsertArgs>(args: SelectSubset<T, bill_expenseUpsertArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bill_expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_expenseCountArgs} args - Arguments to filter Bill_expenses to count.
     * @example
     * // Count the number of Bill_expenses
     * const count = await prisma.bill_expense.count({
     *   where: {
     *     // ... the filter for the Bill_expenses we want to count
     *   }
     * })
    **/
    count<T extends bill_expenseCountArgs>(
      args?: Subset<T, bill_expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bill_expenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill_expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_expenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bill_expenseAggregateArgs>(args: Subset<T, Bill_expenseAggregateArgs>): Prisma.PrismaPromise<GetBill_expenseAggregateType<T>>

    /**
     * Group by Bill_expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bill_expenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bill_expenseGroupByArgs['orderBy'] }
        : { orderBy?: bill_expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bill_expenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBill_expenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bill_expense model
   */
  readonly fields: bill_expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bill_expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bill_expenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends expenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, expenseDefaultArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bill_expense model
   */
  interface bill_expenseFieldRefs {
    readonly id: FieldRef<"bill_expense", 'BigInt'>
    readonly created_at: FieldRef<"bill_expense", 'DateTime'>
    readonly expense_id: FieldRef<"bill_expense", 'BigInt'>
    readonly repeating_type: FieldRef<"bill_expense", 'DateRepeatType'>
    readonly running_bill: FieldRef<"bill_expense", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * bill_expense findUnique
   */
  export type bill_expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * Filter, which bill_expense to fetch.
     */
    where: bill_expenseWhereUniqueInput
  }

  /**
   * bill_expense findUniqueOrThrow
   */
  export type bill_expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * Filter, which bill_expense to fetch.
     */
    where: bill_expenseWhereUniqueInput
  }

  /**
   * bill_expense findFirst
   */
  export type bill_expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * Filter, which bill_expense to fetch.
     */
    where?: bill_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bill_expenses to fetch.
     */
    orderBy?: bill_expenseOrderByWithRelationInput | bill_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bill_expenses.
     */
    cursor?: bill_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bill_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bill_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bill_expenses.
     */
    distinct?: Bill_expenseScalarFieldEnum | Bill_expenseScalarFieldEnum[]
  }

  /**
   * bill_expense findFirstOrThrow
   */
  export type bill_expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * Filter, which bill_expense to fetch.
     */
    where?: bill_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bill_expenses to fetch.
     */
    orderBy?: bill_expenseOrderByWithRelationInput | bill_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bill_expenses.
     */
    cursor?: bill_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bill_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bill_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bill_expenses.
     */
    distinct?: Bill_expenseScalarFieldEnum | Bill_expenseScalarFieldEnum[]
  }

  /**
   * bill_expense findMany
   */
  export type bill_expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * Filter, which bill_expenses to fetch.
     */
    where?: bill_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bill_expenses to fetch.
     */
    orderBy?: bill_expenseOrderByWithRelationInput | bill_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bill_expenses.
     */
    cursor?: bill_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bill_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bill_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bill_expenses.
     */
    distinct?: Bill_expenseScalarFieldEnum | Bill_expenseScalarFieldEnum[]
  }

  /**
   * bill_expense create
   */
  export type bill_expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * The data needed to create a bill_expense.
     */
    data: XOR<bill_expenseCreateInput, bill_expenseUncheckedCreateInput>
  }

  /**
   * bill_expense createMany
   */
  export type bill_expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bill_expenses.
     */
    data: bill_expenseCreateManyInput | bill_expenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bill_expense createManyAndReturn
   */
  export type bill_expenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * The data used to create many bill_expenses.
     */
    data: bill_expenseCreateManyInput | bill_expenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bill_expense update
   */
  export type bill_expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * The data needed to update a bill_expense.
     */
    data: XOR<bill_expenseUpdateInput, bill_expenseUncheckedUpdateInput>
    /**
     * Choose, which bill_expense to update.
     */
    where: bill_expenseWhereUniqueInput
  }

  /**
   * bill_expense updateMany
   */
  export type bill_expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bill_expenses.
     */
    data: XOR<bill_expenseUpdateManyMutationInput, bill_expenseUncheckedUpdateManyInput>
    /**
     * Filter which bill_expenses to update
     */
    where?: bill_expenseWhereInput
    /**
     * Limit how many bill_expenses to update.
     */
    limit?: number
  }

  /**
   * bill_expense updateManyAndReturn
   */
  export type bill_expenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * The data used to update bill_expenses.
     */
    data: XOR<bill_expenseUpdateManyMutationInput, bill_expenseUncheckedUpdateManyInput>
    /**
     * Filter which bill_expenses to update
     */
    where?: bill_expenseWhereInput
    /**
     * Limit how many bill_expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bill_expense upsert
   */
  export type bill_expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * The filter to search for the bill_expense to update in case it exists.
     */
    where: bill_expenseWhereUniqueInput
    /**
     * In case the bill_expense found by the `where` argument doesn't exist, create a new bill_expense with this data.
     */
    create: XOR<bill_expenseCreateInput, bill_expenseUncheckedCreateInput>
    /**
     * In case the bill_expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bill_expenseUpdateInput, bill_expenseUncheckedUpdateInput>
  }

  /**
   * bill_expense delete
   */
  export type bill_expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    /**
     * Filter which bill_expense to delete.
     */
    where: bill_expenseWhereUniqueInput
  }

  /**
   * bill_expense deleteMany
   */
  export type bill_expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bill_expenses to delete
     */
    where?: bill_expenseWhereInput
    /**
     * Limit how many bill_expenses to delete.
     */
    limit?: number
  }

  /**
   * bill_expense without action
   */
  export type bill_expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
  }


  /**
   * Model expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    id: bigint | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    description: string | null
    expense_type: $Enums.ExpenseType | null
    user_id: string | null
    is_archived: boolean | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    description: string | null
    expense_type: $Enums.ExpenseType | null
    user_id: string | null
    is_archived: boolean | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    description: number
    expense_type: number
    user_id: number
    is_archived: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    id?: true
  }

  export type ExpenseSumAggregateInputType = {
    id?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    description?: true
    expense_type?: true
    user_id?: true
    is_archived?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    description?: true
    expense_type?: true
    user_id?: true
    is_archived?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    description?: true
    expense_type?: true
    user_id?: true
    is_archived?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense to aggregate.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput
    orderBy?: expenseOrderByWithAggregationInput | expenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: expenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: bigint
    created_at: Date
    name: string | null
    description: string | null
    expense_type: $Enums.ExpenseType | null
    user_id: string | null
    is_archived: boolean
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    description?: boolean
    expense_type?: boolean
    user_id?: boolean
    is_archived?: boolean
    bill_expense?: boolean | expense$bill_expenseArgs<ExtArgs>
    stock?: boolean | expense$stockArgs<ExtArgs>
    task?: boolean | expense$taskArgs<ExtArgs>
    transaction?: boolean | expense$transactionArgs<ExtArgs>
    transportation_expense?: boolean | expense$transportation_expenseArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type expenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    description?: boolean
    expense_type?: boolean
    user_id?: boolean
    is_archived?: boolean
  }, ExtArgs["result"]["expense"]>

  export type expenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    description?: boolean
    expense_type?: boolean
    user_id?: boolean
    is_archived?: boolean
  }, ExtArgs["result"]["expense"]>

  export type expenseSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    description?: boolean
    expense_type?: boolean
    user_id?: boolean
    is_archived?: boolean
  }

  export type expenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "description" | "expense_type" | "user_id" | "is_archived", ExtArgs["result"]["expense"]>
  export type expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill_expense?: boolean | expense$bill_expenseArgs<ExtArgs>
    stock?: boolean | expense$stockArgs<ExtArgs>
    task?: boolean | expense$taskArgs<ExtArgs>
    transaction?: boolean | expense$transactionArgs<ExtArgs>
    transportation_expense?: boolean | expense$transportation_expenseArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type expenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type expenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expense"
    objects: {
      bill_expense: Prisma.$bill_expensePayload<ExtArgs> | null
      stock: Prisma.$stockPayload<ExtArgs> | null
      task: Prisma.$taskPayload<ExtArgs>[]
      transaction: Prisma.$transactionPayload<ExtArgs>[]
      transportation_expense: Prisma.$transportation_expensePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      name: string | null
      description: string | null
      expense_type: $Enums.ExpenseType | null
      user_id: string | null
      is_archived: boolean
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type expenseGetPayload<S extends boolean | null | undefined | expenseDefaultArgs> = $Result.GetResult<Prisma.$expensePayload, S>

  type expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense'], meta: { name: 'expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {expenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expenseFindUniqueArgs>(args: SelectSubset<T, expenseFindUniqueArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expenseFindUniqueOrThrowArgs>(args: SelectSubset<T, expenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expenseFindFirstArgs>(args?: SelectSubset<T, expenseFindFirstArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expenseFindFirstOrThrowArgs>(args?: SelectSubset<T, expenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expenseFindManyArgs>(args?: SelectSubset<T, expenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {expenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends expenseCreateArgs>(args: SelectSubset<T, expenseCreateArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {expenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expenseCreateManyArgs>(args?: SelectSubset<T, expenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {expenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expenseCreateManyAndReturnArgs>(args?: SelectSubset<T, expenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {expenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends expenseDeleteArgs>(args: SelectSubset<T, expenseDeleteArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {expenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expenseUpdateArgs>(args: SelectSubset<T, expenseUpdateArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {expenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expenseDeleteManyArgs>(args?: SelectSubset<T, expenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expenseUpdateManyArgs>(args: SelectSubset<T, expenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {expenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expenseUpdateManyAndReturnArgs>(args: SelectSubset<T, expenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {expenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends expenseUpsertArgs>(args: SelectSubset<T, expenseUpsertArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expenseCountArgs>(
      args?: Subset<T, expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expenseGroupByArgs['orderBy'] }
        : { orderBy?: expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expense model
   */
  readonly fields: expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill_expense<T extends expense$bill_expenseArgs<ExtArgs> = {}>(args?: Subset<T, expense$bill_expenseArgs<ExtArgs>>): Prisma__bill_expenseClient<$Result.GetResult<Prisma.$bill_expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stock<T extends expense$stockArgs<ExtArgs> = {}>(args?: Subset<T, expense$stockArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    task<T extends expense$taskArgs<ExtArgs> = {}>(args?: Subset<T, expense$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends expense$transactionArgs<ExtArgs> = {}>(args?: Subset<T, expense$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transportation_expense<T extends expense$transportation_expenseArgs<ExtArgs> = {}>(args?: Subset<T, expense$transportation_expenseArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expense model
   */
  interface expenseFieldRefs {
    readonly id: FieldRef<"expense", 'BigInt'>
    readonly created_at: FieldRef<"expense", 'DateTime'>
    readonly name: FieldRef<"expense", 'String'>
    readonly description: FieldRef<"expense", 'String'>
    readonly expense_type: FieldRef<"expense", 'ExpenseType'>
    readonly user_id: FieldRef<"expense", 'String'>
    readonly is_archived: FieldRef<"expense", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * expense findUnique
   */
  export type expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense findUniqueOrThrow
   */
  export type expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense findFirst
   */
  export type expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense findFirstOrThrow
   */
  export type expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense findMany
   */
  export type expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense create
   */
  export type expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * The data needed to create a expense.
     */
    data?: XOR<expenseCreateInput, expenseUncheckedCreateInput>
  }

  /**
   * expense createMany
   */
  export type expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expenseCreateManyInput | expenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expense createManyAndReturn
   */
  export type expenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * The data used to create many expenses.
     */
    data: expenseCreateManyInput | expenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expense update
   */
  export type expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * The data needed to update a expense.
     */
    data: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>
    /**
     * Choose, which expense to update.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense updateMany
   */
  export type expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expenseWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expense updateManyAndReturn
   */
  export type expenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * The data used to update expenses.
     */
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expenseWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expense upsert
   */
  export type expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * The filter to search for the expense to update in case it exists.
     */
    where: expenseWhereUniqueInput
    /**
     * In case the expense found by the `where` argument doesn't exist, create a new expense with this data.
     */
    create: XOR<expenseCreateInput, expenseUncheckedCreateInput>
    /**
     * In case the expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>
  }

  /**
   * expense delete
   */
  export type expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter which expense to delete.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense deleteMany
   */
  export type expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expenseWhereInput
    /**
     * Limit how many expenses to delete.
     */
    limit?: number
  }

  /**
   * expense.bill_expense
   */
  export type expense$bill_expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill_expense
     */
    select?: bill_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bill_expense
     */
    omit?: bill_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bill_expenseInclude<ExtArgs> | null
    where?: bill_expenseWhereInput
  }

  /**
   * expense.stock
   */
  export type expense$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    where?: stockWhereInput
  }

  /**
   * expense.task
   */
  export type expense$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * expense.transaction
   */
  export type expense$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * expense.transportation_expense
   */
  export type expense$transportation_expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    where?: transportation_expenseWhereInput
  }

  /**
   * expense without action
   */
  export type expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
  }


  /**
   * Model stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    id: number | null
    curr_amount: number | null
    min_amount: number | null
    expense_id: number | null
  }

  export type StockSumAggregateOutputType = {
    id: bigint | null
    curr_amount: number | null
    min_amount: number | null
    expense_id: bigint | null
  }

  export type StockMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    curr_amount: number | null
    min_amount: number | null
    expense_id: bigint | null
  }

  export type StockMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    curr_amount: number | null
    min_amount: number | null
    expense_id: bigint | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    created_at: number
    curr_amount: number
    min_amount: number
    expense_id: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    id?: true
    curr_amount?: true
    min_amount?: true
    expense_id?: true
  }

  export type StockSumAggregateInputType = {
    id?: true
    curr_amount?: true
    min_amount?: true
    expense_id?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    created_at?: true
    curr_amount?: true
    min_amount?: true
    expense_id?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    created_at?: true
    curr_amount?: true
    min_amount?: true
    expense_id?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    created_at?: true
    curr_amount?: true
    min_amount?: true
    expense_id?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock to aggregate.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type stockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput
    orderBy?: stockOrderByWithAggregationInput | stockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: stockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: bigint
    created_at: Date
    curr_amount: number | null
    min_amount: number
    expense_id: bigint
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type stockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    curr_amount?: boolean
    min_amount?: boolean
    expense_id?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type stockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    curr_amount?: boolean
    min_amount?: boolean
    expense_id?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type stockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    curr_amount?: boolean
    min_amount?: boolean
    expense_id?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type stockSelectScalar = {
    id?: boolean
    created_at?: boolean
    curr_amount?: boolean
    min_amount?: boolean
    expense_id?: boolean
  }

  export type stockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "curr_amount" | "min_amount" | "expense_id", ExtArgs["result"]["stock"]>
  export type stockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }
  export type stockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }
  export type stockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }

  export type $stockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock"
    objects: {
      expense: Prisma.$expensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      curr_amount: number | null
      min_amount: number
      expense_id: bigint
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type stockGetPayload<S extends boolean | null | undefined | stockDefaultArgs> = $Result.GetResult<Prisma.$stockPayload, S>

  type stockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface stockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock'], meta: { name: 'stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {stockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stockFindUniqueArgs>(args: SelectSubset<T, stockFindUniqueArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stockFindUniqueOrThrowArgs>(args: SelectSubset<T, stockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stockFindFirstArgs>(args?: SelectSubset<T, stockFindFirstArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stockFindFirstOrThrowArgs>(args?: SelectSubset<T, stockFindFirstOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stockFindManyArgs>(args?: SelectSubset<T, stockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {stockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends stockCreateArgs>(args: SelectSubset<T, stockCreateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {stockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stockCreateManyArgs>(args?: SelectSubset<T, stockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {stockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stockCreateManyAndReturnArgs>(args?: SelectSubset<T, stockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock.
     * @param {stockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends stockDeleteArgs>(args: SelectSubset<T, stockDeleteArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {stockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stockUpdateArgs>(args: SelectSubset<T, stockUpdateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {stockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stockDeleteManyArgs>(args?: SelectSubset<T, stockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stockUpdateManyArgs>(args: SelectSubset<T, stockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {stockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stockUpdateManyAndReturnArgs>(args: SelectSubset<T, stockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock.
     * @param {stockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends stockUpsertArgs>(args: SelectSubset<T, stockUpsertArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends stockCountArgs>(
      args?: Subset<T, stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stockGroupByArgs['orderBy'] }
        : { orderBy?: stockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock model
   */
  readonly fields: stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends expenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, expenseDefaultArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock model
   */
  interface stockFieldRefs {
    readonly id: FieldRef<"stock", 'BigInt'>
    readonly created_at: FieldRef<"stock", 'DateTime'>
    readonly curr_amount: FieldRef<"stock", 'Int'>
    readonly min_amount: FieldRef<"stock", 'Int'>
    readonly expense_id: FieldRef<"stock", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * stock findUnique
   */
  export type stockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findUniqueOrThrow
   */
  export type stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findFirst
   */
  export type stockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findFirstOrThrow
   */
  export type stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findMany
   */
  export type stockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock create
   */
  export type stockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The data needed to create a stock.
     */
    data: XOR<stockCreateInput, stockUncheckedCreateInput>
  }

  /**
   * stock createMany
   */
  export type stockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock createManyAndReturn
   */
  export type stockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stock update
   */
  export type stockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The data needed to update a stock.
     */
    data: XOR<stockUpdateInput, stockUncheckedUpdateInput>
    /**
     * Choose, which stock to update.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock updateMany
   */
  export type stockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
  }

  /**
   * stock updateManyAndReturn
   */
  export type stockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stock upsert
   */
  export type stockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The filter to search for the stock to update in case it exists.
     */
    where: stockWhereUniqueInput
    /**
     * In case the stock found by the `where` argument doesn't exist, create a new stock with this data.
     */
    create: XOR<stockCreateInput, stockUncheckedCreateInput>
    /**
     * In case the stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stockUpdateInput, stockUncheckedUpdateInput>
  }

  /**
   * stock delete
   */
  export type stockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter which stock to delete.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock deleteMany
   */
  export type stockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to delete.
     */
    limit?: number
  }

  /**
   * stock without action
   */
  export type stockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    expense_id: number | null
    amount: number | null
    price: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: bigint | null
    expense_id: bigint | null
    amount: number | null
    price: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    expense_id: bigint | null
    amount: number | null
    price: number | null
    status: $Enums.TransactionStatus | null
    repeat_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    expense_id: bigint | null
    amount: number | null
    price: number | null
    status: $Enums.TransactionStatus | null
    repeat_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    created_at: number
    expense_id: number
    amount: number
    price: number
    status: number
    repeat_at: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    expense_id?: true
    amount?: true
    price?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    expense_id?: true
    amount?: true
    price?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
    amount?: true
    price?: true
    status?: true
    repeat_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
    amount?: true
    price?: true
    status?: true
    repeat_at?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
    amount?: true
    price?: true
    status?: true
    repeat_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: bigint
    created_at: Date
    expense_id: bigint | null
    amount: number
    price: number | null
    status: $Enums.TransactionStatus | null
    repeat_at: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    amount?: boolean
    price?: boolean
    status?: boolean
    repeat_at?: boolean
    expense?: boolean | transaction$expenseArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    amount?: boolean
    price?: boolean
    status?: boolean
    repeat_at?: boolean
    expense?: boolean | transaction$expenseArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    amount?: boolean
    price?: boolean
    status?: boolean
    repeat_at?: boolean
    expense?: boolean | transaction$expenseArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    amount?: boolean
    price?: boolean
    status?: boolean
    repeat_at?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "expense_id" | "amount" | "price" | "status" | "repeat_at", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | transaction$expenseArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | transaction$expenseArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | transaction$expenseArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      expense: Prisma.$expensePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      expense_id: bigint | null
      amount: number
      price: number | null
      status: $Enums.TransactionStatus | null
      repeat_at: Date | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends transaction$expenseArgs<ExtArgs> = {}>(args?: Subset<T, transaction$expenseArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'BigInt'>
    readonly created_at: FieldRef<"transaction", 'DateTime'>
    readonly expense_id: FieldRef<"transaction", 'BigInt'>
    readonly amount: FieldRef<"transaction", 'Int'>
    readonly price: FieldRef<"transaction", 'Float'>
    readonly status: FieldRef<"transaction", 'TransactionStatus'>
    readonly repeat_at: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data?: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction.expense
   */
  export type transaction$expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    where?: expenseWhereInput
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model transportation_expense
   */

  export type AggregateTransportation_expense = {
    _count: Transportation_expenseCountAggregateOutputType | null
    _avg: Transportation_expenseAvgAggregateOutputType | null
    _sum: Transportation_expenseSumAggregateOutputType | null
    _min: Transportation_expenseMinAggregateOutputType | null
    _max: Transportation_expenseMaxAggregateOutputType | null
  }

  export type Transportation_expenseAvgAggregateOutputType = {
    id: number | null
    expense_id: number | null
    cost_list: number | null
  }

  export type Transportation_expenseSumAggregateOutputType = {
    id: bigint | null
    expense_id: bigint | null
    cost_list: number[]
  }

  export type Transportation_expenseMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    expense_id: bigint | null
  }

  export type Transportation_expenseMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    expense_id: bigint | null
  }

  export type Transportation_expenseCountAggregateOutputType = {
    id: number
    created_at: number
    expense_id: number
    cost_list: number
    _all: number
  }


  export type Transportation_expenseAvgAggregateInputType = {
    id?: true
    expense_id?: true
    cost_list?: true
  }

  export type Transportation_expenseSumAggregateInputType = {
    id?: true
    expense_id?: true
    cost_list?: true
  }

  export type Transportation_expenseMinAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
  }

  export type Transportation_expenseMaxAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
  }

  export type Transportation_expenseCountAggregateInputType = {
    id?: true
    created_at?: true
    expense_id?: true
    cost_list?: true
    _all?: true
  }

  export type Transportation_expenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transportation_expense to aggregate.
     */
    where?: transportation_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transportation_expenses to fetch.
     */
    orderBy?: transportation_expenseOrderByWithRelationInput | transportation_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transportation_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transportation_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transportation_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transportation_expenses
    **/
    _count?: true | Transportation_expenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transportation_expenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transportation_expenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transportation_expenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transportation_expenseMaxAggregateInputType
  }

  export type GetTransportation_expenseAggregateType<T extends Transportation_expenseAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportation_expense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportation_expense[P]>
      : GetScalarType<T[P], AggregateTransportation_expense[P]>
  }




  export type transportation_expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transportation_expenseWhereInput
    orderBy?: transportation_expenseOrderByWithAggregationInput | transportation_expenseOrderByWithAggregationInput[]
    by: Transportation_expenseScalarFieldEnum[] | Transportation_expenseScalarFieldEnum
    having?: transportation_expenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transportation_expenseCountAggregateInputType | true
    _avg?: Transportation_expenseAvgAggregateInputType
    _sum?: Transportation_expenseSumAggregateInputType
    _min?: Transportation_expenseMinAggregateInputType
    _max?: Transportation_expenseMaxAggregateInputType
  }

  export type Transportation_expenseGroupByOutputType = {
    id: bigint
    created_at: Date
    expense_id: bigint
    cost_list: number[]
    _count: Transportation_expenseCountAggregateOutputType | null
    _avg: Transportation_expenseAvgAggregateOutputType | null
    _sum: Transportation_expenseSumAggregateOutputType | null
    _min: Transportation_expenseMinAggregateOutputType | null
    _max: Transportation_expenseMaxAggregateOutputType | null
  }

  type GetTransportation_expenseGroupByPayload<T extends transportation_expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transportation_expenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transportation_expenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transportation_expenseGroupByOutputType[P]>
            : GetScalarType<T[P], Transportation_expenseGroupByOutputType[P]>
        }
      >
    >


  export type transportation_expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    cost_list?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportation_expense"]>

  export type transportation_expenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    cost_list?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportation_expense"]>

  export type transportation_expenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    cost_list?: boolean
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportation_expense"]>

  export type transportation_expenseSelectScalar = {
    id?: boolean
    created_at?: boolean
    expense_id?: boolean
    cost_list?: boolean
  }

  export type transportation_expenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "expense_id" | "cost_list", ExtArgs["result"]["transportation_expense"]>
  export type transportation_expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }
  export type transportation_expenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }
  export type transportation_expenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>
  }

  export type $transportation_expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transportation_expense"
    objects: {
      expense: Prisma.$expensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      expense_id: bigint
      cost_list: number[]
    }, ExtArgs["result"]["transportation_expense"]>
    composites: {}
  }

  type transportation_expenseGetPayload<S extends boolean | null | undefined | transportation_expenseDefaultArgs> = $Result.GetResult<Prisma.$transportation_expensePayload, S>

  type transportation_expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transportation_expenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transportation_expenseCountAggregateInputType | true
    }

  export interface transportation_expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transportation_expense'], meta: { name: 'transportation_expense' } }
    /**
     * Find zero or one Transportation_expense that matches the filter.
     * @param {transportation_expenseFindUniqueArgs} args - Arguments to find a Transportation_expense
     * @example
     * // Get one Transportation_expense
     * const transportation_expense = await prisma.transportation_expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transportation_expenseFindUniqueArgs>(args: SelectSubset<T, transportation_expenseFindUniqueArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transportation_expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transportation_expenseFindUniqueOrThrowArgs} args - Arguments to find a Transportation_expense
     * @example
     * // Get one Transportation_expense
     * const transportation_expense = await prisma.transportation_expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transportation_expenseFindUniqueOrThrowArgs>(args: SelectSubset<T, transportation_expenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportation_expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transportation_expenseFindFirstArgs} args - Arguments to find a Transportation_expense
     * @example
     * // Get one Transportation_expense
     * const transportation_expense = await prisma.transportation_expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transportation_expenseFindFirstArgs>(args?: SelectSubset<T, transportation_expenseFindFirstArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportation_expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transportation_expenseFindFirstOrThrowArgs} args - Arguments to find a Transportation_expense
     * @example
     * // Get one Transportation_expense
     * const transportation_expense = await prisma.transportation_expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transportation_expenseFindFirstOrThrowArgs>(args?: SelectSubset<T, transportation_expenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transportation_expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transportation_expenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transportation_expenses
     * const transportation_expenses = await prisma.transportation_expense.findMany()
     * 
     * // Get first 10 Transportation_expenses
     * const transportation_expenses = await prisma.transportation_expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportation_expenseWithIdOnly = await prisma.transportation_expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transportation_expenseFindManyArgs>(args?: SelectSubset<T, transportation_expenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transportation_expense.
     * @param {transportation_expenseCreateArgs} args - Arguments to create a Transportation_expense.
     * @example
     * // Create one Transportation_expense
     * const Transportation_expense = await prisma.transportation_expense.create({
     *   data: {
     *     // ... data to create a Transportation_expense
     *   }
     * })
     * 
     */
    create<T extends transportation_expenseCreateArgs>(args: SelectSubset<T, transportation_expenseCreateArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transportation_expenses.
     * @param {transportation_expenseCreateManyArgs} args - Arguments to create many Transportation_expenses.
     * @example
     * // Create many Transportation_expenses
     * const transportation_expense = await prisma.transportation_expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transportation_expenseCreateManyArgs>(args?: SelectSubset<T, transportation_expenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transportation_expenses and returns the data saved in the database.
     * @param {transportation_expenseCreateManyAndReturnArgs} args - Arguments to create many Transportation_expenses.
     * @example
     * // Create many Transportation_expenses
     * const transportation_expense = await prisma.transportation_expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transportation_expenses and only return the `id`
     * const transportation_expenseWithIdOnly = await prisma.transportation_expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transportation_expenseCreateManyAndReturnArgs>(args?: SelectSubset<T, transportation_expenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transportation_expense.
     * @param {transportation_expenseDeleteArgs} args - Arguments to delete one Transportation_expense.
     * @example
     * // Delete one Transportation_expense
     * const Transportation_expense = await prisma.transportation_expense.delete({
     *   where: {
     *     // ... filter to delete one Transportation_expense
     *   }
     * })
     * 
     */
    delete<T extends transportation_expenseDeleteArgs>(args: SelectSubset<T, transportation_expenseDeleteArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transportation_expense.
     * @param {transportation_expenseUpdateArgs} args - Arguments to update one Transportation_expense.
     * @example
     * // Update one Transportation_expense
     * const transportation_expense = await prisma.transportation_expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transportation_expenseUpdateArgs>(args: SelectSubset<T, transportation_expenseUpdateArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transportation_expenses.
     * @param {transportation_expenseDeleteManyArgs} args - Arguments to filter Transportation_expenses to delete.
     * @example
     * // Delete a few Transportation_expenses
     * const { count } = await prisma.transportation_expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transportation_expenseDeleteManyArgs>(args?: SelectSubset<T, transportation_expenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportation_expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transportation_expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transportation_expenses
     * const transportation_expense = await prisma.transportation_expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transportation_expenseUpdateManyArgs>(args: SelectSubset<T, transportation_expenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportation_expenses and returns the data updated in the database.
     * @param {transportation_expenseUpdateManyAndReturnArgs} args - Arguments to update many Transportation_expenses.
     * @example
     * // Update many Transportation_expenses
     * const transportation_expense = await prisma.transportation_expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transportation_expenses and only return the `id`
     * const transportation_expenseWithIdOnly = await prisma.transportation_expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transportation_expenseUpdateManyAndReturnArgs>(args: SelectSubset<T, transportation_expenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transportation_expense.
     * @param {transportation_expenseUpsertArgs} args - Arguments to update or create a Transportation_expense.
     * @example
     * // Update or create a Transportation_expense
     * const transportation_expense = await prisma.transportation_expense.upsert({
     *   create: {
     *     // ... data to create a Transportation_expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transportation_expense we want to update
     *   }
     * })
     */
    upsert<T extends transportation_expenseUpsertArgs>(args: SelectSubset<T, transportation_expenseUpsertArgs<ExtArgs>>): Prisma__transportation_expenseClient<$Result.GetResult<Prisma.$transportation_expensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transportation_expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transportation_expenseCountArgs} args - Arguments to filter Transportation_expenses to count.
     * @example
     * // Count the number of Transportation_expenses
     * const count = await prisma.transportation_expense.count({
     *   where: {
     *     // ... the filter for the Transportation_expenses we want to count
     *   }
     * })
    **/
    count<T extends transportation_expenseCountArgs>(
      args?: Subset<T, transportation_expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transportation_expenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transportation_expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transportation_expenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transportation_expenseAggregateArgs>(args: Subset<T, Transportation_expenseAggregateArgs>): Prisma.PrismaPromise<GetTransportation_expenseAggregateType<T>>

    /**
     * Group by Transportation_expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transportation_expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transportation_expenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transportation_expenseGroupByArgs['orderBy'] }
        : { orderBy?: transportation_expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transportation_expenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportation_expenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transportation_expense model
   */
  readonly fields: transportation_expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transportation_expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transportation_expenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends expenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, expenseDefaultArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transportation_expense model
   */
  interface transportation_expenseFieldRefs {
    readonly id: FieldRef<"transportation_expense", 'BigInt'>
    readonly created_at: FieldRef<"transportation_expense", 'DateTime'>
    readonly expense_id: FieldRef<"transportation_expense", 'BigInt'>
    readonly cost_list: FieldRef<"transportation_expense", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * transportation_expense findUnique
   */
  export type transportation_expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * Filter, which transportation_expense to fetch.
     */
    where: transportation_expenseWhereUniqueInput
  }

  /**
   * transportation_expense findUniqueOrThrow
   */
  export type transportation_expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * Filter, which transportation_expense to fetch.
     */
    where: transportation_expenseWhereUniqueInput
  }

  /**
   * transportation_expense findFirst
   */
  export type transportation_expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * Filter, which transportation_expense to fetch.
     */
    where?: transportation_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transportation_expenses to fetch.
     */
    orderBy?: transportation_expenseOrderByWithRelationInput | transportation_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transportation_expenses.
     */
    cursor?: transportation_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transportation_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transportation_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transportation_expenses.
     */
    distinct?: Transportation_expenseScalarFieldEnum | Transportation_expenseScalarFieldEnum[]
  }

  /**
   * transportation_expense findFirstOrThrow
   */
  export type transportation_expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * Filter, which transportation_expense to fetch.
     */
    where?: transportation_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transportation_expenses to fetch.
     */
    orderBy?: transportation_expenseOrderByWithRelationInput | transportation_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transportation_expenses.
     */
    cursor?: transportation_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transportation_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transportation_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transportation_expenses.
     */
    distinct?: Transportation_expenseScalarFieldEnum | Transportation_expenseScalarFieldEnum[]
  }

  /**
   * transportation_expense findMany
   */
  export type transportation_expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * Filter, which transportation_expenses to fetch.
     */
    where?: transportation_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transportation_expenses to fetch.
     */
    orderBy?: transportation_expenseOrderByWithRelationInput | transportation_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transportation_expenses.
     */
    cursor?: transportation_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transportation_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transportation_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transportation_expenses.
     */
    distinct?: Transportation_expenseScalarFieldEnum | Transportation_expenseScalarFieldEnum[]
  }

  /**
   * transportation_expense create
   */
  export type transportation_expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * The data needed to create a transportation_expense.
     */
    data: XOR<transportation_expenseCreateInput, transportation_expenseUncheckedCreateInput>
  }

  /**
   * transportation_expense createMany
   */
  export type transportation_expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transportation_expenses.
     */
    data: transportation_expenseCreateManyInput | transportation_expenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transportation_expense createManyAndReturn
   */
  export type transportation_expenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * The data used to create many transportation_expenses.
     */
    data: transportation_expenseCreateManyInput | transportation_expenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transportation_expense update
   */
  export type transportation_expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * The data needed to update a transportation_expense.
     */
    data: XOR<transportation_expenseUpdateInput, transportation_expenseUncheckedUpdateInput>
    /**
     * Choose, which transportation_expense to update.
     */
    where: transportation_expenseWhereUniqueInput
  }

  /**
   * transportation_expense updateMany
   */
  export type transportation_expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transportation_expenses.
     */
    data: XOR<transportation_expenseUpdateManyMutationInput, transportation_expenseUncheckedUpdateManyInput>
    /**
     * Filter which transportation_expenses to update
     */
    where?: transportation_expenseWhereInput
    /**
     * Limit how many transportation_expenses to update.
     */
    limit?: number
  }

  /**
   * transportation_expense updateManyAndReturn
   */
  export type transportation_expenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * The data used to update transportation_expenses.
     */
    data: XOR<transportation_expenseUpdateManyMutationInput, transportation_expenseUncheckedUpdateManyInput>
    /**
     * Filter which transportation_expenses to update
     */
    where?: transportation_expenseWhereInput
    /**
     * Limit how many transportation_expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transportation_expense upsert
   */
  export type transportation_expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * The filter to search for the transportation_expense to update in case it exists.
     */
    where: transportation_expenseWhereUniqueInput
    /**
     * In case the transportation_expense found by the `where` argument doesn't exist, create a new transportation_expense with this data.
     */
    create: XOR<transportation_expenseCreateInput, transportation_expenseUncheckedCreateInput>
    /**
     * In case the transportation_expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transportation_expenseUpdateInput, transportation_expenseUncheckedUpdateInput>
  }

  /**
   * transportation_expense delete
   */
  export type transportation_expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
    /**
     * Filter which transportation_expense to delete.
     */
    where: transportation_expenseWhereUniqueInput
  }

  /**
   * transportation_expense deleteMany
   */
  export type transportation_expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transportation_expenses to delete
     */
    where?: transportation_expenseWhereInput
    /**
     * Limit how many transportation_expenses to delete.
     */
    limit?: number
  }

  /**
   * transportation_expense without action
   */
  export type transportation_expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transportation_expense
     */
    select?: transportation_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transportation_expense
     */
    omit?: transportation_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transportation_expenseInclude<ExtArgs> | null
  }


  /**
   * Model income
   */

  export type AggregateIncome = {
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  export type IncomeAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type IncomeSumAggregateOutputType = {
    id: bigint | null
    amount: number | null
  }

  export type IncomeMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    amount: number | null
    user_id: string | null
    from_job: boolean | null
    date_obtained: Date | null
  }

  export type IncomeMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    amount: number | null
    user_id: string | null
    from_job: boolean | null
    date_obtained: Date | null
  }

  export type IncomeCountAggregateOutputType = {
    id: number
    created_at: number
    amount: number
    user_id: number
    from_job: number
    date_obtained: number
    _all: number
  }


  export type IncomeAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type IncomeSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type IncomeMinAggregateInputType = {
    id?: true
    created_at?: true
    amount?: true
    user_id?: true
    from_job?: true
    date_obtained?: true
  }

  export type IncomeMaxAggregateInputType = {
    id?: true
    created_at?: true
    amount?: true
    user_id?: true
    from_job?: true
    date_obtained?: true
  }

  export type IncomeCountAggregateInputType = {
    id?: true
    created_at?: true
    amount?: true
    user_id?: true
    from_job?: true
    date_obtained?: true
    _all?: true
  }

  export type IncomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which income to aggregate.
     */
    where?: incomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: incomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned incomes
    **/
    _count?: true | IncomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomeMaxAggregateInputType
  }

  export type GetIncomeAggregateType<T extends IncomeAggregateArgs> = {
        [P in keyof T & keyof AggregateIncome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncome[P]>
      : GetScalarType<T[P], AggregateIncome[P]>
  }




  export type incomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomeWhereInput
    orderBy?: incomeOrderByWithAggregationInput | incomeOrderByWithAggregationInput[]
    by: IncomeScalarFieldEnum[] | IncomeScalarFieldEnum
    having?: incomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomeCountAggregateInputType | true
    _avg?: IncomeAvgAggregateInputType
    _sum?: IncomeSumAggregateInputType
    _min?: IncomeMinAggregateInputType
    _max?: IncomeMaxAggregateInputType
  }

  export type IncomeGroupByOutputType = {
    id: bigint
    created_at: Date
    amount: number | null
    user_id: string | null
    from_job: boolean
    date_obtained: Date | null
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  type GetIncomeGroupByPayload<T extends incomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomeGroupByOutputType[P]>
            : GetScalarType<T[P], IncomeGroupByOutputType[P]>
        }
      >
    >


  export type incomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    amount?: boolean
    user_id?: boolean
    from_job?: boolean
    date_obtained?: boolean
  }, ExtArgs["result"]["income"]>

  export type incomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    amount?: boolean
    user_id?: boolean
    from_job?: boolean
    date_obtained?: boolean
  }, ExtArgs["result"]["income"]>

  export type incomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    amount?: boolean
    user_id?: boolean
    from_job?: boolean
    date_obtained?: boolean
  }, ExtArgs["result"]["income"]>

  export type incomeSelectScalar = {
    id?: boolean
    created_at?: boolean
    amount?: boolean
    user_id?: boolean
    from_job?: boolean
    date_obtained?: boolean
  }

  export type incomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "amount" | "user_id" | "from_job" | "date_obtained", ExtArgs["result"]["income"]>

  export type $incomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "income"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      amount: number | null
      user_id: string | null
      from_job: boolean
      date_obtained: Date | null
    }, ExtArgs["result"]["income"]>
    composites: {}
  }

  type incomeGetPayload<S extends boolean | null | undefined | incomeDefaultArgs> = $Result.GetResult<Prisma.$incomePayload, S>

  type incomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<incomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncomeCountAggregateInputType | true
    }

  export interface incomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['income'], meta: { name: 'income' } }
    /**
     * Find zero or one Income that matches the filter.
     * @param {incomeFindUniqueArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends incomeFindUniqueArgs>(args: SelectSubset<T, incomeFindUniqueArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Income that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {incomeFindUniqueOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends incomeFindUniqueOrThrowArgs>(args: SelectSubset<T, incomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeFindFirstArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends incomeFindFirstArgs>(args?: SelectSubset<T, incomeFindFirstArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeFindFirstOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends incomeFindFirstOrThrowArgs>(args?: SelectSubset<T, incomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incomes
     * const incomes = await prisma.income.findMany()
     * 
     * // Get first 10 Incomes
     * const incomes = await prisma.income.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomeWithIdOnly = await prisma.income.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends incomeFindManyArgs>(args?: SelectSubset<T, incomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Income.
     * @param {incomeCreateArgs} args - Arguments to create a Income.
     * @example
     * // Create one Income
     * const Income = await prisma.income.create({
     *   data: {
     *     // ... data to create a Income
     *   }
     * })
     * 
     */
    create<T extends incomeCreateArgs>(args: SelectSubset<T, incomeCreateArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incomes.
     * @param {incomeCreateManyArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends incomeCreateManyArgs>(args?: SelectSubset<T, incomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incomes and returns the data saved in the database.
     * @param {incomeCreateManyAndReturnArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends incomeCreateManyAndReturnArgs>(args?: SelectSubset<T, incomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Income.
     * @param {incomeDeleteArgs} args - Arguments to delete one Income.
     * @example
     * // Delete one Income
     * const Income = await prisma.income.delete({
     *   where: {
     *     // ... filter to delete one Income
     *   }
     * })
     * 
     */
    delete<T extends incomeDeleteArgs>(args: SelectSubset<T, incomeDeleteArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Income.
     * @param {incomeUpdateArgs} args - Arguments to update one Income.
     * @example
     * // Update one Income
     * const income = await prisma.income.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends incomeUpdateArgs>(args: SelectSubset<T, incomeUpdateArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incomes.
     * @param {incomeDeleteManyArgs} args - Arguments to filter Incomes to delete.
     * @example
     * // Delete a few Incomes
     * const { count } = await prisma.income.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends incomeDeleteManyArgs>(args?: SelectSubset<T, incomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends incomeUpdateManyArgs>(args: SelectSubset<T, incomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes and returns the data updated in the database.
     * @param {incomeUpdateManyAndReturnArgs} args - Arguments to update many Incomes.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends incomeUpdateManyAndReturnArgs>(args: SelectSubset<T, incomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Income.
     * @param {incomeUpsertArgs} args - Arguments to update or create a Income.
     * @example
     * // Update or create a Income
     * const income = await prisma.income.upsert({
     *   create: {
     *     // ... data to create a Income
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Income we want to update
     *   }
     * })
     */
    upsert<T extends incomeUpsertArgs>(args: SelectSubset<T, incomeUpsertArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeCountArgs} args - Arguments to filter Incomes to count.
     * @example
     * // Count the number of Incomes
     * const count = await prisma.income.count({
     *   where: {
     *     // ... the filter for the Incomes we want to count
     *   }
     * })
    **/
    count<T extends incomeCountArgs>(
      args?: Subset<T, incomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncomeAggregateArgs>(args: Subset<T, IncomeAggregateArgs>): Prisma.PrismaPromise<GetIncomeAggregateType<T>>

    /**
     * Group by Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends incomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incomeGroupByArgs['orderBy'] }
        : { orderBy?: incomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, incomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the income model
   */
  readonly fields: incomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for income.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the income model
   */
  interface incomeFieldRefs {
    readonly id: FieldRef<"income", 'BigInt'>
    readonly created_at: FieldRef<"income", 'DateTime'>
    readonly amount: FieldRef<"income", 'Float'>
    readonly user_id: FieldRef<"income", 'String'>
    readonly from_job: FieldRef<"income", 'Boolean'>
    readonly date_obtained: FieldRef<"income", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * income findUnique
   */
  export type incomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Filter, which income to fetch.
     */
    where: incomeWhereUniqueInput
  }

  /**
   * income findUniqueOrThrow
   */
  export type incomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Filter, which income to fetch.
     */
    where: incomeWhereUniqueInput
  }

  /**
   * income findFirst
   */
  export type incomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Filter, which income to fetch.
     */
    where?: incomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incomes.
     */
    cursor?: incomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * income findFirstOrThrow
   */
  export type incomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Filter, which income to fetch.
     */
    where?: incomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incomes.
     */
    cursor?: incomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * income findMany
   */
  export type incomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Filter, which incomes to fetch.
     */
    where?: incomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing incomes.
     */
    cursor?: incomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * income create
   */
  export type incomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * The data needed to create a income.
     */
    data?: XOR<incomeCreateInput, incomeUncheckedCreateInput>
  }

  /**
   * income createMany
   */
  export type incomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incomes.
     */
    data: incomeCreateManyInput | incomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * income createManyAndReturn
   */
  export type incomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * The data used to create many incomes.
     */
    data: incomeCreateManyInput | incomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * income update
   */
  export type incomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * The data needed to update a income.
     */
    data: XOR<incomeUpdateInput, incomeUncheckedUpdateInput>
    /**
     * Choose, which income to update.
     */
    where: incomeWhereUniqueInput
  }

  /**
   * income updateMany
   */
  export type incomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incomes.
     */
    data: XOR<incomeUpdateManyMutationInput, incomeUncheckedUpdateManyInput>
    /**
     * Filter which incomes to update
     */
    where?: incomeWhereInput
    /**
     * Limit how many incomes to update.
     */
    limit?: number
  }

  /**
   * income updateManyAndReturn
   */
  export type incomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * The data used to update incomes.
     */
    data: XOR<incomeUpdateManyMutationInput, incomeUncheckedUpdateManyInput>
    /**
     * Filter which incomes to update
     */
    where?: incomeWhereInput
    /**
     * Limit how many incomes to update.
     */
    limit?: number
  }

  /**
   * income upsert
   */
  export type incomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * The filter to search for the income to update in case it exists.
     */
    where: incomeWhereUniqueInput
    /**
     * In case the income found by the `where` argument doesn't exist, create a new income with this data.
     */
    create: XOR<incomeCreateInput, incomeUncheckedCreateInput>
    /**
     * In case the income was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incomeUpdateInput, incomeUncheckedUpdateInput>
  }

  /**
   * income delete
   */
  export type incomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Filter which income to delete.
     */
    where: incomeWhereUniqueInput
  }

  /**
   * income deleteMany
   */
  export type incomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incomes to delete
     */
    where?: incomeWhereInput
    /**
     * Limit how many incomes to delete.
     */
    limit?: number
  }

  /**
   * income without action
   */
  export type incomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    created_at: 'created_at',
    email: 'email',
    id: 'id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    description: 'description',
    completed: 'completed',
    completed_at: 'completed_at',
    title: 'title',
    priority_level: 'priority_level',
    due_date: 'due_date',
    task_category_id: 'task_category_id',
    repeating_type: 'repeating_type',
    expense_id: 'expense_id',
    is_archived: 'is_archived'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const Task_categoryScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    title: 'title',
    user_id: 'user_id'
  };

  export type Task_categoryScalarFieldEnum = (typeof Task_categoryScalarFieldEnum)[keyof typeof Task_categoryScalarFieldEnum]


  export const Bill_expenseScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    expense_id: 'expense_id',
    repeating_type: 'repeating_type',
    running_bill: 'running_bill'
  };

  export type Bill_expenseScalarFieldEnum = (typeof Bill_expenseScalarFieldEnum)[keyof typeof Bill_expenseScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    description: 'description',
    expense_type: 'expense_type',
    user_id: 'user_id',
    is_archived: 'is_archived'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    curr_amount: 'curr_amount',
    min_amount: 'min_amount',
    expense_id: 'expense_id'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    expense_id: 'expense_id',
    amount: 'amount',
    price: 'price',
    status: 'status',
    repeat_at: 'repeat_at'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const Transportation_expenseScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    expense_id: 'expense_id',
    cost_list: 'cost_list'
  };

  export type Transportation_expenseScalarFieldEnum = (typeof Transportation_expenseScalarFieldEnum)[keyof typeof Transportation_expenseScalarFieldEnum]


  export const IncomeScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    amount: 'amount',
    user_id: 'user_id',
    from_job: 'from_job',
    date_obtained: 'date_obtained'
  };

  export type IncomeScalarFieldEnum = (typeof IncomeScalarFieldEnum)[keyof typeof IncomeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateRepeatType'
   */
  export type EnumDateRepeatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateRepeatType'>
    


  /**
   * Reference to a field of type 'DateRepeatType[]'
   */
  export type ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateRepeatType[]'>
    


  /**
   * Reference to a field of type 'ExpenseType'
   */
  export type EnumExpenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseType'>
    


  /**
   * Reference to a field of type 'ExpenseType[]'
   */
  export type ListEnumExpenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
    email?: StringFilter<"users"> | string
    id?: UuidFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "email" | "id">

  export type usersOrderByWithAggregationInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    email?: StringWithAggregatesFilter<"users"> | string
    id?: UuidWithAggregatesFilter<"users"> | string
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: BigIntFilter<"task"> | bigint | number
    created_at?: DateTimeFilter<"task"> | Date | string
    description?: StringNullableFilter<"task"> | string | null
    completed?: BoolFilter<"task"> | boolean
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    title?: StringNullableFilter<"task"> | string | null
    priority_level?: IntFilter<"task"> | number
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    task_category_id?: BigIntNullableFilter<"task"> | bigint | number | null
    repeating_type?: EnumDateRepeatTypeNullableFilter<"task"> | $Enums.DateRepeatType | null
    expense_id?: BigIntNullableFilter<"task"> | bigint | number | null
    is_archived?: BoolFilter<"task"> | boolean
    expense?: XOR<ExpenseNullableScalarRelationFilter, expenseWhereInput> | null
    task_category?: XOR<Task_categoryNullableScalarRelationFilter, task_categoryWhereInput> | null
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    priority_level?: SortOrder
    due_date?: SortOrderInput | SortOrder
    task_category_id?: SortOrderInput | SortOrder
    repeating_type?: SortOrderInput | SortOrder
    expense_id?: SortOrderInput | SortOrder
    is_archived?: SortOrder
    expense?: expenseOrderByWithRelationInput
    task_category?: task_categoryOrderByWithRelationInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    created_at?: DateTimeFilter<"task"> | Date | string
    description?: StringNullableFilter<"task"> | string | null
    completed?: BoolFilter<"task"> | boolean
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    title?: StringNullableFilter<"task"> | string | null
    priority_level?: IntFilter<"task"> | number
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    task_category_id?: BigIntNullableFilter<"task"> | bigint | number | null
    repeating_type?: EnumDateRepeatTypeNullableFilter<"task"> | $Enums.DateRepeatType | null
    expense_id?: BigIntNullableFilter<"task"> | bigint | number | null
    is_archived?: BoolFilter<"task"> | boolean
    expense?: XOR<ExpenseNullableScalarRelationFilter, expenseWhereInput> | null
    task_category?: XOR<Task_categoryNullableScalarRelationFilter, task_categoryWhereInput> | null
  }, "id">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    priority_level?: SortOrder
    due_date?: SortOrderInput | SortOrder
    task_category_id?: SortOrderInput | SortOrder
    repeating_type?: SortOrderInput | SortOrder
    expense_id?: SortOrderInput | SortOrder
    is_archived?: SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"task"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"task"> | Date | string
    description?: StringNullableWithAggregatesFilter<"task"> | string | null
    completed?: BoolWithAggregatesFilter<"task"> | boolean
    completed_at?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    title?: StringNullableWithAggregatesFilter<"task"> | string | null
    priority_level?: IntWithAggregatesFilter<"task"> | number
    due_date?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    task_category_id?: BigIntNullableWithAggregatesFilter<"task"> | bigint | number | null
    repeating_type?: EnumDateRepeatTypeNullableWithAggregatesFilter<"task"> | $Enums.DateRepeatType | null
    expense_id?: BigIntNullableWithAggregatesFilter<"task"> | bigint | number | null
    is_archived?: BoolWithAggregatesFilter<"task"> | boolean
  }

  export type task_categoryWhereInput = {
    AND?: task_categoryWhereInput | task_categoryWhereInput[]
    OR?: task_categoryWhereInput[]
    NOT?: task_categoryWhereInput | task_categoryWhereInput[]
    id?: BigIntFilter<"task_category"> | bigint | number
    created_at?: DateTimeFilter<"task_category"> | Date | string
    title?: StringFilter<"task_category"> | string
    user_id?: UuidFilter<"task_category"> | string
    task?: TaskListRelationFilter
  }

  export type task_categoryOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    task?: taskOrderByRelationAggregateInput
  }

  export type task_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    title?: string
    AND?: task_categoryWhereInput | task_categoryWhereInput[]
    OR?: task_categoryWhereInput[]
    NOT?: task_categoryWhereInput | task_categoryWhereInput[]
    created_at?: DateTimeFilter<"task_category"> | Date | string
    user_id?: UuidFilter<"task_category"> | string
    task?: TaskListRelationFilter
  }, "id" | "title">

  export type task_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    _count?: task_categoryCountOrderByAggregateInput
    _avg?: task_categoryAvgOrderByAggregateInput
    _max?: task_categoryMaxOrderByAggregateInput
    _min?: task_categoryMinOrderByAggregateInput
    _sum?: task_categorySumOrderByAggregateInput
  }

  export type task_categoryScalarWhereWithAggregatesInput = {
    AND?: task_categoryScalarWhereWithAggregatesInput | task_categoryScalarWhereWithAggregatesInput[]
    OR?: task_categoryScalarWhereWithAggregatesInput[]
    NOT?: task_categoryScalarWhereWithAggregatesInput | task_categoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"task_category"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"task_category"> | Date | string
    title?: StringWithAggregatesFilter<"task_category"> | string
    user_id?: UuidWithAggregatesFilter<"task_category"> | string
  }

  export type bill_expenseWhereInput = {
    AND?: bill_expenseWhereInput | bill_expenseWhereInput[]
    OR?: bill_expenseWhereInput[]
    NOT?: bill_expenseWhereInput | bill_expenseWhereInput[]
    id?: BigIntFilter<"bill_expense"> | bigint | number
    created_at?: DateTimeFilter<"bill_expense"> | Date | string
    expense_id?: BigIntFilter<"bill_expense"> | bigint | number
    repeating_type?: EnumDateRepeatTypeNullableFilter<"bill_expense"> | $Enums.DateRepeatType | null
    running_bill?: IntNullableFilter<"bill_expense"> | number | null
    expense?: XOR<ExpenseScalarRelationFilter, expenseWhereInput>
  }

  export type bill_expenseOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    repeating_type?: SortOrderInput | SortOrder
    running_bill?: SortOrderInput | SortOrder
    expense?: expenseOrderByWithRelationInput
  }

  export type bill_expenseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    expense_id?: bigint | number
    AND?: bill_expenseWhereInput | bill_expenseWhereInput[]
    OR?: bill_expenseWhereInput[]
    NOT?: bill_expenseWhereInput | bill_expenseWhereInput[]
    created_at?: DateTimeFilter<"bill_expense"> | Date | string
    repeating_type?: EnumDateRepeatTypeNullableFilter<"bill_expense"> | $Enums.DateRepeatType | null
    running_bill?: IntNullableFilter<"bill_expense"> | number | null
    expense?: XOR<ExpenseScalarRelationFilter, expenseWhereInput>
  }, "id" | "expense_id">

  export type bill_expenseOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    repeating_type?: SortOrderInput | SortOrder
    running_bill?: SortOrderInput | SortOrder
    _count?: bill_expenseCountOrderByAggregateInput
    _avg?: bill_expenseAvgOrderByAggregateInput
    _max?: bill_expenseMaxOrderByAggregateInput
    _min?: bill_expenseMinOrderByAggregateInput
    _sum?: bill_expenseSumOrderByAggregateInput
  }

  export type bill_expenseScalarWhereWithAggregatesInput = {
    AND?: bill_expenseScalarWhereWithAggregatesInput | bill_expenseScalarWhereWithAggregatesInput[]
    OR?: bill_expenseScalarWhereWithAggregatesInput[]
    NOT?: bill_expenseScalarWhereWithAggregatesInput | bill_expenseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"bill_expense"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"bill_expense"> | Date | string
    expense_id?: BigIntWithAggregatesFilter<"bill_expense"> | bigint | number
    repeating_type?: EnumDateRepeatTypeNullableWithAggregatesFilter<"bill_expense"> | $Enums.DateRepeatType | null
    running_bill?: IntNullableWithAggregatesFilter<"bill_expense"> | number | null
  }

  export type expenseWhereInput = {
    AND?: expenseWhereInput | expenseWhereInput[]
    OR?: expenseWhereInput[]
    NOT?: expenseWhereInput | expenseWhereInput[]
    id?: BigIntFilter<"expense"> | bigint | number
    created_at?: DateTimeFilter<"expense"> | Date | string
    name?: StringNullableFilter<"expense"> | string | null
    description?: StringNullableFilter<"expense"> | string | null
    expense_type?: EnumExpenseTypeNullableFilter<"expense"> | $Enums.ExpenseType | null
    user_id?: UuidNullableFilter<"expense"> | string | null
    is_archived?: BoolFilter<"expense"> | boolean
    bill_expense?: XOR<Bill_expenseNullableScalarRelationFilter, bill_expenseWhereInput> | null
    stock?: XOR<StockNullableScalarRelationFilter, stockWhereInput> | null
    task?: TaskListRelationFilter
    transaction?: TransactionListRelationFilter
    transportation_expense?: XOR<Transportation_expenseNullableScalarRelationFilter, transportation_expenseWhereInput> | null
  }

  export type expenseOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    expense_type?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    is_archived?: SortOrder
    bill_expense?: bill_expenseOrderByWithRelationInput
    stock?: stockOrderByWithRelationInput
    task?: taskOrderByRelationAggregateInput
    transaction?: transactionOrderByRelationAggregateInput
    transportation_expense?: transportation_expenseOrderByWithRelationInput
  }

  export type expenseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: expenseWhereInput | expenseWhereInput[]
    OR?: expenseWhereInput[]
    NOT?: expenseWhereInput | expenseWhereInput[]
    created_at?: DateTimeFilter<"expense"> | Date | string
    name?: StringNullableFilter<"expense"> | string | null
    description?: StringNullableFilter<"expense"> | string | null
    expense_type?: EnumExpenseTypeNullableFilter<"expense"> | $Enums.ExpenseType | null
    user_id?: UuidNullableFilter<"expense"> | string | null
    is_archived?: BoolFilter<"expense"> | boolean
    bill_expense?: XOR<Bill_expenseNullableScalarRelationFilter, bill_expenseWhereInput> | null
    stock?: XOR<StockNullableScalarRelationFilter, stockWhereInput> | null
    task?: TaskListRelationFilter
    transaction?: TransactionListRelationFilter
    transportation_expense?: XOR<Transportation_expenseNullableScalarRelationFilter, transportation_expenseWhereInput> | null
  }, "id">

  export type expenseOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    expense_type?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    is_archived?: SortOrder
    _count?: expenseCountOrderByAggregateInput
    _avg?: expenseAvgOrderByAggregateInput
    _max?: expenseMaxOrderByAggregateInput
    _min?: expenseMinOrderByAggregateInput
    _sum?: expenseSumOrderByAggregateInput
  }

  export type expenseScalarWhereWithAggregatesInput = {
    AND?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[]
    OR?: expenseScalarWhereWithAggregatesInput[]
    NOT?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"expense"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"expense"> | Date | string
    name?: StringNullableWithAggregatesFilter<"expense"> | string | null
    description?: StringNullableWithAggregatesFilter<"expense"> | string | null
    expense_type?: EnumExpenseTypeNullableWithAggregatesFilter<"expense"> | $Enums.ExpenseType | null
    user_id?: UuidNullableWithAggregatesFilter<"expense"> | string | null
    is_archived?: BoolWithAggregatesFilter<"expense"> | boolean
  }

  export type stockWhereInput = {
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    id?: BigIntFilter<"stock"> | bigint | number
    created_at?: DateTimeFilter<"stock"> | Date | string
    curr_amount?: IntNullableFilter<"stock"> | number | null
    min_amount?: IntFilter<"stock"> | number
    expense_id?: BigIntFilter<"stock"> | bigint | number
    expense?: XOR<ExpenseScalarRelationFilter, expenseWhereInput>
  }

  export type stockOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    curr_amount?: SortOrderInput | SortOrder
    min_amount?: SortOrder
    expense_id?: SortOrder
    expense?: expenseOrderByWithRelationInput
  }

  export type stockWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    expense_id?: bigint | number
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    created_at?: DateTimeFilter<"stock"> | Date | string
    curr_amount?: IntNullableFilter<"stock"> | number | null
    min_amount?: IntFilter<"stock"> | number
    expense?: XOR<ExpenseScalarRelationFilter, expenseWhereInput>
  }, "id" | "expense_id">

  export type stockOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    curr_amount?: SortOrderInput | SortOrder
    min_amount?: SortOrder
    expense_id?: SortOrder
    _count?: stockCountOrderByAggregateInput
    _avg?: stockAvgOrderByAggregateInput
    _max?: stockMaxOrderByAggregateInput
    _min?: stockMinOrderByAggregateInput
    _sum?: stockSumOrderByAggregateInput
  }

  export type stockScalarWhereWithAggregatesInput = {
    AND?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    OR?: stockScalarWhereWithAggregatesInput[]
    NOT?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"stock"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"stock"> | Date | string
    curr_amount?: IntNullableWithAggregatesFilter<"stock"> | number | null
    min_amount?: IntWithAggregatesFilter<"stock"> | number
    expense_id?: BigIntWithAggregatesFilter<"stock"> | bigint | number
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: BigIntFilter<"transaction"> | bigint | number
    created_at?: DateTimeFilter<"transaction"> | Date | string
    expense_id?: BigIntNullableFilter<"transaction"> | bigint | number | null
    amount?: IntFilter<"transaction"> | number
    price?: FloatNullableFilter<"transaction"> | number | null
    status?: EnumTransactionStatusNullableFilter<"transaction"> | $Enums.TransactionStatus | null
    repeat_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
    expense?: XOR<ExpenseNullableScalarRelationFilter, expenseWhereInput> | null
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    repeat_at?: SortOrderInput | SortOrder
    expense?: expenseOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    created_at?: DateTimeFilter<"transaction"> | Date | string
    expense_id?: BigIntNullableFilter<"transaction"> | bigint | number | null
    amount?: IntFilter<"transaction"> | number
    price?: FloatNullableFilter<"transaction"> | number | null
    status?: EnumTransactionStatusNullableFilter<"transaction"> | $Enums.TransactionStatus | null
    repeat_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
    expense?: XOR<ExpenseNullableScalarRelationFilter, expenseWhereInput> | null
  }, "id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    repeat_at?: SortOrderInput | SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"transaction"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    expense_id?: BigIntNullableWithAggregatesFilter<"transaction"> | bigint | number | null
    amount?: IntWithAggregatesFilter<"transaction"> | number
    price?: FloatNullableWithAggregatesFilter<"transaction"> | number | null
    status?: EnumTransactionStatusNullableWithAggregatesFilter<"transaction"> | $Enums.TransactionStatus | null
    repeat_at?: DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null
  }

  export type transportation_expenseWhereInput = {
    AND?: transportation_expenseWhereInput | transportation_expenseWhereInput[]
    OR?: transportation_expenseWhereInput[]
    NOT?: transportation_expenseWhereInput | transportation_expenseWhereInput[]
    id?: BigIntFilter<"transportation_expense"> | bigint | number
    created_at?: DateTimeFilter<"transportation_expense"> | Date | string
    expense_id?: BigIntFilter<"transportation_expense"> | bigint | number
    cost_list?: IntNullableListFilter<"transportation_expense">
    expense?: XOR<ExpenseScalarRelationFilter, expenseWhereInput>
  }

  export type transportation_expenseOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    cost_list?: SortOrder
    expense?: expenseOrderByWithRelationInput
  }

  export type transportation_expenseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    expense_id?: bigint | number
    AND?: transportation_expenseWhereInput | transportation_expenseWhereInput[]
    OR?: transportation_expenseWhereInput[]
    NOT?: transportation_expenseWhereInput | transportation_expenseWhereInput[]
    created_at?: DateTimeFilter<"transportation_expense"> | Date | string
    cost_list?: IntNullableListFilter<"transportation_expense">
    expense?: XOR<ExpenseScalarRelationFilter, expenseWhereInput>
  }, "id" | "expense_id">

  export type transportation_expenseOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    cost_list?: SortOrder
    _count?: transportation_expenseCountOrderByAggregateInput
    _avg?: transportation_expenseAvgOrderByAggregateInput
    _max?: transportation_expenseMaxOrderByAggregateInput
    _min?: transportation_expenseMinOrderByAggregateInput
    _sum?: transportation_expenseSumOrderByAggregateInput
  }

  export type transportation_expenseScalarWhereWithAggregatesInput = {
    AND?: transportation_expenseScalarWhereWithAggregatesInput | transportation_expenseScalarWhereWithAggregatesInput[]
    OR?: transportation_expenseScalarWhereWithAggregatesInput[]
    NOT?: transportation_expenseScalarWhereWithAggregatesInput | transportation_expenseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"transportation_expense"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"transportation_expense"> | Date | string
    expense_id?: BigIntWithAggregatesFilter<"transportation_expense"> | bigint | number
    cost_list?: IntNullableListFilter<"transportation_expense">
  }

  export type incomeWhereInput = {
    AND?: incomeWhereInput | incomeWhereInput[]
    OR?: incomeWhereInput[]
    NOT?: incomeWhereInput | incomeWhereInput[]
    id?: BigIntFilter<"income"> | bigint | number
    created_at?: DateTimeFilter<"income"> | Date | string
    amount?: FloatNullableFilter<"income"> | number | null
    user_id?: UuidNullableFilter<"income"> | string | null
    from_job?: BoolFilter<"income"> | boolean
    date_obtained?: DateTimeNullableFilter<"income"> | Date | string | null
  }

  export type incomeOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    amount?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    from_job?: SortOrder
    date_obtained?: SortOrderInput | SortOrder
  }

  export type incomeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: incomeWhereInput | incomeWhereInput[]
    OR?: incomeWhereInput[]
    NOT?: incomeWhereInput | incomeWhereInput[]
    created_at?: DateTimeFilter<"income"> | Date | string
    amount?: FloatNullableFilter<"income"> | number | null
    user_id?: UuidNullableFilter<"income"> | string | null
    from_job?: BoolFilter<"income"> | boolean
    date_obtained?: DateTimeNullableFilter<"income"> | Date | string | null
  }, "id">

  export type incomeOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    amount?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    from_job?: SortOrder
    date_obtained?: SortOrderInput | SortOrder
    _count?: incomeCountOrderByAggregateInput
    _avg?: incomeAvgOrderByAggregateInput
    _max?: incomeMaxOrderByAggregateInput
    _min?: incomeMinOrderByAggregateInput
    _sum?: incomeSumOrderByAggregateInput
  }

  export type incomeScalarWhereWithAggregatesInput = {
    AND?: incomeScalarWhereWithAggregatesInput | incomeScalarWhereWithAggregatesInput[]
    OR?: incomeScalarWhereWithAggregatesInput[]
    NOT?: incomeScalarWhereWithAggregatesInput | incomeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"income"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"income"> | Date | string
    amount?: FloatNullableWithAggregatesFilter<"income"> | number | null
    user_id?: UuidNullableWithAggregatesFilter<"income"> | string | null
    from_job?: BoolWithAggregatesFilter<"income"> | boolean
    date_obtained?: DateTimeNullableWithAggregatesFilter<"income"> | Date | string | null
  }

  export type usersCreateInput = {
    created_at?: Date | string
    email: string
    id: string
  }

  export type usersUncheckedCreateInput = {
    created_at?: Date | string
    email: string
    id: string
  }

  export type usersUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    created_at?: Date | string
    email: string
    id: string
  }

  export type usersUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type taskCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    repeating_type?: $Enums.DateRepeatType | null
    is_archived?: boolean
    expense?: expenseCreateNestedOneWithoutTaskInput
    task_category?: task_categoryCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    task_category_id?: bigint | number | null
    repeating_type?: $Enums.DateRepeatType | null
    expense_id?: bigint | number | null
    is_archived?: boolean
  }

  export type taskUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    expense?: expenseUpdateOneWithoutTaskNestedInput
    task_category?: task_categoryUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    expense_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    task_category_id?: bigint | number | null
    repeating_type?: $Enums.DateRepeatType | null
    expense_id?: bigint | number | null
    is_archived?: boolean
  }

  export type taskUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    expense_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type task_categoryCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    title?: string
    user_id?: string
    task?: taskCreateNestedManyWithoutTask_categoryInput
  }

  export type task_categoryUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    title?: string
    user_id?: string
    task?: taskUncheckedCreateNestedManyWithoutTask_categoryInput
  }

  export type task_categoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    task?: taskUpdateManyWithoutTask_categoryNestedInput
  }

  export type task_categoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    task?: taskUncheckedUpdateManyWithoutTask_categoryNestedInput
  }

  export type task_categoryCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    title?: string
    user_id?: string
  }

  export type task_categoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type task_categoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type bill_expenseCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    repeating_type?: $Enums.DateRepeatType | null
    running_bill?: number | null
    expense: expenseCreateNestedOneWithoutBill_expenseInput
  }

  export type bill_expenseUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    expense_id: bigint | number
    repeating_type?: $Enums.DateRepeatType | null
    running_bill?: number | null
  }

  export type bill_expenseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    running_bill?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: expenseUpdateOneRequiredWithoutBill_expenseNestedInput
  }

  export type bill_expenseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expense_id?: BigIntFieldUpdateOperationsInput | bigint | number
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    running_bill?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bill_expenseCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    expense_id: bigint | number
    repeating_type?: $Enums.DateRepeatType | null
    running_bill?: number | null
  }

  export type bill_expenseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    running_bill?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bill_expenseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expense_id?: BigIntFieldUpdateOperationsInput | bigint | number
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    running_bill?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type expenseCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseCreateNestedOneWithoutExpenseInput
    stock?: stockCreateNestedOneWithoutExpenseInput
    task?: taskCreateNestedManyWithoutExpenseInput
    transaction?: transactionCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseCreateNestedOneWithoutExpenseInput
  }

  export type expenseUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseUncheckedCreateNestedOneWithoutExpenseInput
    stock?: stockUncheckedCreateNestedOneWithoutExpenseInput
    task?: taskUncheckedCreateNestedManyWithoutExpenseInput
    transaction?: transactionUncheckedCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type expenseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUpdateOneWithoutExpenseNestedInput
    stock?: stockUpdateOneWithoutExpenseNestedInput
    task?: taskUpdateManyWithoutExpenseNestedInput
    transaction?: transactionUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUpdateOneWithoutExpenseNestedInput
  }

  export type expenseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUncheckedUpdateOneWithoutExpenseNestedInput
    stock?: stockUncheckedUpdateOneWithoutExpenseNestedInput
    task?: taskUncheckedUpdateManyWithoutExpenseNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type expenseCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
  }

  export type expenseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type expenseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type stockCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    curr_amount?: number | null
    min_amount: number
    expense: expenseCreateNestedOneWithoutStockInput
  }

  export type stockUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    curr_amount?: number | null
    min_amount: number
    expense_id: bigint | number
  }

  export type stockUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    curr_amount?: NullableIntFieldUpdateOperationsInput | number | null
    min_amount?: IntFieldUpdateOperationsInput | number
    expense?: expenseUpdateOneRequiredWithoutStockNestedInput
  }

  export type stockUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    curr_amount?: NullableIntFieldUpdateOperationsInput | number | null
    min_amount?: IntFieldUpdateOperationsInput | number
    expense_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type stockCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    curr_amount?: number | null
    min_amount: number
    expense_id: bigint | number
  }

  export type stockUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    curr_amount?: NullableIntFieldUpdateOperationsInput | number | null
    min_amount?: IntFieldUpdateOperationsInput | number
  }

  export type stockUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    curr_amount?: NullableIntFieldUpdateOperationsInput | number | null
    min_amount?: IntFieldUpdateOperationsInput | number
    expense_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type transactionCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    amount?: number
    price?: number | null
    status?: $Enums.TransactionStatus | null
    repeat_at?: Date | string | null
    expense?: expenseCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    expense_id?: bigint | number | null
    amount?: number
    price?: number | null
    status?: $Enums.TransactionStatus | null
    repeat_at?: Date | string | null
  }

  export type transactionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    repeat_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expense?: expenseUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expense_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    repeat_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    expense_id?: bigint | number | null
    amount?: number
    price?: number | null
    status?: $Enums.TransactionStatus | null
    repeat_at?: Date | string | null
  }

  export type transactionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    repeat_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expense_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    repeat_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transportation_expenseCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    cost_list?: transportation_expenseCreatecost_listInput | number[]
    expense: expenseCreateNestedOneWithoutTransportation_expenseInput
  }

  export type transportation_expenseUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    expense_id: bigint | number
    cost_list?: transportation_expenseCreatecost_listInput | number[]
  }

  export type transportation_expenseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cost_list?: transportation_expenseUpdatecost_listInput | number[]
    expense?: expenseUpdateOneRequiredWithoutTransportation_expenseNestedInput
  }

  export type transportation_expenseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expense_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cost_list?: transportation_expenseUpdatecost_listInput | number[]
  }

  export type transportation_expenseCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    expense_id: bigint | number
    cost_list?: transportation_expenseCreatecost_listInput | number[]
  }

  export type transportation_expenseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cost_list?: transportation_expenseUpdatecost_listInput | number[]
  }

  export type transportation_expenseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expense_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cost_list?: transportation_expenseUpdatecost_listInput | number[]
  }

  export type incomeCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    amount?: number | null
    user_id?: string | null
    from_job?: boolean
    date_obtained?: Date | string | null
  }

  export type incomeUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    amount?: number | null
    user_id?: string | null
    from_job?: boolean
    date_obtained?: Date | string | null
  }

  export type incomeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    from_job?: BoolFieldUpdateOperationsInput | boolean
    date_obtained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type incomeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    from_job?: BoolFieldUpdateOperationsInput | boolean
    date_obtained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type incomeCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    amount?: number | null
    user_id?: string | null
    from_job?: boolean
    date_obtained?: Date | string | null
  }

  export type incomeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    from_job?: BoolFieldUpdateOperationsInput | boolean
    date_obtained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type incomeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    from_job?: BoolFieldUpdateOperationsInput | boolean
    date_obtained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type usersCountOrderByAggregateInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumDateRepeatTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DateRepeatType | EnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DateRepeatType[] | ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DateRepeatType[] | ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDateRepeatTypeNullableFilter<$PrismaModel> | $Enums.DateRepeatType | null
  }

  export type ExpenseNullableScalarRelationFilter = {
    is?: expenseWhereInput | null
    isNot?: expenseWhereInput | null
  }

  export type Task_categoryNullableScalarRelationFilter = {
    is?: task_categoryWhereInput | null
    isNot?: task_categoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    title?: SortOrder
    priority_level?: SortOrder
    due_date?: SortOrder
    task_category_id?: SortOrder
    repeating_type?: SortOrder
    expense_id?: SortOrder
    is_archived?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    id?: SortOrder
    priority_level?: SortOrder
    task_category_id?: SortOrder
    expense_id?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    title?: SortOrder
    priority_level?: SortOrder
    due_date?: SortOrder
    task_category_id?: SortOrder
    repeating_type?: SortOrder
    expense_id?: SortOrder
    is_archived?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    title?: SortOrder
    priority_level?: SortOrder
    due_date?: SortOrder
    task_category_id?: SortOrder
    repeating_type?: SortOrder
    expense_id?: SortOrder
    is_archived?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    id?: SortOrder
    priority_level?: SortOrder
    task_category_id?: SortOrder
    expense_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumDateRepeatTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DateRepeatType | EnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DateRepeatType[] | ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DateRepeatType[] | ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDateRepeatTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DateRepeatType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDateRepeatTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDateRepeatTypeNullableFilter<$PrismaModel>
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type task_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
  }

  export type task_categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type task_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
  }

  export type task_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
  }

  export type task_categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ExpenseScalarRelationFilter = {
    is?: expenseWhereInput
    isNot?: expenseWhereInput
  }

  export type bill_expenseCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    repeating_type?: SortOrder
    running_bill?: SortOrder
  }

  export type bill_expenseAvgOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    running_bill?: SortOrder
  }

  export type bill_expenseMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    repeating_type?: SortOrder
    running_bill?: SortOrder
  }

  export type bill_expenseMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    repeating_type?: SortOrder
    running_bill?: SortOrder
  }

  export type bill_expenseSumOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    running_bill?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumExpenseTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseType | EnumExpenseTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExpenseTypeNullableFilter<$PrismaModel> | $Enums.ExpenseType | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type Bill_expenseNullableScalarRelationFilter = {
    is?: bill_expenseWhereInput | null
    isNot?: bill_expenseWhereInput | null
  }

  export type StockNullableScalarRelationFilter = {
    is?: stockWhereInput | null
    isNot?: stockWhereInput | null
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type Transportation_expenseNullableScalarRelationFilter = {
    is?: transportation_expenseWhereInput | null
    isNot?: transportation_expenseWhereInput | null
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type expenseCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    description?: SortOrder
    expense_type?: SortOrder
    user_id?: SortOrder
    is_archived?: SortOrder
  }

  export type expenseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type expenseMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    description?: SortOrder
    expense_type?: SortOrder
    user_id?: SortOrder
    is_archived?: SortOrder
  }

  export type expenseMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    description?: SortOrder
    expense_type?: SortOrder
    user_id?: SortOrder
    is_archived?: SortOrder
  }

  export type expenseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumExpenseTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseType | EnumExpenseTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExpenseTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExpenseTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumExpenseTypeNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type stockCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    curr_amount?: SortOrder
    min_amount?: SortOrder
    expense_id?: SortOrder
  }

  export type stockAvgOrderByAggregateInput = {
    id?: SortOrder
    curr_amount?: SortOrder
    min_amount?: SortOrder
    expense_id?: SortOrder
  }

  export type stockMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    curr_amount?: SortOrder
    min_amount?: SortOrder
    expense_id?: SortOrder
  }

  export type stockMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    curr_amount?: SortOrder
    min_amount?: SortOrder
    expense_id?: SortOrder
  }

  export type stockSumOrderByAggregateInput = {
    id?: SortOrder
    curr_amount?: SortOrder
    min_amount?: SortOrder
    expense_id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTransactionStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransactionStatusNullableFilter<$PrismaModel> | $Enums.TransactionStatus | null
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    status?: SortOrder
    repeat_at?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    status?: SortOrder
    repeat_at?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    status?: SortOrder
    repeat_at?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusNullableFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type transportation_expenseCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
    cost_list?: SortOrder
  }

  export type transportation_expenseAvgOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    cost_list?: SortOrder
  }

  export type transportation_expenseMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
  }

  export type transportation_expenseMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expense_id?: SortOrder
  }

  export type transportation_expenseSumOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    cost_list?: SortOrder
  }

  export type incomeCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    from_job?: SortOrder
    date_obtained?: SortOrder
  }

  export type incomeAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type incomeMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    from_job?: SortOrder
    date_obtained?: SortOrder
  }

  export type incomeMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    from_job?: SortOrder
    date_obtained?: SortOrder
  }

  export type incomeSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type expenseCreateNestedOneWithoutTaskInput = {
    create?: XOR<expenseCreateWithoutTaskInput, expenseUncheckedCreateWithoutTaskInput>
    connectOrCreate?: expenseCreateOrConnectWithoutTaskInput
    connect?: expenseWhereUniqueInput
  }

  export type task_categoryCreateNestedOneWithoutTaskInput = {
    create?: XOR<task_categoryCreateWithoutTaskInput, task_categoryUncheckedCreateWithoutTaskInput>
    connectOrCreate?: task_categoryCreateOrConnectWithoutTaskInput
    connect?: task_categoryWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumDateRepeatTypeFieldUpdateOperationsInput = {
    set?: $Enums.DateRepeatType | null
  }

  export type expenseUpdateOneWithoutTaskNestedInput = {
    create?: XOR<expenseCreateWithoutTaskInput, expenseUncheckedCreateWithoutTaskInput>
    connectOrCreate?: expenseCreateOrConnectWithoutTaskInput
    upsert?: expenseUpsertWithoutTaskInput
    disconnect?: expenseWhereInput | boolean
    delete?: expenseWhereInput | boolean
    connect?: expenseWhereUniqueInput
    update?: XOR<XOR<expenseUpdateToOneWithWhereWithoutTaskInput, expenseUpdateWithoutTaskInput>, expenseUncheckedUpdateWithoutTaskInput>
  }

  export type task_categoryUpdateOneWithoutTaskNestedInput = {
    create?: XOR<task_categoryCreateWithoutTaskInput, task_categoryUncheckedCreateWithoutTaskInput>
    connectOrCreate?: task_categoryCreateOrConnectWithoutTaskInput
    upsert?: task_categoryUpsertWithoutTaskInput
    disconnect?: task_categoryWhereInput | boolean
    delete?: task_categoryWhereInput | boolean
    connect?: task_categoryWhereUniqueInput
    update?: XOR<XOR<task_categoryUpdateToOneWithWhereWithoutTaskInput, task_categoryUpdateWithoutTaskInput>, task_categoryUncheckedUpdateWithoutTaskInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type taskCreateNestedManyWithoutTask_categoryInput = {
    create?: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput> | taskCreateWithoutTask_categoryInput[] | taskUncheckedCreateWithoutTask_categoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTask_categoryInput | taskCreateOrConnectWithoutTask_categoryInput[]
    createMany?: taskCreateManyTask_categoryInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutTask_categoryInput = {
    create?: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput> | taskCreateWithoutTask_categoryInput[] | taskUncheckedCreateWithoutTask_categoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTask_categoryInput | taskCreateOrConnectWithoutTask_categoryInput[]
    createMany?: taskCreateManyTask_categoryInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUpdateManyWithoutTask_categoryNestedInput = {
    create?: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput> | taskCreateWithoutTask_categoryInput[] | taskUncheckedCreateWithoutTask_categoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTask_categoryInput | taskCreateOrConnectWithoutTask_categoryInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutTask_categoryInput | taskUpsertWithWhereUniqueWithoutTask_categoryInput[]
    createMany?: taskCreateManyTask_categoryInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutTask_categoryInput | taskUpdateWithWhereUniqueWithoutTask_categoryInput[]
    updateMany?: taskUpdateManyWithWhereWithoutTask_categoryInput | taskUpdateManyWithWhereWithoutTask_categoryInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutTask_categoryNestedInput = {
    create?: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput> | taskCreateWithoutTask_categoryInput[] | taskUncheckedCreateWithoutTask_categoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTask_categoryInput | taskCreateOrConnectWithoutTask_categoryInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutTask_categoryInput | taskUpsertWithWhereUniqueWithoutTask_categoryInput[]
    createMany?: taskCreateManyTask_categoryInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutTask_categoryInput | taskUpdateWithWhereUniqueWithoutTask_categoryInput[]
    updateMany?: taskUpdateManyWithWhereWithoutTask_categoryInput | taskUpdateManyWithWhereWithoutTask_categoryInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type expenseCreateNestedOneWithoutBill_expenseInput = {
    create?: XOR<expenseCreateWithoutBill_expenseInput, expenseUncheckedCreateWithoutBill_expenseInput>
    connectOrCreate?: expenseCreateOrConnectWithoutBill_expenseInput
    connect?: expenseWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type expenseUpdateOneRequiredWithoutBill_expenseNestedInput = {
    create?: XOR<expenseCreateWithoutBill_expenseInput, expenseUncheckedCreateWithoutBill_expenseInput>
    connectOrCreate?: expenseCreateOrConnectWithoutBill_expenseInput
    upsert?: expenseUpsertWithoutBill_expenseInput
    connect?: expenseWhereUniqueInput
    update?: XOR<XOR<expenseUpdateToOneWithWhereWithoutBill_expenseInput, expenseUpdateWithoutBill_expenseInput>, expenseUncheckedUpdateWithoutBill_expenseInput>
  }

  export type bill_expenseCreateNestedOneWithoutExpenseInput = {
    create?: XOR<bill_expenseCreateWithoutExpenseInput, bill_expenseUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: bill_expenseCreateOrConnectWithoutExpenseInput
    connect?: bill_expenseWhereUniqueInput
  }

  export type stockCreateNestedOneWithoutExpenseInput = {
    create?: XOR<stockCreateWithoutExpenseInput, stockUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: stockCreateOrConnectWithoutExpenseInput
    connect?: stockWhereUniqueInput
  }

  export type taskCreateNestedManyWithoutExpenseInput = {
    create?: XOR<taskCreateWithoutExpenseInput, taskUncheckedCreateWithoutExpenseInput> | taskCreateWithoutExpenseInput[] | taskUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: taskCreateOrConnectWithoutExpenseInput | taskCreateOrConnectWithoutExpenseInput[]
    createMany?: taskCreateManyExpenseInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutExpenseInput = {
    create?: XOR<transactionCreateWithoutExpenseInput, transactionUncheckedCreateWithoutExpenseInput> | transactionCreateWithoutExpenseInput[] | transactionUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutExpenseInput | transactionCreateOrConnectWithoutExpenseInput[]
    createMany?: transactionCreateManyExpenseInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transportation_expenseCreateNestedOneWithoutExpenseInput = {
    create?: XOR<transportation_expenseCreateWithoutExpenseInput, transportation_expenseUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: transportation_expenseCreateOrConnectWithoutExpenseInput
    connect?: transportation_expenseWhereUniqueInput
  }

  export type bill_expenseUncheckedCreateNestedOneWithoutExpenseInput = {
    create?: XOR<bill_expenseCreateWithoutExpenseInput, bill_expenseUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: bill_expenseCreateOrConnectWithoutExpenseInput
    connect?: bill_expenseWhereUniqueInput
  }

  export type stockUncheckedCreateNestedOneWithoutExpenseInput = {
    create?: XOR<stockCreateWithoutExpenseInput, stockUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: stockCreateOrConnectWithoutExpenseInput
    connect?: stockWhereUniqueInput
  }

  export type taskUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<taskCreateWithoutExpenseInput, taskUncheckedCreateWithoutExpenseInput> | taskCreateWithoutExpenseInput[] | taskUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: taskCreateOrConnectWithoutExpenseInput | taskCreateOrConnectWithoutExpenseInput[]
    createMany?: taskCreateManyExpenseInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<transactionCreateWithoutExpenseInput, transactionUncheckedCreateWithoutExpenseInput> | transactionCreateWithoutExpenseInput[] | transactionUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutExpenseInput | transactionCreateOrConnectWithoutExpenseInput[]
    createMany?: transactionCreateManyExpenseInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transportation_expenseUncheckedCreateNestedOneWithoutExpenseInput = {
    create?: XOR<transportation_expenseCreateWithoutExpenseInput, transportation_expenseUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: transportation_expenseCreateOrConnectWithoutExpenseInput
    connect?: transportation_expenseWhereUniqueInput
  }

  export type NullableEnumExpenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseType | null
  }

  export type bill_expenseUpdateOneWithoutExpenseNestedInput = {
    create?: XOR<bill_expenseCreateWithoutExpenseInput, bill_expenseUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: bill_expenseCreateOrConnectWithoutExpenseInput
    upsert?: bill_expenseUpsertWithoutExpenseInput
    disconnect?: bill_expenseWhereInput | boolean
    delete?: bill_expenseWhereInput | boolean
    connect?: bill_expenseWhereUniqueInput
    update?: XOR<XOR<bill_expenseUpdateToOneWithWhereWithoutExpenseInput, bill_expenseUpdateWithoutExpenseInput>, bill_expenseUncheckedUpdateWithoutExpenseInput>
  }

  export type stockUpdateOneWithoutExpenseNestedInput = {
    create?: XOR<stockCreateWithoutExpenseInput, stockUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: stockCreateOrConnectWithoutExpenseInput
    upsert?: stockUpsertWithoutExpenseInput
    disconnect?: stockWhereInput | boolean
    delete?: stockWhereInput | boolean
    connect?: stockWhereUniqueInput
    update?: XOR<XOR<stockUpdateToOneWithWhereWithoutExpenseInput, stockUpdateWithoutExpenseInput>, stockUncheckedUpdateWithoutExpenseInput>
  }

  export type taskUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<taskCreateWithoutExpenseInput, taskUncheckedCreateWithoutExpenseInput> | taskCreateWithoutExpenseInput[] | taskUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: taskCreateOrConnectWithoutExpenseInput | taskCreateOrConnectWithoutExpenseInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutExpenseInput | taskUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: taskCreateManyExpenseInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutExpenseInput | taskUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: taskUpdateManyWithWhereWithoutExpenseInput | taskUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<transactionCreateWithoutExpenseInput, transactionUncheckedCreateWithoutExpenseInput> | transactionCreateWithoutExpenseInput[] | transactionUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutExpenseInput | transactionCreateOrConnectWithoutExpenseInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutExpenseInput | transactionUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: transactionCreateManyExpenseInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutExpenseInput | transactionUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutExpenseInput | transactionUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transportation_expenseUpdateOneWithoutExpenseNestedInput = {
    create?: XOR<transportation_expenseCreateWithoutExpenseInput, transportation_expenseUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: transportation_expenseCreateOrConnectWithoutExpenseInput
    upsert?: transportation_expenseUpsertWithoutExpenseInput
    disconnect?: transportation_expenseWhereInput | boolean
    delete?: transportation_expenseWhereInput | boolean
    connect?: transportation_expenseWhereUniqueInput
    update?: XOR<XOR<transportation_expenseUpdateToOneWithWhereWithoutExpenseInput, transportation_expenseUpdateWithoutExpenseInput>, transportation_expenseUncheckedUpdateWithoutExpenseInput>
  }

  export type bill_expenseUncheckedUpdateOneWithoutExpenseNestedInput = {
    create?: XOR<bill_expenseCreateWithoutExpenseInput, bill_expenseUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: bill_expenseCreateOrConnectWithoutExpenseInput
    upsert?: bill_expenseUpsertWithoutExpenseInput
    disconnect?: bill_expenseWhereInput | boolean
    delete?: bill_expenseWhereInput | boolean
    connect?: bill_expenseWhereUniqueInput
    update?: XOR<XOR<bill_expenseUpdateToOneWithWhereWithoutExpenseInput, bill_expenseUpdateWithoutExpenseInput>, bill_expenseUncheckedUpdateWithoutExpenseInput>
  }

  export type stockUncheckedUpdateOneWithoutExpenseNestedInput = {
    create?: XOR<stockCreateWithoutExpenseInput, stockUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: stockCreateOrConnectWithoutExpenseInput
    upsert?: stockUpsertWithoutExpenseInput
    disconnect?: stockWhereInput | boolean
    delete?: stockWhereInput | boolean
    connect?: stockWhereUniqueInput
    update?: XOR<XOR<stockUpdateToOneWithWhereWithoutExpenseInput, stockUpdateWithoutExpenseInput>, stockUncheckedUpdateWithoutExpenseInput>
  }

  export type taskUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<taskCreateWithoutExpenseInput, taskUncheckedCreateWithoutExpenseInput> | taskCreateWithoutExpenseInput[] | taskUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: taskCreateOrConnectWithoutExpenseInput | taskCreateOrConnectWithoutExpenseInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutExpenseInput | taskUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: taskCreateManyExpenseInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutExpenseInput | taskUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: taskUpdateManyWithWhereWithoutExpenseInput | taskUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<transactionCreateWithoutExpenseInput, transactionUncheckedCreateWithoutExpenseInput> | transactionCreateWithoutExpenseInput[] | transactionUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutExpenseInput | transactionCreateOrConnectWithoutExpenseInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutExpenseInput | transactionUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: transactionCreateManyExpenseInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutExpenseInput | transactionUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutExpenseInput | transactionUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transportation_expenseUncheckedUpdateOneWithoutExpenseNestedInput = {
    create?: XOR<transportation_expenseCreateWithoutExpenseInput, transportation_expenseUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: transportation_expenseCreateOrConnectWithoutExpenseInput
    upsert?: transportation_expenseUpsertWithoutExpenseInput
    disconnect?: transportation_expenseWhereInput | boolean
    delete?: transportation_expenseWhereInput | boolean
    connect?: transportation_expenseWhereUniqueInput
    update?: XOR<XOR<transportation_expenseUpdateToOneWithWhereWithoutExpenseInput, transportation_expenseUpdateWithoutExpenseInput>, transportation_expenseUncheckedUpdateWithoutExpenseInput>
  }

  export type expenseCreateNestedOneWithoutStockInput = {
    create?: XOR<expenseCreateWithoutStockInput, expenseUncheckedCreateWithoutStockInput>
    connectOrCreate?: expenseCreateOrConnectWithoutStockInput
    connect?: expenseWhereUniqueInput
  }

  export type expenseUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<expenseCreateWithoutStockInput, expenseUncheckedCreateWithoutStockInput>
    connectOrCreate?: expenseCreateOrConnectWithoutStockInput
    upsert?: expenseUpsertWithoutStockInput
    connect?: expenseWhereUniqueInput
    update?: XOR<XOR<expenseUpdateToOneWithWhereWithoutStockInput, expenseUpdateWithoutStockInput>, expenseUncheckedUpdateWithoutStockInput>
  }

  export type expenseCreateNestedOneWithoutTransactionInput = {
    create?: XOR<expenseCreateWithoutTransactionInput, expenseUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: expenseCreateOrConnectWithoutTransactionInput
    connect?: expenseWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus | null
  }

  export type expenseUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<expenseCreateWithoutTransactionInput, expenseUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: expenseCreateOrConnectWithoutTransactionInput
    upsert?: expenseUpsertWithoutTransactionInput
    disconnect?: expenseWhereInput | boolean
    delete?: expenseWhereInput | boolean
    connect?: expenseWhereUniqueInput
    update?: XOR<XOR<expenseUpdateToOneWithWhereWithoutTransactionInput, expenseUpdateWithoutTransactionInput>, expenseUncheckedUpdateWithoutTransactionInput>
  }

  export type transportation_expenseCreatecost_listInput = {
    set: number[]
  }

  export type expenseCreateNestedOneWithoutTransportation_expenseInput = {
    create?: XOR<expenseCreateWithoutTransportation_expenseInput, expenseUncheckedCreateWithoutTransportation_expenseInput>
    connectOrCreate?: expenseCreateOrConnectWithoutTransportation_expenseInput
    connect?: expenseWhereUniqueInput
  }

  export type transportation_expenseUpdatecost_listInput = {
    set?: number[]
    push?: number | number[]
  }

  export type expenseUpdateOneRequiredWithoutTransportation_expenseNestedInput = {
    create?: XOR<expenseCreateWithoutTransportation_expenseInput, expenseUncheckedCreateWithoutTransportation_expenseInput>
    connectOrCreate?: expenseCreateOrConnectWithoutTransportation_expenseInput
    upsert?: expenseUpsertWithoutTransportation_expenseInput
    connect?: expenseWhereUniqueInput
    update?: XOR<XOR<expenseUpdateToOneWithWhereWithoutTransportation_expenseInput, expenseUpdateWithoutTransportation_expenseInput>, expenseUncheckedUpdateWithoutTransportation_expenseInput>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumDateRepeatTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DateRepeatType | EnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DateRepeatType[] | ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DateRepeatType[] | ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDateRepeatTypeNullableFilter<$PrismaModel> | $Enums.DateRepeatType | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDateRepeatTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DateRepeatType | EnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DateRepeatType[] | ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DateRepeatType[] | ListEnumDateRepeatTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDateRepeatTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DateRepeatType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDateRepeatTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDateRepeatTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumExpenseTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseType | EnumExpenseTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExpenseTypeNullableFilter<$PrismaModel> | $Enums.ExpenseType | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumExpenseTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseType | EnumExpenseTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExpenseTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExpenseTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumExpenseTypeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransactionStatusNullableFilter<$PrismaModel> | $Enums.TransactionStatus | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusNullableFilter<$PrismaModel>
  }

  export type expenseCreateWithoutTaskInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseCreateNestedOneWithoutExpenseInput
    stock?: stockCreateNestedOneWithoutExpenseInput
    transaction?: transactionCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseCreateNestedOneWithoutExpenseInput
  }

  export type expenseUncheckedCreateWithoutTaskInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseUncheckedCreateNestedOneWithoutExpenseInput
    stock?: stockUncheckedCreateNestedOneWithoutExpenseInput
    transaction?: transactionUncheckedCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type expenseCreateOrConnectWithoutTaskInput = {
    where: expenseWhereUniqueInput
    create: XOR<expenseCreateWithoutTaskInput, expenseUncheckedCreateWithoutTaskInput>
  }

  export type task_categoryCreateWithoutTaskInput = {
    id?: bigint | number
    created_at?: Date | string
    title?: string
    user_id?: string
  }

  export type task_categoryUncheckedCreateWithoutTaskInput = {
    id?: bigint | number
    created_at?: Date | string
    title?: string
    user_id?: string
  }

  export type task_categoryCreateOrConnectWithoutTaskInput = {
    where: task_categoryWhereUniqueInput
    create: XOR<task_categoryCreateWithoutTaskInput, task_categoryUncheckedCreateWithoutTaskInput>
  }

  export type expenseUpsertWithoutTaskInput = {
    update: XOR<expenseUpdateWithoutTaskInput, expenseUncheckedUpdateWithoutTaskInput>
    create: XOR<expenseCreateWithoutTaskInput, expenseUncheckedCreateWithoutTaskInput>
    where?: expenseWhereInput
  }

  export type expenseUpdateToOneWithWhereWithoutTaskInput = {
    where?: expenseWhereInput
    data: XOR<expenseUpdateWithoutTaskInput, expenseUncheckedUpdateWithoutTaskInput>
  }

  export type expenseUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUpdateOneWithoutExpenseNestedInput
    stock?: stockUpdateOneWithoutExpenseNestedInput
    transaction?: transactionUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUpdateOneWithoutExpenseNestedInput
  }

  export type expenseUncheckedUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUncheckedUpdateOneWithoutExpenseNestedInput
    stock?: stockUncheckedUpdateOneWithoutExpenseNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type task_categoryUpsertWithoutTaskInput = {
    update: XOR<task_categoryUpdateWithoutTaskInput, task_categoryUncheckedUpdateWithoutTaskInput>
    create: XOR<task_categoryCreateWithoutTaskInput, task_categoryUncheckedCreateWithoutTaskInput>
    where?: task_categoryWhereInput
  }

  export type task_categoryUpdateToOneWithWhereWithoutTaskInput = {
    where?: task_categoryWhereInput
    data: XOR<task_categoryUpdateWithoutTaskInput, task_categoryUncheckedUpdateWithoutTaskInput>
  }

  export type task_categoryUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type task_categoryUncheckedUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type taskCreateWithoutTask_categoryInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    repeating_type?: $Enums.DateRepeatType | null
    is_archived?: boolean
    expense?: expenseCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutTask_categoryInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    repeating_type?: $Enums.DateRepeatType | null
    expense_id?: bigint | number | null
    is_archived?: boolean
  }

  export type taskCreateOrConnectWithoutTask_categoryInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput>
  }

  export type taskCreateManyTask_categoryInputEnvelope = {
    data: taskCreateManyTask_categoryInput | taskCreateManyTask_categoryInput[]
    skipDuplicates?: boolean
  }

  export type taskUpsertWithWhereUniqueWithoutTask_categoryInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutTask_categoryInput, taskUncheckedUpdateWithoutTask_categoryInput>
    create: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput>
  }

  export type taskUpdateWithWhereUniqueWithoutTask_categoryInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutTask_categoryInput, taskUncheckedUpdateWithoutTask_categoryInput>
  }

  export type taskUpdateManyWithWhereWithoutTask_categoryInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutTask_categoryInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    id?: BigIntFilter<"task"> | bigint | number
    created_at?: DateTimeFilter<"task"> | Date | string
    description?: StringNullableFilter<"task"> | string | null
    completed?: BoolFilter<"task"> | boolean
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    title?: StringNullableFilter<"task"> | string | null
    priority_level?: IntFilter<"task"> | number
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    task_category_id?: BigIntNullableFilter<"task"> | bigint | number | null
    repeating_type?: EnumDateRepeatTypeNullableFilter<"task"> | $Enums.DateRepeatType | null
    expense_id?: BigIntNullableFilter<"task"> | bigint | number | null
    is_archived?: BoolFilter<"task"> | boolean
  }

  export type expenseCreateWithoutBill_expenseInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    stock?: stockCreateNestedOneWithoutExpenseInput
    task?: taskCreateNestedManyWithoutExpenseInput
    transaction?: transactionCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseCreateNestedOneWithoutExpenseInput
  }

  export type expenseUncheckedCreateWithoutBill_expenseInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    stock?: stockUncheckedCreateNestedOneWithoutExpenseInput
    task?: taskUncheckedCreateNestedManyWithoutExpenseInput
    transaction?: transactionUncheckedCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type expenseCreateOrConnectWithoutBill_expenseInput = {
    where: expenseWhereUniqueInput
    create: XOR<expenseCreateWithoutBill_expenseInput, expenseUncheckedCreateWithoutBill_expenseInput>
  }

  export type expenseUpsertWithoutBill_expenseInput = {
    update: XOR<expenseUpdateWithoutBill_expenseInput, expenseUncheckedUpdateWithoutBill_expenseInput>
    create: XOR<expenseCreateWithoutBill_expenseInput, expenseUncheckedCreateWithoutBill_expenseInput>
    where?: expenseWhereInput
  }

  export type expenseUpdateToOneWithWhereWithoutBill_expenseInput = {
    where?: expenseWhereInput
    data: XOR<expenseUpdateWithoutBill_expenseInput, expenseUncheckedUpdateWithoutBill_expenseInput>
  }

  export type expenseUpdateWithoutBill_expenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    stock?: stockUpdateOneWithoutExpenseNestedInput
    task?: taskUpdateManyWithoutExpenseNestedInput
    transaction?: transactionUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUpdateOneWithoutExpenseNestedInput
  }

  export type expenseUncheckedUpdateWithoutBill_expenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    stock?: stockUncheckedUpdateOneWithoutExpenseNestedInput
    task?: taskUncheckedUpdateManyWithoutExpenseNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type bill_expenseCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    repeating_type?: $Enums.DateRepeatType | null
    running_bill?: number | null
  }

  export type bill_expenseUncheckedCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    repeating_type?: $Enums.DateRepeatType | null
    running_bill?: number | null
  }

  export type bill_expenseCreateOrConnectWithoutExpenseInput = {
    where: bill_expenseWhereUniqueInput
    create: XOR<bill_expenseCreateWithoutExpenseInput, bill_expenseUncheckedCreateWithoutExpenseInput>
  }

  export type stockCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    curr_amount?: number | null
    min_amount: number
  }

  export type stockUncheckedCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    curr_amount?: number | null
    min_amount: number
  }

  export type stockCreateOrConnectWithoutExpenseInput = {
    where: stockWhereUniqueInput
    create: XOR<stockCreateWithoutExpenseInput, stockUncheckedCreateWithoutExpenseInput>
  }

  export type taskCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    repeating_type?: $Enums.DateRepeatType | null
    is_archived?: boolean
    task_category?: task_categoryCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    task_category_id?: bigint | number | null
    repeating_type?: $Enums.DateRepeatType | null
    is_archived?: boolean
  }

  export type taskCreateOrConnectWithoutExpenseInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutExpenseInput, taskUncheckedCreateWithoutExpenseInput>
  }

  export type taskCreateManyExpenseInputEnvelope = {
    data: taskCreateManyExpenseInput | taskCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    amount?: number
    price?: number | null
    status?: $Enums.TransactionStatus | null
    repeat_at?: Date | string | null
  }

  export type transactionUncheckedCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    amount?: number
    price?: number | null
    status?: $Enums.TransactionStatus | null
    repeat_at?: Date | string | null
  }

  export type transactionCreateOrConnectWithoutExpenseInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutExpenseInput, transactionUncheckedCreateWithoutExpenseInput>
  }

  export type transactionCreateManyExpenseInputEnvelope = {
    data: transactionCreateManyExpenseInput | transactionCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type transportation_expenseCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    cost_list?: transportation_expenseCreatecost_listInput | number[]
  }

  export type transportation_expenseUncheckedCreateWithoutExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    cost_list?: transportation_expenseCreatecost_listInput | number[]
  }

  export type transportation_expenseCreateOrConnectWithoutExpenseInput = {
    where: transportation_expenseWhereUniqueInput
    create: XOR<transportation_expenseCreateWithoutExpenseInput, transportation_expenseUncheckedCreateWithoutExpenseInput>
  }

  export type bill_expenseUpsertWithoutExpenseInput = {
    update: XOR<bill_expenseUpdateWithoutExpenseInput, bill_expenseUncheckedUpdateWithoutExpenseInput>
    create: XOR<bill_expenseCreateWithoutExpenseInput, bill_expenseUncheckedCreateWithoutExpenseInput>
    where?: bill_expenseWhereInput
  }

  export type bill_expenseUpdateToOneWithWhereWithoutExpenseInput = {
    where?: bill_expenseWhereInput
    data: XOR<bill_expenseUpdateWithoutExpenseInput, bill_expenseUncheckedUpdateWithoutExpenseInput>
  }

  export type bill_expenseUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    running_bill?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bill_expenseUncheckedUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    running_bill?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stockUpsertWithoutExpenseInput = {
    update: XOR<stockUpdateWithoutExpenseInput, stockUncheckedUpdateWithoutExpenseInput>
    create: XOR<stockCreateWithoutExpenseInput, stockUncheckedCreateWithoutExpenseInput>
    where?: stockWhereInput
  }

  export type stockUpdateToOneWithWhereWithoutExpenseInput = {
    where?: stockWhereInput
    data: XOR<stockUpdateWithoutExpenseInput, stockUncheckedUpdateWithoutExpenseInput>
  }

  export type stockUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    curr_amount?: NullableIntFieldUpdateOperationsInput | number | null
    min_amount?: IntFieldUpdateOperationsInput | number
  }

  export type stockUncheckedUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    curr_amount?: NullableIntFieldUpdateOperationsInput | number | null
    min_amount?: IntFieldUpdateOperationsInput | number
  }

  export type taskUpsertWithWhereUniqueWithoutExpenseInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutExpenseInput, taskUncheckedUpdateWithoutExpenseInput>
    create: XOR<taskCreateWithoutExpenseInput, taskUncheckedCreateWithoutExpenseInput>
  }

  export type taskUpdateWithWhereUniqueWithoutExpenseInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutExpenseInput, taskUncheckedUpdateWithoutExpenseInput>
  }

  export type taskUpdateManyWithWhereWithoutExpenseInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutExpenseInput>
  }

  export type transactionUpsertWithWhereUniqueWithoutExpenseInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutExpenseInput, transactionUncheckedUpdateWithoutExpenseInput>
    create: XOR<transactionCreateWithoutExpenseInput, transactionUncheckedCreateWithoutExpenseInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutExpenseInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutExpenseInput, transactionUncheckedUpdateWithoutExpenseInput>
  }

  export type transactionUpdateManyWithWhereWithoutExpenseInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutExpenseInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: BigIntFilter<"transaction"> | bigint | number
    created_at?: DateTimeFilter<"transaction"> | Date | string
    expense_id?: BigIntNullableFilter<"transaction"> | bigint | number | null
    amount?: IntFilter<"transaction"> | number
    price?: FloatNullableFilter<"transaction"> | number | null
    status?: EnumTransactionStatusNullableFilter<"transaction"> | $Enums.TransactionStatus | null
    repeat_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
  }

  export type transportation_expenseUpsertWithoutExpenseInput = {
    update: XOR<transportation_expenseUpdateWithoutExpenseInput, transportation_expenseUncheckedUpdateWithoutExpenseInput>
    create: XOR<transportation_expenseCreateWithoutExpenseInput, transportation_expenseUncheckedCreateWithoutExpenseInput>
    where?: transportation_expenseWhereInput
  }

  export type transportation_expenseUpdateToOneWithWhereWithoutExpenseInput = {
    where?: transportation_expenseWhereInput
    data: XOR<transportation_expenseUpdateWithoutExpenseInput, transportation_expenseUncheckedUpdateWithoutExpenseInput>
  }

  export type transportation_expenseUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cost_list?: transportation_expenseUpdatecost_listInput | number[]
  }

  export type transportation_expenseUncheckedUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cost_list?: transportation_expenseUpdatecost_listInput | number[]
  }

  export type expenseCreateWithoutStockInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseCreateNestedOneWithoutExpenseInput
    task?: taskCreateNestedManyWithoutExpenseInput
    transaction?: transactionCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseCreateNestedOneWithoutExpenseInput
  }

  export type expenseUncheckedCreateWithoutStockInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseUncheckedCreateNestedOneWithoutExpenseInput
    task?: taskUncheckedCreateNestedManyWithoutExpenseInput
    transaction?: transactionUncheckedCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type expenseCreateOrConnectWithoutStockInput = {
    where: expenseWhereUniqueInput
    create: XOR<expenseCreateWithoutStockInput, expenseUncheckedCreateWithoutStockInput>
  }

  export type expenseUpsertWithoutStockInput = {
    update: XOR<expenseUpdateWithoutStockInput, expenseUncheckedUpdateWithoutStockInput>
    create: XOR<expenseCreateWithoutStockInput, expenseUncheckedCreateWithoutStockInput>
    where?: expenseWhereInput
  }

  export type expenseUpdateToOneWithWhereWithoutStockInput = {
    where?: expenseWhereInput
    data: XOR<expenseUpdateWithoutStockInput, expenseUncheckedUpdateWithoutStockInput>
  }

  export type expenseUpdateWithoutStockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUpdateOneWithoutExpenseNestedInput
    task?: taskUpdateManyWithoutExpenseNestedInput
    transaction?: transactionUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUpdateOneWithoutExpenseNestedInput
  }

  export type expenseUncheckedUpdateWithoutStockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUncheckedUpdateOneWithoutExpenseNestedInput
    task?: taskUncheckedUpdateManyWithoutExpenseNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type expenseCreateWithoutTransactionInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseCreateNestedOneWithoutExpenseInput
    stock?: stockCreateNestedOneWithoutExpenseInput
    task?: taskCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseCreateNestedOneWithoutExpenseInput
  }

  export type expenseUncheckedCreateWithoutTransactionInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseUncheckedCreateNestedOneWithoutExpenseInput
    stock?: stockUncheckedCreateNestedOneWithoutExpenseInput
    task?: taskUncheckedCreateNestedManyWithoutExpenseInput
    transportation_expense?: transportation_expenseUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type expenseCreateOrConnectWithoutTransactionInput = {
    where: expenseWhereUniqueInput
    create: XOR<expenseCreateWithoutTransactionInput, expenseUncheckedCreateWithoutTransactionInput>
  }

  export type expenseUpsertWithoutTransactionInput = {
    update: XOR<expenseUpdateWithoutTransactionInput, expenseUncheckedUpdateWithoutTransactionInput>
    create: XOR<expenseCreateWithoutTransactionInput, expenseUncheckedCreateWithoutTransactionInput>
    where?: expenseWhereInput
  }

  export type expenseUpdateToOneWithWhereWithoutTransactionInput = {
    where?: expenseWhereInput
    data: XOR<expenseUpdateWithoutTransactionInput, expenseUncheckedUpdateWithoutTransactionInput>
  }

  export type expenseUpdateWithoutTransactionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUpdateOneWithoutExpenseNestedInput
    stock?: stockUpdateOneWithoutExpenseNestedInput
    task?: taskUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUpdateOneWithoutExpenseNestedInput
  }

  export type expenseUncheckedUpdateWithoutTransactionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUncheckedUpdateOneWithoutExpenseNestedInput
    stock?: stockUncheckedUpdateOneWithoutExpenseNestedInput
    task?: taskUncheckedUpdateManyWithoutExpenseNestedInput
    transportation_expense?: transportation_expenseUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type expenseCreateWithoutTransportation_expenseInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseCreateNestedOneWithoutExpenseInput
    stock?: stockCreateNestedOneWithoutExpenseInput
    task?: taskCreateNestedManyWithoutExpenseInput
    transaction?: transactionCreateNestedManyWithoutExpenseInput
  }

  export type expenseUncheckedCreateWithoutTransportation_expenseInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    description?: string | null
    expense_type?: $Enums.ExpenseType | null
    user_id?: string | null
    is_archived?: boolean
    bill_expense?: bill_expenseUncheckedCreateNestedOneWithoutExpenseInput
    stock?: stockUncheckedCreateNestedOneWithoutExpenseInput
    task?: taskUncheckedCreateNestedManyWithoutExpenseInput
    transaction?: transactionUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type expenseCreateOrConnectWithoutTransportation_expenseInput = {
    where: expenseWhereUniqueInput
    create: XOR<expenseCreateWithoutTransportation_expenseInput, expenseUncheckedCreateWithoutTransportation_expenseInput>
  }

  export type expenseUpsertWithoutTransportation_expenseInput = {
    update: XOR<expenseUpdateWithoutTransportation_expenseInput, expenseUncheckedUpdateWithoutTransportation_expenseInput>
    create: XOR<expenseCreateWithoutTransportation_expenseInput, expenseUncheckedCreateWithoutTransportation_expenseInput>
    where?: expenseWhereInput
  }

  export type expenseUpdateToOneWithWhereWithoutTransportation_expenseInput = {
    where?: expenseWhereInput
    data: XOR<expenseUpdateWithoutTransportation_expenseInput, expenseUncheckedUpdateWithoutTransportation_expenseInput>
  }

  export type expenseUpdateWithoutTransportation_expenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUpdateOneWithoutExpenseNestedInput
    stock?: stockUpdateOneWithoutExpenseNestedInput
    task?: taskUpdateManyWithoutExpenseNestedInput
    transaction?: transactionUpdateManyWithoutExpenseNestedInput
  }

  export type expenseUncheckedUpdateWithoutTransportation_expenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expense_type?: NullableEnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    bill_expense?: bill_expenseUncheckedUpdateOneWithoutExpenseNestedInput
    stock?: stockUncheckedUpdateOneWithoutExpenseNestedInput
    task?: taskUncheckedUpdateManyWithoutExpenseNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type taskCreateManyTask_categoryInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    repeating_type?: $Enums.DateRepeatType | null
    expense_id?: bigint | number | null
    is_archived?: boolean
  }

  export type taskUpdateWithoutTask_categoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    expense?: expenseUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutTask_categoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    expense_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskUncheckedUpdateManyWithoutTask_categoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    expense_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskCreateManyExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    priority_level?: number
    due_date?: Date | string | null
    task_category_id?: bigint | number | null
    repeating_type?: $Enums.DateRepeatType | null
    is_archived?: boolean
  }

  export type transactionCreateManyExpenseInput = {
    id?: bigint | number
    created_at?: Date | string
    amount?: number
    price?: number | null
    status?: $Enums.TransactionStatus | null
    repeat_at?: Date | string | null
  }

  export type taskUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    task_category?: task_categoryUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskUncheckedUpdateManyWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    repeating_type?: NullableEnumDateRepeatTypeFieldUpdateOperationsInput | $Enums.DateRepeatType | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type transactionUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    repeat_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    repeat_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyWithoutExpenseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    repeat_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}