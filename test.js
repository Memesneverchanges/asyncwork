async function test1(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('test1'+arg)
        }, 4000)
    })
}
async function test2(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('test2'+arg)
        }, 4000)
    })
}
async function test3(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('test3'+arg)
        }, 4000)
    })
}

async function proverka1() {
    let param1=test1(' optimised promise work')
    let param2=test2(' optimised promise work')
    let param3=test3(' optimised promise work')
    console.log(await param1)
    console.log(await param2)
    console.log(await param3)
}
async function proverka2(){
    console.log(await test1(' NOT optimised promise work'))
    console.log(await test2(' NOT optimised promise work'))
    console.log(await test3(' NOT optimised promise work'))
}
proverka1();
proverka2();