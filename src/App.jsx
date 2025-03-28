import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function store(){
    window.addEventListener('beforeunload', function (event) {
      event.preventDefault();
  });
  let inputDescription = document.getElementById("description");
  let inputPrice = document.getElementById("price");
  let inputCategory = document.getElementById("category");
  let Purchase = [inputDescription,inputPrice,inputCategory];
  localStorage.setItem("Achat", JSON.stringify(Purchase[0].value,Purchase[1].value,Purchase[2].value));
  document.getElementById('recalledtext').innerHTML = localStorage.getItem('Achat');
}

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
          <p>You can make transactions from the form and add a description and a category to it.</p>
          </div>

          <div className="info">
          <h2>Check your purchases</h2>
          <p>You can check your last transactions on the bottom of the page.</p>
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
            <button onClick={store}>Validation</button>
          </form>
        </div>
        Dernier achat :<span id="recalledtext"></span>
      </section>
      <br /><br /><br />
      <footer>Mybank - 2025</footer>
    </>
    
  )
}


export default App
