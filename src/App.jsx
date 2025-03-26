import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <header><h1>Mybank</h1></header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Buy</li>
          <li>latest purchases</li>
        </ul>
      </nav> 

       <br /><br /><br />
       <div className="welcome"><h1>Welcome to Mybank !</h1></div>
      
      <div className="container">
        <div className="info">
          <h2>Purchase</h2>
          <p>You can make transactions from the form on the page "Buy" and add a description and category to it.</p>
          </div>

          <div className="info">
          <h2>Check your purchases</h2>
          <p>You can check your last transactions on the "latest transaction" page.</p>
          </div>
      </div>
      <br /><br /><br />
      <section>
        <div className='form-container'>
          <h2>Buy</h2>
          <form action="">
            <input type="text" name='description' placeholder='Description' id='description' required/>
            <input type="number" name='price' placeholder='Amount' id='price'required/>
            <input type="text" name='category' placeholder='Category' id='category'required/>
            <button>Validation</button>
          </form>
        </div>
      </section>
      <br /><br /><br />
      <footer>Mybank - 2025</footer>
    </>
    
  )
  let inputDescription = document.getElementById("description");
  let inputPrice = document.getElementById("price");
  let inputCategory = document.getElementById("category")
  localStorage.setItem("Achat", inputDescription.value, inputPrice.value , inputCategory.value);
}


export default App
