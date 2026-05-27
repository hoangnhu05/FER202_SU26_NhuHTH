//1.Hiển thị thông tin của từng người trong một danh sách. Mỗi người có tên, tuổi ra danh sách ul.
import React from 'react';
function ListPerson() {
    const people = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 },
        { name: "Jack", age: 50 },
        { name: "Michael", age: 9 },
        { name: "John", age: 40 },
        { name: "Ann", age: 19 },
        { name: "Elisabeth", age: 16 },

    ];
    //2.Tìm người đầu tiên trong mảng people là thanh thiếu niên (tuổi từ 13 đến 19) và hiển thị thông tin của người đó.
    const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);
    //3.Tìm tất cả những người trong mảng people là thanh thiếu niên và hiển thị thông tin của họ.
    const allTeenagers = people.filter(person => person.age >= 13 && person.age <= 19);
    //4.Kiểm tra xem mọi người trong mảng people có phải là thanh thiếu niên hay không (Dự kiến: true/false).
    const isEveryPersonTeenager = people.every(person => person.age >= 13 && person.age <= 19);
   
    return (
        <>
            <h1>1.List of People</h1>
            <div>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name} - {person.age} years old</li>
                ))}
            </ul>
        </div>
            <h3>2.Find the first person off the people array is teenager</h3>
        <div>
            {firstTeenager ? (
                <p>{firstTeenager.name} - {firstTeenager.age} years old</p>
            ) : (
                <p>No teenager found.</p>
            )}
        </div>
    
            <h3>3. Find all persons of the people array who are teenagers</h3>
            <div>
                {allTeenagers.length > 0 ? (
                    <ul>
                        {allTeenagers.map((person, index) => (
                            <li key={index}>{person.name} - {person.age} years old</li>
                        ))}
                    </ul>
                ) : (
                    <p>No teenagers found.</p>
                )}
            </div>

            <h3>4. Check if every person of the people array is teenager (Expected: true/false)</h3>
            <div>
                <p>Result: <strong>{isEveryPersonTeenager.toString()}</strong></p>
            </div>

            
        </>
    );
}
export default ListPerson;
