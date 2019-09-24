
namespace _URL {
    /** 解析url中的参数  */
    export function getParameters(url: string) {
        let obj = url.match(/([^?=&]+)(=([^&]*))/g)

        if (obj === null) {
            return null
        }
        return obj.reduce((a:any, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {});
    }

}

