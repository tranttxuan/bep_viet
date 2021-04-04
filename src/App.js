import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import OneProduct from "./pages/OneProduct";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route exact path="/product/:idProducts" component={OneProduct} />
        <Route exact path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
