// template literals => sablon dizileri => javascript ifadesini duz bir ifade gibi yazmammizi saglayan script cesidir
// `` seklindedir

const isim ="Mehmet"

const message = ` Merhaba, ${isim} ` ;

console.log(message);

const birim_fiyat = 100;
const adet = 3
const para_birimi = "tl"

const toplam = ` Toplam:  ${birim_fiyat * adet } ${para_birimi}`;
console.log(toplam);


// shortHand Property Name => kisayol objeisimleri anahtarlari  => bir objenin ismi degisken ile belirtildiginde
//  objedeki key degeri ile ayni ise bunu bir defa yazaeiz


const name ="Mehmet";

const age = 65;


const kullanici_obj = {name , age};  // burada acik yaim soyledir name=name, age=age

console.log(kullanici_obj);




// Arrow Functionlar

// eger fonxionu function ile olusturursak bunu her yerden cagirabiliriz fakat degiskene baglayi cagirirsak her zaman kullanamayiz


console.log(topla(3,5));

function topla(sayi1, sayi2){
    return sayi1 +sayi2 ; 

}

// 8 sonucu consoleda gorulur

/* console.log(total(4,5));

const total = (number1,number2) =>{
    return number1 + number2 ;
} */

// hata aliriz cunku degiskene baglayip cagirdik once fonx olusturulmali ondan sonra cagirilmali
// implicit return de ise eger tek bir satir ifade yazacaksak {}  koymaya gerek yok  const toplamlar = (number1,number2) =>number1 + number2 








// object array destructuring
// obje ve disilerin parcalara bolunerek degiskenlere atanmasi islemi

const customer = { customerName: 'Mehmet', customerAge: 34, city: "Toronto", Town:"Barry"};


const { customerAge, customerName } = customer; 

console.log(customerAge) ;
console.log(customerName) ;

const { Town, ...others } = customer;
// rst operator => rest  (spread operator)

console.log(others) ;
console.log(Town) ;





const family ={ baba:"Adem", anne:"Havva",sehir:"medine"}


const {baba, ...restOfFamily} = family;

console.log(`the rest of the family: ${restOfFamily} `) ;
console.log(baba);
console.log(restOfFamily) ;

const usingOfSpread = {...family, sehir:'Mekke'}  // spread operator can be used to mutate the values in React
console.log(usingOfSpread)




// the use of array in located below;

const number =[0,1,2,3,4,5];

const [sifir,bir, ...anyOthers] = number;

console.log(sifir);
console.log(bir);
console.log(anyOthers);
console.log(sifir,bir,anyOthers);



// the use of Deafult Parameter
const plus = (firstNumber,secondNumber=0) =>  ` total value is  ${firstNumber + secondNumber}`

console.log(plus(4,9));

console.log(plus(3)); //naN not is a number  if we use the default parametere is will disappear when




// how to concat thearrays with using spread 

const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];

const lastVersionofArray = [...array1, ...array2];


console.log(array1);
console.log(array2);
console.log(lastVersionofArray);

const info1= {name:"ozguc",lastName:"Dalga"}
const info2 = {town:"Istanbul",age:"31"}



const consolidation = {...info1, ...info2};
console.log(consolidation);






// Ternary Conditional Operators

// condition ?    if the condiition is true we write the codes after quetsion mark
// condition ? if it is true :  if the condition is wronf we write the code after semicolon


// conditon ? true : wrong

// the most important thing is that we use only  one expression in Turnery operation
// if we need to do lots of thing with condition we should use if block
/* if (condition){
    true
}
else {
    wrong
} */


const theStatusOfBridge = "BRIDGE IS OPEN";

theStatusOfBridge === "BRIDGE IS OPEN" 
? console.log("bridge is really open OMG")
: console.log("bridge is ON Maintenance");




