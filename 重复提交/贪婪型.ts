// export const await100ms=util.prototype.await100ms

export class firstMap {
    map = new Map()
    get(key, value) {
        if (this.map.has(key) === false)
            this.map.set(key, value)
        return this.map.get(key) 
    }
}



/**
 * 返回一个对象 该对象的run方法
 * 将等待到time ms没有被调用的时候执行run方法接收的参数
 */
class Await{
    private time
    constructor(time:Number){
        this.time=time
    }
    private s = Date.now()
    private id: any = null
    run(fun:Function) {
        if (this.id === null) {//初次执行
            this.s = Date.now()
        }
        if (Date.now() - this.s > this.time) {//执行函数
            fun()
            this.id = null    //执行完毕一次  下载再执行触发 this.s = Date.now()
        } else {//this.time ms内触发的，刷新定时器
            if (this.id) {//清除之前的
                clearTimeout(this.id)
            }
            this.s = Date.now()
            this.id = setTimeout(() => {//这就是最新的了
                this.run(fun)
                this.s = Date.now()
            }, this.time);
        }
    }
}
/**
 * 返回一个对象 该对象的run方法
 * 将等待到100ms没有被调用的时候执行run方法接收的参数
 */
export class Await100ms extends Await{
    constructor(){
        super(100)
    }
}

