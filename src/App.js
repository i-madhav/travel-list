import { useState } from "react";

const initialItems = [
  {id:1,description:"Passport",quantity:2,packed:false},
  {id:2,description:"socks",quantity:12,packed:true},
  {id:3,description:"Madhav",quantity:2,packed:true}
]

export default function App (){
  return(
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  )
}

function Logo(){
  return <h1>🌴Far Away Home🌴</h1>
}

function Form(){
const[description,setDescription]=useState("")
const[quantity,setQuantity]=useState(1)

function handleSubmit(e){
  e.preventDefault();
  if(!description) return null;
  const newItem = {description, id:Date.now() ,packed:false , quantity};
  console.log(newItem)

  setDescription("")
  setQuantity(1)
}
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip!</h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({length:30},(_,i)=>i+1)
        .map(num=> <option value = {num} key={num}>
          {num}
        </option>)}
      </select>
     
      <input type="text" placeholder="...Likho Kuch"  value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
      <button>Add</button>
    </form>
  )
}

function PackingList(){
  return(
    <div className="list">
    <ul>
    {initialItems.map((item)=>
     <Item itemObj ={item} key={item.id}/>)}
    </ul>
  </div>
)}

function Item({itemObj}){
  return(
    <li>
      <span style={itemObj.packed ? {textDecoration:"line-through"} : {} }> 
      {itemObj.quantity} {itemObj.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats(){
  return(
  <footer className="stats">
    <em>You have X items on your list.</em>
  </footer>) 
}