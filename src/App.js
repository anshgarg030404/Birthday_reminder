import data from "./data";
import react,{useEffect, useState} from 'react';
import './App.css';




  

function App() {
  
  
  const [items,setItems]=useState([]);
  
  useEffect(() => {
    
    setItems(data);

  },[])
  
  
  const hello=(s_No)=>{
     const newData = items.filter((item) => item.s_No !== s_No);
     setItems(newData)
    //  console.log(newData);

  }


  
   return (
      <>
      {items.map((person) => {
        return (
          <>
            <div class='details'>
              <h2>{person.s_No}</h2>
              <h2>{person.name}</h2>
              <h2>{person.birthday}</h2>
              </div>
              <button onClick={() => {hello(person.s_No)}}>Remove</button>
            
     </>
        );
      })}
    </>)
}

export default App;
