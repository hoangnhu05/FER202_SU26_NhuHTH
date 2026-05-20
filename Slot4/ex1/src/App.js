import './App.css';
import Hello from './components/Hello';
import ListPerson from './components/ListPerson';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// 1. Đổi sang import PizzaList thay vì Pizza đơn lẻ
import PizzaList from './components/PizzaList'; 

function App() {
  return (
    <div>
      <Hello />
      <ListPerson />
      
     
      <PizzaList />
      
      <Footer
        id="12345"
        name="NhuHTH"
        email="hoangnhu2k5@gmail.com"
        github="https://github.com/hoangnhu05/FER202_SU26_NhuHTH"
      />
    </div>
  );
}

export default App;