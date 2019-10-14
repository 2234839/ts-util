import { Parameters } from "../ts-type/type-util"

type b<T> = T extends undefined ? {
    success: (res: any) => any,
} : T

type un_success_par<T extends {
    (options: {
        success: (res: any) => any,
        [name: string]: any
    }): any
}> = Parameters<b<Parameters<T>[0]>['success']>[0];


function assect<T>(par: T | undefined): T {
    return par!
}


// type BB<T extends infer R> = R

/** 将选项参数回调风格的函数转为promise ,存在一些 问题，当开启全严格模式时，返回的值是未知的 */
export function adap_promise<T extends {
    (options: {
        /** success类型是必须的，靠这个来获取返回值 */
        success: (res: any) => any,
    }
        /** 获取函数本就该有的约束，不然没有这句话一些必须的参数在adap_promise的par中就不是必须的，这样他们的类型就对不上 */
        & Parameters<T>[0]): any
}>                                  //un_success_par<T>
    (fn: T, par: Parameters<T>[0]):Promise<un_success_par<T>> {
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

interface fun2 {
    ff<T>(par: T | undefined): T
}

adap_promise(wx.getSetting, {
    success(a) {

    }
}).then(_r => {

})
type a = undefined | {}

type c = b<a>

