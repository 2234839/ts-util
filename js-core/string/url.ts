
export class _URL{
    private par_obj:any
    constructor (url:string){
        this.par_obj=_URL.getParameters(url)
    }
    /** 解析url中的参数 最少会返回一个{}对象 */
    static getParameters(url_str: string) {
        const url=decodeURIComponent(url_str)
        let obj = url.match(/([^?=&]+)(=([^&]*))/g)

        if (obj === null) {
            return {}
        }
        const par=obj.reduce((a:any, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {});
        return  par
    }

    /** 获取对应key的值，没有的情况下返回空字符串 */
    getValue(key:string){
        const value=this.par_obj[key]
        if(value===undefined){
            return ""
        }
        return value
    }
}

