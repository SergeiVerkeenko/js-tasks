const playBtn = document.querySelector('.play')

const arr = [
    {
        src: './1.mp3'
    },
    {
        src: './2.mp3'
    },
    {
        src: './3.mp3'
    },
    {
        src: './4.mp3'
    }
]

let indexMysic = 0;
const audio = document.createElement('audio')
let flag = false
playBtn.addEventListener('click', () => {
    currentSong()
})

document.querySelector('.nextSong').addEventListener('click', () => {
    if (indexMysic === arr.length - 1) {
        indexMysic = 0
    } else {
        indexMysic++
    }
    changeSong()
})

document.querySelector('.previousSong').addEventListener('click', () => {
    if (indexMysic === 0) {
        indexMysic = arr.length - 1
    } else {
        indexMysic--
    }
    changeSong()
})

function changeSong() {

    audio.src = arr[indexMysic].src
    audio.play()
}
function currentSong() {
    audio.src = arr[indexMysic].src
    if (flag === false) {
        audio.play()
        flag = true
    } else {
        audio.pause()
        flag = false
    }
}