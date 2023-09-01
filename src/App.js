import { useState } from "react";

const initialItems = [
  {id:1,description:"Passport",quantity:2,packed:false},
  {id:2,description:"socks",quantity:12,packed:true},
  {id:3,description:"Madhav",quantity:2,packed:true}
]

export default function App (){
  const[items,setItems] = useState([])
  
function handleAddItems(item){
  setItems(items =>[...items, item])
}

function handleDeleteItem(id){
  setItems(items => items.filter(item => item.id !== id))
}

  return(
    <div className="app">
      <Logo/>
      <Form onAddItems ={handleAddItems} />
      <PackingList itemsData ={items}  onDeleteItem ={handleDeleteItem} />
      <Stats/>
    </div>
  )
}

function Logo(){
  return <h1>🌴Far Away Home🌴</h1>
}

function Form({ onAddItems}){
const[description,setDescription]=useState("")
const[quantity,setQuantity]=useState(1)

function handleSubmit(e){
  e.preventDefault();
  if(!description) return null;

  const newItem = {description, id:Date.now() ,packed:false , quantity};
  console.log(newItem)

  setDescription("")
  setQuantity(1)

  onAddItems(newItem)
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

function PackingList({itemsData , onDeleteItem}){
  return(
    <div className="list">
    <ul>
    {itemsData.map((item)=>
     <Item itemObj ={item} key={item.id} onDeleteItem={ onDeleteItem}/>)}
    </ul>
  </div>
)}

function Item({itemObj , onDeleteItem}){
  return(
    <li>
      <input type="checkbox" value={itemObj} onChange={()=>{}}/>
      <span style={itemObj.packed ? {textDecoration:"line-through"} : {} }> 
      {itemObj.quantity} {itemObj.description}
      </span> 
      <button onClick={ ()=> onDeleteItem(itemObj.id)}>❌</button>
    </li>
  )
}

function Stats(){
  return(
  <footer className="stats">
    <em>You have X items on your list.</em>
  </footer>) 
}