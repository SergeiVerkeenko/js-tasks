// Пользователь вводит строку. 
// Необходимо посчитать количество гласных (for)

const str = prompt('');
let count = 0;
for (let i =0; i<str.length; i++){
    if (str[i]=='а' || str[i]=='и' || str[i]=='о') {
        count+=+1
    }
}
console.log(str.length-count);