/** ════════════════════════🏳‍🌈 工具类型 🏳‍🌈════════════════════════
 *
 ** ════════════════════════🚧 工具类型 🚧════════════════════════ */


/** 解开promise类型 */
export type unPromise<T> = T extends Promise<infer R> ? R : T

/** 解开返回值是promise的类型 */
export type un_return_Promist<T extends (...args: any[]) => any> = unPromise<ReturnType<T>>

/** 获取api的返回值类型，解开了promise的 */
export type un_api_return <T extends (...args: any[]) => any> = un_return_Promist<T>


/** 获取函数参数的元组类型 ts 自带 */
export type Parameters < T extends (...args: any[]) => any > = T extends (...args: infer P) => any ? P : never;

/** 获取返回值的类型  ts自带*/
export type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;



/** 使用实例 */
interface I_test{
    d:123
}

//复用类型 使用 Pick 来选择 需要的类型
type I_test_select_d=Pick<I_test,"d">

//复用类型 使用 Omit 来剔除 不需要的类型
// type I_test_remove_a=Omit<I_test,'a'>

export type Diff<T, U> = T extends U ? never : T;  // Remove types from T that are assignable to U
export type Filter<T, U> = T extends U ? T : never;  // Remove types from T that are not assignable to U
