import ExpenseItem from "./components/ExpenseItem";
import Product from './components/Product';
import Expenses from "./components/Expenses";


function App() {

  const expenses = [

    {
      id: 'e1',
      title: 'external SSD 512 GB',
      amount: 94.12,
      date: new Date(2024, 7, 14),
    },

    { 
      id: 'e2', 
      title: 'new laptop', 
      amount: 2299.49, 
      date: new Date(2024, 10, 12) 
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 1597.45,
      date: new Date(2024, 2, 28),
    },

    {
      id: 'e4',
      title: 'bluetooth JBL headphones',
      amount: 70,
      date: new Date(2023, 9, 12),
    },
    
  ];

  const products=[
    {
      title: "Product 1",
      price: 10, 
      description: "First product"
    },

    {
      title: "Product 2",
      price: 20,
      description: "Second product"
    }

  ];


  return (
    <>

      <h1>Vite + React</h1>

      <h2>Let's get started</h2>

      <p>Coś ciekawego</p>
      <Expenses expenses={expenses}/>

      <div>     

        <h1>List of my products</h1> 

        <Product 
          title={products[0].title} 
          price = {products[0].price} 
          description = {products[0].description}
        >
        </Product>
        
        <Product 
          title={products[1].title} 
          price = {products[1].price} 
          description = {products[1].description}
        >
        </Product>
      </div>

    </>
  )
}

export default App
