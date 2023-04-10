// Реализуйте Singer – производный класс, базовый – Worker.
// Класс Worker состоит из: свойств name, surname в конструкторе; метода getInfo(), с
// помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname в конструкторе при помощи метода super и
// дополнительно принимает и дополняет конструктор свойствами: years, birth, style;
// класс включает метод getInfo(), который переопределяет метод базового класса и
// расширяет его, отображая в консоль информацию о певце: years, birth, style.
// Необходимо вызвать метод getInfo из 2 экземпляров worker, singer
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NumberArray = /** @class */ (function () {
    function NumberArray() {
    }
    NumberArray.prototype.sumArr = function () {
        var arr = [];
        for (var i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        return arr;
    };
    return NumberArray;
}());
var ConsoleArray = /** @class */ (function (_super) {
    __extends(ConsoleArray, _super);
    function ConsoleArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleArray.prototype.sumArr = function () {
        var res = _super.prototype.sumArr.call(this);
        return res.reduce(function (sum, el) { return sum + el; }, 0);
    };
    return ConsoleArray;
}(NumberArray));
var consoleArray = new ConsoleArray();
console.log(consoleArray.sumArr());
