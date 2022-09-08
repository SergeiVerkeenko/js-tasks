// 2. Create
// На входе объект вида
// { "label": “Test", "category": “test", "priority": 1 },
// Неоходимо запушить в БД объект только в том случае, если нет совпадений по
// label.
// Если совпадения нет, то в объект клиента добавить ключ id со значением label в
// toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id“: “test" "label": “Test", "category": “test", "priority": 1 },
// Если совпадение есть – ошибка 
const arr = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
];
const obj = { "label": 'Test', "category": 'test', "priority": 1 };
const arr1 = arr.filter(elem => elem.label !== obj.label)
if (arr.length === arr1.length) {
    arr.push({ id: obj.label.toLowerCase(), ...obj });
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}