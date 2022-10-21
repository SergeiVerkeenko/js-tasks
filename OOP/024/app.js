// 6. Сила методов класса заключается в возможности 
// иметь множество реализаций.
// Реализуйте 2 класса с 2 различными реализациями

class A {
    random() {
        console.log('+');
    }
}


class B extends A {
    random() {
        super.random();
        console.log('=');
    }

}

class C extends A {
    random() {
        super.random()
        console.log('-');
    }
}

const c = new C();
const b = new B();
const a = new A();
a.random()
console.log('-------------');
b.random()
console.log('-------------');
c.random()
