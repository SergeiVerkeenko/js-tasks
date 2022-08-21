// 6. На вход подается url.Необходимо вывести
//  содержимое url после протокола
//     (http / https)
// https://www.instagram.com/hschool.official/ -> 
// www.instagram.com/hschool.official/

const str = 'https://www.instagram.com/hschool.official/';
if (str.includes('http://') || str.includes('https://')) {
    console.log(str.slice(str.lastIndexOf('www')));
}