import Home from "./views/Home/Home";
import NewProduct from "./views/Products/NewProduct/NewProduct";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <NewProduct />
      </header>
    </div>
  );
}

export default App;
