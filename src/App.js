import data from "./data";
import react,{useEffect, useState} from 'react';
import './style.css';



function App() {
  
  
  
  const [items,setItems]=useState([]);
  
  useEffect(() => {
    
    setItems(data);

  },[])
  
  
  const hello=(name)=>{
     const newData = items.filter((item) => item.name !== name );
     setItems(newData)
    //  console.log(newData);

  }


  
   return (
      <>
      <h1 id="title">BIRTHDAY REMINDER</h1>

      {items.map((person) => {
        return (
          <>
            <div class='details'>
              <h2><img src="https://media.istockphoto.com/id/1252766024/vector/cv-vector-icon-cv-editable-stroke-cv-linear-symbol-for-use-on-web-and-mobile-apps-logo-print.jpg?s=612x612&w=0&k=20&c=z_G3RD1CEO8RZInFWMS7akgiScP-rLQ4qKRxhDjkvok=" width={50}></img> {person.name}  </h2>
              <h2>{person.birthday}</h2>
              
              <button class="but" onClick={() => {hello(person.name)}}>Remove</button>
              
              </div>
              <br></br>
              <br></br>


            
     </>
        );
      })}
    </>)
}

export default App;
