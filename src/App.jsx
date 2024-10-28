import "./App.css";
import Products from "./components/Products/Products";

function App() {
  const products = [
    {name:'Samsung s23 ultra',price:12000},
    {name:'Iphone 15pro',price:15000},
    {name:'Oneplus 12 pro',price:10000}
  ]
  const forAlert = () => {
    alert ("Altering")
  }
  return (
    <div>
      {
        products.map(product => <Products 
        product={product}
        alert = {forAlert}
        />)
      }
    </div>
  );
}

export default App;
