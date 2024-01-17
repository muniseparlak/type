// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.


// Kodu buraya yazalım...

let highScore : number | boolean;
highScore = false;
highScore = 5


// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın. 
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.


// Kodu buraya yazalım...

let stuff: Array<number> | Array<string>;

stuff = [1, 2, 3];
console.log(stuff); // [1, 2, 3]

stuff = ["apple", "banana", "orange"];
console.log(stuff); // ["apple", "banana", "orange"]


// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "SkillLevel" isminde bir literal türü oluşturalım (enum değil, literal tür).
// Bu tür, "Beginner", "Intermediate", "Advanced", ve "Expert" değerlerini alabilsin.


// Kodu buraya yazalım...

type SkillLevel = "Beginner" | "Intermediate" | "Upper Intermediate" | "Advanced" ;

let skillLevel : SkillLevel;

skillLevel = "Beginner"
console.log(skillLevel)  // Beginner

skillLevel = "Upper Intermediate"
console.log(skillLevel)  // Upper Intermediate


// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "SkiSchoolStudent" isminde bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - name bir string olsun
// - age bir numara olsun
// - sport değeri "ski" veya "snowboard" olsun
// - level ise yukarıda oluşturduğumuz SkillLevel türünden bir değer olsun


// Kodu buraya yazalım...

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel;
};

const student: SkiSchoolStudent = {
    name: "Munise",
    age: 34,
    sport: "snowboard",
    level: "Upper Intermediate",
};

console.log(student)


// **********************************************
// ******************* BÖLÜM 5 ******************
// **********************************************
// RGB renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - r bir numara olsun
// - g bir numara olsun
// - b bir numara olsun


// Kodu buraya yazalım...

type Color = {
    r: number;
    g: number;
    b: number;
};

const redColor: Color = {
    r: 255,
    g: 0,
    b: 0,
};

console.log(redColor);
// { r: 255, g: 0, b: 0 }

// HSL renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - h bir numara olsun
// - s bir numara olsun
// - l bir numara olsun


// Kodu buraya yazalım...

type HSLColor = {
    h: number;
    s: number;
    l: number;
};

const blueHSLColor: HSLColor = {
    h: 210,
    s: 100,
    l: 50,
};

console.log(blueHSLColor);
// { h: 210, s: 100, l: 50 }

// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki 
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler 
// bulunabilsin.


// Kodu buraya yazalım...

let colors: Array<Color | HSLColor> = [];

const redRGBColor: Color = { r: 255, g: 0, b: 0 };
const greenHSLColor: HSLColor = { h: 120, s: 100, l: 50 };

colors.push(redRGBColor);
colors.push(greenHSLColor);

console.log(colors);
// [ { r: 255, g: 0, b: 0 }, { h: 120, s: 100, l: 50 } ]


// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.


// Kodu buraya yazalım...


function greet(nameOrArray: string | string[]): void {
    if (typeof nameOrArray === "string") {
        console.log(`Merhaba, ${nameOrArray}`);
    }
  
    else if (Array.isArray(nameOrArray)) {
        for (const name of nameOrArray) {
            console.log(`Merhaba, ${name}`);
        }
    }
}

greet("Ahmet"); // "Merhaba, Ahmet"
greet(["Ayşe", "Mehmet", "Ceren"]);
// "Merhaba, Ayşe"
// "Merhaba, Mehmet"
// "Merhaba, Ceren"