/** mixin 多个对象的属性 */
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}

/** 创建一个新对象，然后将其他对象的属性都附加上去，后面的可能会覆盖掉前面的 */
export function merge_obj(...objs:any[]) {
    let obj:{[x:string]:any}={}
    for (let i = 0; i < objs.length; i++) {
        const el = objs[i];
        if(el instanceof Object)
        obj={
            ...obj,
            ...el
        }
    }
    return obj
}