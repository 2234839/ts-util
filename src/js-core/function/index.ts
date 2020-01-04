/** 固定一个对象上的方法的this，会修改原对象 */
export function fixed_this<T extends any>(obj: T) {
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (typeof val === "function") {
      obj[key] = (...arg: any) => val.apply(obj, arg);
    }
  });
  return obj;
}
