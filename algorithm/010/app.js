// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

// < !--любой текст-- >

const str = '<!--ser ver 22-->';
function checkArr(str) {
    try {
        const chenged = str.replace(/^\<\!\-\-/g, "").replace(/\-\-\>$/g, "")
        if (!str) throw new Error('ERROR')
        return chenged

    } catch (error) {
        return error.message
    }
}
console.log(checkArr(str));