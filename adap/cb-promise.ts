import { Parameters } from "../ts-type/type-util"

/** 将选项参数回调风格的函数转为promise */
export function adap_promise<T extends {
    (options: {
        success: (res: any) => any
    }): any
}>
    (fn: T, par: Parameters<T>[0]): Promise<Parameters<Parameters<T>[0]['success']>[0]> {
    return new Promise((resolve, reject) => {
        fn({
            ...par,
            success(res: any) {
                resolve(res)
            },
            final(err: any) {
                reject(err)
            }
        })
    })
}