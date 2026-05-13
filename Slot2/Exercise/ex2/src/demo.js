// let tong = (a,b) => a + b;
// console.log(tong(5, 3));

// let chao = () => console.log("Xin chao!");
// chao();

//1.Viet ham Chao1 nhan 1 tham so ten va in ra loi chao voi ten do
// sau do goi
//2.Viet ham Chao2 nhan 1 tham so la 1 doi tuong Person
// có các thuộc tính id, name, age, address.
//Sau đo in ra lời chao với tên của đối tượng đó.
// Gọi ham Chao2 voi mot đoi tượng Person mau. 
let Chao1 = (ten) => {
    console.log("Xin chao " + ten);
};

Chao1("Nhu");

let Chao2 = (person) => {
    console.log("Xin chao " + person.name);
};

let person = {
    id: 1,
    name: "Bob",
    age: 30,
    address: "123 Main St"
};

Chao2(person);