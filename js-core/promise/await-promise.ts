/** 包裹promise,然后回以回调 */
export function awaitPromise<T>({
    getPromise,
    /** 这里的也要描述类型？ */
    succeed = (r: T) => { },
    error = () => { },
    end = () => { },
    midway = () => { },
}: {
    /** 获取promise的手段,这个函数的this会和awaitPromise运行环境的this一致 */
    getPromise: (...arg: any[]) => Promise<T>,
    /** promise执行成功 */
    succeed?: (r: T) => void,
    /** promise执行失败 */
    error?: (e: any) => void,
    /** promise 执行完毕 */
    end?: () => void,
    /** 还没有执行完毕，中途触发 */
    midway?: () => void,
}) {
    let running = false
    return function (this: any, ...arg: any[]) {
        if (running) {
            midway();
        } else {
            running = true

            const promise = getPromise.apply(this, arg)

            promise.then(((r: any) => {
                succeed(r)
            })).catch(error)
                .finally(() => {
                    end();
                    running = false
                })

        }
    }
}