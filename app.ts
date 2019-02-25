import { Await100ms } from "./重复提交/贪婪型";
let aw=new Await100ms()

function test(){
    console.error(Date.now())
}
console.log(Date.now())
aw.run(test)
console.log(Date.now())
aw.run(test) 
console.log(Date.now())
aw.run(test)
console.log(Date.now())
aw.run(test)