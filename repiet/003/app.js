class Dom {
    constructor() {
        this.fillArray()
    }
    fillArray() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            try {
                const mainString = document.querySelector('.one').value
                this.check(mainString)
                const glass = mainString.replaceAll(/[euioa]+/g, '')
                const sog = mainString.length - glass.length
                document.querySelector('h1').innerHTML = glass.length

                document.querySelector('h2').innerHTML = sog
            } catch (error) {
                alert(error.message)
            }
        });

    }
    check(mainString) {
        if (/[\.\^\$\*()';;&!@#%:0-9]+/g.test(mainString)) throw new Error('ERRORR')
    }

}
const dom = new Dom();