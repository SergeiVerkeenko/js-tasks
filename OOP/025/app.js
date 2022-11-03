// function myl() {
//     let sum = 0;
//     return () => {
//         return ++sum
//     }
// }
// const p = myl()
// console.log(p());
// console.log(p());
// console.log(p());
// console.log(p());
// console.log(p());

class Zam {
    sum = 0;
    myl() {
        return ++this.sum
    }
}

const zam = new Zam();
console.log(zam.myl());
console.log(zam.myl());
console.log(zam.myl());

const obj = {
    count: 0,
    sum: function () {
        return ++this.count
    }
}
console.log(obj.sum());

function fact(n) {
    if (n == 1) return 1
    return n * fact(n - 1)
}