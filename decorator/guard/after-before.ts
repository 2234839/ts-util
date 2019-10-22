/** 函数运行之后，执行里面的回调函数 */
export function run_alfter(f: () => void) {
    return function name(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        return {
            ...descriptor,
            async value(...arg: any) {
                const res = await descriptor.value(...arg)
                await f()
                return res
            }
        }
    }
}
/** 函数运行之前，执行里面的回调函数 */
export function run_before(f: () => void) {
    return function name(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        return {
            ...descriptor,
            async value(...arg: any) {
                await f()
                const res = await descriptor.value(...arg)
                return res
            }
        }
    }
}