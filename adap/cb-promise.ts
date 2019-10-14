import { Parameters } from "../ts-type/type-util"

type un_success_par<T extends {
    (options: {
        success: (res: any) => any,
        [name: string]: any
    }): any
}> = Parameters<Parameters<T>[0]['success']>[0];

/** 将选项参数回调风格的函数转为promise */
export function adap_promise<T extends {
    (options: {
        /** success类型是必须的，靠这个来获取返回值 */
        success: (res: any) => any,
    }
    /** 获取函数本就该有的约束，不然没有这句话一些必须的参数在adap_promise的par中就不是必须的，这样他们的类型就对不上 */
    & Parameters<T>[0]): any
}>
    (fn: T, par: Parameters<T>[0]): Promise<un_success_par<T>> {
    return new Promise((resolve, reject) => {
        fn({
            ...par,
            success(res: any) {
                resolve(res)
            },
            fail(err: any) {
                reject(err)
            }
        })
    })
}