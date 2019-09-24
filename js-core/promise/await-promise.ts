/** 包裹promise,然后回以回调 */
export function awaitPromis<T>( {
    getPromise,
    succeed = () => { },
    error = () => { },
    end = () => { },
    midway = () => { },
}:{
    /** 获取promise的手段 */
    getPromise: (this: any,...arg:any) => Promise<T>,
    /** prommise执行成功 */
    succeed ?: (r: T) => void,
    /** promise执行失败 */
    error ?: () => void,
    /** promise 执行完毕 */
    end ?: () => void,
    /** 还没有执行完毕，中途触发 */
    midway ?: () => void,
}) {
    let running = false
    return function (this: any,...arg:any) {
        if (running) {
            midway();
        } else {
            running = true
            const promise = getPromise.apply(this,arg)
            promise.then(succeed).catch(error).finally(() => {
                end();
                running = false
            })

        }
    }
}