const playBtn = document.querySelector('.play')

const arr = [
    {
        src: './1.mp3',
        title: 'Три полоски',
        ispolnitel: 'Animal ДжаZ',
        img: '../004/img/альбомы/animalJazz.jpg'
    },
    {
        src: './2.mp3',
        title: 'Ты Меня Не Ищи',
        ispolnitel: 'Вирус',
        img: '../004/img/альбомы/virus.jpg'
    },
    {
        src: './3.mp3',
        title: '100 дней до приказа',
        ispolnitel: 'НеИгрушки',
        img: '../004/img/альбомы/100.jpg'
    },
    {
        src: './4.mp3',
        title: 'Ангелы здесь больше не живут',
        ispolnitel: 'Ульяна Каракоз',
        img: '../004/img/альбомы/ангелы.jpg'
    }
]

let indexMysic = 0;
const audio = document.createElement('audio')
let flag = false
playBtn.addEventListener('click', () => {
    currentTitle()
    currentSong()
})

document.querySelector('.nextSong').addEventListener('click', () => {
    if (indexMysic === arr.length - 1) {
        indexMysic = 0
    } else {
        indexMysic++
    }
    currentTitle()
    changeSong()
})

document.querySelector('.previousSong').addEventListener('click', () => {
    if (indexMysic === 0) {
        indexMysic = arr.length - 1
    } else {
        indexMysic--
    }
    currentTitle()
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

// изменение названия песни и исполнителя, плюс изменение картинки альбома
function currentTitle() {
    let ispol = document.querySelector('.ispolnitel');
    ispol.textContent = arr[indexMysic].ispolnitel;
    let nameSong = document.querySelector('.nameSong');
    nameSong.textContent = arr[indexMysic].title;
    const img = document.querySelector('.img')
    img.style.backgroundImage = `url(${arr[indexMysic].img})`
}

//корректировка прогресса
function updateProgress(event) {
    const { duration, currentTime } = event.srcElement;
    const progressPersent = (currentTime / duration) * 100;
    document.querySelector('.progress').style.width = `${progressPersent}%`
}

audio.addEventListener('timeupdate', updateProgress)

//перемотка по ползунку
function setProgress(event) {
    const width = this.clientWidth
    const clickX = event.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

document.querySelector('.polzunok').addEventListener('click', setProgress)

// запуск следующей композиции, если текущая закончилась
audio.addEventListener('ended', () => {
    if (indexMysic === arr.length - 1) {
        indexMysic = 0
    } else {
        indexMysic++
    }
    currentTitle()
    changeSong()

})
