class Animals {
    say() {
        console.log('gav');
    }
}

class Tigr extends Animals {
    eat() {
        // super.say()
        console.log('myau');
    }
}

const tigr = new Tigr()

tigr.say()
tigr.eat()


