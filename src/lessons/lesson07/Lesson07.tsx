import './styles.css';

function Lesson07() {
    //type any 
    let city: any = 'Vancouver';
    city = 123;
    city = [123, "London", true];

    //interface
    interface User {
        name: string,
        // age?: number 
        age?: number | undefined | null;
    }

    const userData: User = { name: 'John', age: 40 };
    const userObj: User = { name: 'Viktoria' };

    interface User {
        role?: string | null;
        //Lesson07.tsx(13, 9): 'age' was also declared here. No possible to redefining propeties
        // age: string
    }

    const user: User = {
        name: 'Bob',
        role: null
    };

    //EXTENDING OF INTERFACES

    interface Person {
        fullName: string,
        email: string;
    }

    const personData: Person = {
        fullName: 'John Smith',
        email: 'john@gmail.com'
    };

    const adminData: Admin = {
        fullName: "Sara Ballock",
        email: 'sara@gmail.com',
        adminId: 21
    };

    //using type for creating object type
    type Weight = string | number | null;

    // type Aliases
    type Animal = {
        name: string,
        weight?: Weight;
    };

    const animalData: Animal = {
        name: 'Lion',
        weight: 200
    };

    interface Admin extends Person {
        adminId: number,
    }

    const personWeight: Weight = null;

    type NewAnimal = Animal & { country: string; };

    const zebraAnimal: NewAnimal = {
        name: 'zebra',
        weight: '150',
        country: "Kenia"
    };

    //GENERIC & Type Generic - a variable where we can use needed type while using Tupe
    //[number, string, T] - T if i dont know what kind of type it will be
    type CustomTyple<T = string> = [number, string, T];
    const arrMix: CustomTyple<boolean> = [23, 'Bob', true];
    const arrMix2: CustomTyple<number> = [23, 'Bob', 23];
    const arrMix3: CustomTyple = [23, 'Bob', 'true'];

    //Generic & Interface
    interface Fruit<T = number> {
        title: string,
        address: T;
    }

    const fruit1: Fruit = {
        title: 'apple',
        address: 34567
    };

    const fruit: Fruit<string> = {
        title: 'orange',
        address: 'Hauptstrasse, 1'
    };

    //example of using UNION operator for limiting variable by value
    type Status = 'success' | 'error' | 'loading';
    const status: Status = 'error';
    // const apiStatus: Status = 'default'; not correct

    enum Colors { Red, Black, Green = 1 };
    let currentColor: Colors = Colors.Black;
    console.log(currentColor);

    //---Строковое перечисление
    // enum для цветов светофора
    enum TRAFFIC_LIGHT {
        RED = 'red',
        YELLOW = 'yellow',
        GREEN = 'green'
    }
    const getAction = (light: TRAFFIC_LIGHT): string => {
        switch (light) {
            case TRAFFIC_LIGHT.RED:
                return 'Cтоп!';
            case TRAFFIC_LIGHT.YELLOW:
                return 'Приготовьтесь идти';
            case TRAFFIC_LIGHT.GREEN:
                return 'Можно идти';
        }
    };
    console.log(getAction(TRAFFIC_LIGHT.RED));


    return (
        <div className="lesson07-wrapper">TS Lesson 07</div>
    );
}

export default Lesson07;