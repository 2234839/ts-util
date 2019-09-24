
export class _URL{
    /** 解析url中的参数  */
    static getParameters(url_str: string) {
        const url=decodeURIComponent(url_str)
        let obj = url.match(/([^?=&]+)(=([^&]*))/g)

        if (obj === null) {
            return null
        }
        return obj.reduce((a:any, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {});
    }

}

