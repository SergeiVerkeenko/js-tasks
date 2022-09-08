
// 4. Delete
// Удаление объекта из массива по id
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента
// Если совпадения по id нет – ошибка 

let arr = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
];

const clientID = 'sql';
const arr_new = arr.filter(elem => elem.id !== clientID)
if (arr.length === arr_new.length) console.log('no found object id');
else {
    arr = arr_new
    console.log(arr);
}

let arr = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
];
const obj = { "id": "typescript", "label": 'Test' };
const foundObjects = arr.filter(el => el.id !== obj.id)
const newObj1 =
{...foundObjects[0],...obj} 
if (arr.length === foundObjects.length) {
    foundObjects.push(newObj1)
    arr = foundObjects;
    console.log(arr);
} else {
    console.log('ERROR');
}