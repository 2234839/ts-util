

/** 解析url中的参数 */
export function getURLParameters(url: string) {
    let obj = url.match(/([^?=&]+)(=([^&]*))/g)

    if (obj === null) {
        return null
    }
    return obj.reduce((a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {});
}
