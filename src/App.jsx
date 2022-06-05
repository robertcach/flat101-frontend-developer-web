import Home from "./views/Home/Home";
import NewProduct from "./views/Products/NewProduct/NewProduct";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store"
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-product" element={<NewProduct />} />
        </Routes>
      </div>

    </Provider>
  );
}

export default App;
