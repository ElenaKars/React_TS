import './styles.css';

function Lesson06() {
    let userName: string = "Tom";
    userName = "Mary";
    let fullName: string = `${userName} Smith`;
    let result: string = 1 + 2 + '3';

    let luckyNumber: number = 23;
    luckyNumber = Infinity;
    luckyNumber = NaN;
    // luckyNumber = 23 - '4';

    let isAdmin: boolean = true;
    isAdmin = 2 > 1;
    isAdmin = !1;
    isAdmin = userName === 'John';

    let emptyValue: null = null;

    let data: undefined = undefined;

    let bigN: bigint = 123778889002n;
    bigN = 1233333333333333333333333333333n;
    // bigN = 123;

    let unique: symbol = Symbol('description');
    // unique = 23;

    // 8. Типизация массива - указываем тип данных, которые будет содержать массив, затем квадратные скобки
    const colors: string[] = ['red', 'black', '123'];
    // colors.push(true);
    // colors[0] = 0001;
    colors[2] = 'green';
    console.log(colors);

    // 9. Кортеж (tuple) - указываем в квадратных скобках структуру массива, а вместо элементов подставляем типы
    const fruits: [string, number] = ['apple', 4];
    fruits.push('cherry');
    console.log(fruits);

    // 10. Типизация возвращаемого функцией значения - тип подставляется после круглых скобок
    // - если функция ничего не возвращает - типизируем возврат как void
    const showMessage = (): void => {
        console.log('Hello');
        colors[1] = 'pink';
    };
    // - если функция возвращает значение, то после двоеточия мы указываем нужный тип
    const getSum = (): number => {
        // const sum: string = '2' + '4';
        const sum: number = 2 + 4;
        return sum;
    };

    const getUserData = (firstName: string, age: number = 18): string => {
        return `${firstName} - ${age}`;
    };
    console.log(getUserData('Nick', 23));
    console.log(getUserData('Mary'));

    //auto type detection

    let name = 'Bob';
    const numbers = [2, 34, 54, 9];

    const getNumber = (num = 2) => {
        return num;
    };

    //union type, a few types, using the symbol |
    let color: string | number = 'red';
    color = 34;
    // color = true;

    const example: (string | boolean)[] = ['red', true];


    return (
        <div className="lesson06-wrapper">
            Lesson 06 - Typescript Intro
        </div>
    );
}

export default Lesson06;