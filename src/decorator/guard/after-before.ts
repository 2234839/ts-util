/** 函数运行之后，执行里面的回调函数,会将函数执行的值赋给他 */
export function run_after(f: (res: any) => void) {
  return function name(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    return {
      ...descriptor,
      async value(...arg: any) {
        const res = await descriptor.value(...arg);
        await f(res);
        return res;
      },
    };
  };
}
/** 函数运行之前，执行里面的回调函数 */
export function run_before(f: () => void) {
  return function name(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    return {
      ...descriptor,
      async value(...arg: any) {
        await f();
        const res = await descriptor.value(...arg);
        return res;
      },
    };
  };
}
