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

console.log(toplamlar(4,5));

const toplamlar = (number1,number2) =>{
    return number1 + number2 ;
}

// hata aliriz cunku degiskene baglayip cagirdik once fonx olusturulmali ondan sonra cagirilmali


// implicit return de ise eger tek bir satir ifade yazacaksak {}  koymaya gerek yok  const toplamlar = (number1,number2) =>number1 + number2 





