// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.


// Kodu buraya yazalım...

const ages : number[] = []

ages.push(34)
ages.push(45)
ages.push(73)

console.log(ages) // 34, 45, 73


// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.


// Kodu buraya yazalım...

const gameBoard : string[][] = []

gameBoard.push(["1", "4"]);
gameBoard.push(["1", "2"]);
gameBoard.push(["-", "1"]);

console.log(gameBoard);


// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}


// Kodu buraya yazalım...

type Product = {
    name: string,
    price: number
}

const coffee: Product = {
    name: 'coffee mug',
    price: 11.50
}

console.log(coffee)

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.


// Kodu buraya yazalım...

function getTotal(products: Product[]): number {
    let total = 0;
    for (const product of products) {
        total += product.price;
    }
    return total;
}

const products: Product[] = [
    { name: "coffee", price: 11.50 },
    { name: "notebook", price: 8.75 },
    { name: "phone", price: 54.99 },
];

console.log(getTotal(products)); // 75.24