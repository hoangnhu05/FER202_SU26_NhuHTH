import './App.css';

function App() {
  let chao1 = (name) => {
    console.log(`Xin chào, ${name}!`);
  };

  let person = {
    id: 1,
    name: "Bob",
    age: 30,
    address: "123 Main St"
  };

  // in thong tin cua doi tuong person ra the card trong react
  return (
    <>
      <h1>Xin chao, day la bai tap ve ham trong React!</h1>
      <h2>Toi la NhuHTH</h2>

      <button onClick={() => chao1("NhuHTH")}>
        Goi ham Chao1
      </button>

      <div className="card">
        <h3>Thông tin Person:</h3>
        <p>ID: {person.id}</p>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Address: {person.address}</p>
      </div>
    </>
  );
}

export default App;