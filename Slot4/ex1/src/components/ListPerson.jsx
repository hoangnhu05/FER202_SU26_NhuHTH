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
   // 5. Kiểm tra xem CÓ AI là thanh thiếu niên không (Trả về true/false)
    const isAnyPersonTeenager = people.some(person => person.age >= 13 && person.age <= 19);
    //6.Hiển thị danh sách people theo tên tăng dần, tuổi giảm dần ra dạng bảng gồm các cột STT, Name, Age. Định dạng bảng
    const sortedPeople = [...people].sort((a, b) => {
        const nameCompare = a.name.localeCompare(b.name);
        
        if (nameCompare !== 0) {
            return nameCompare; // Sắp xếp theo bảng chữ cái từ A-Z
        }
        return b.age - a.age; // Nếu trùng tên, đẩy tuổi lớn hơn lên trước
    });
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
            <h3>5. Check if there is ANY person of the people array is teenager (Expected: true/false)</h3>
            <div>
                <p>Result: <strong>{isAnyPersonTeenager.toString()}</strong></p>
            </div>
            <h3>6. Display the list of people by name ascending, age descending in a table format with columns STT, Name, Age</h3>
           <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {sortedPeople.map((person, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    );
}
export default ListPerson;
