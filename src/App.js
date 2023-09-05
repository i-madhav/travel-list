import { useState } from "react";
import Logo from "./Logo"
import Form from "./Form"
import PackingList from "./PackingList";
import Stats from "./Stats";

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

function handleToggleItem(id){
  setItems(items => items.map(item => item.id === id ? {...item , packed:!item.packed} : item))
}

function handleClearList(items){
  //setItems(items.filter(item=> item.length > 0))
  const confirm = window.confirm("Are You Sure You Want TO Boom💥")
  if(confirm) setItems([])
}
  return(
    <div className="app">
      <Logo/>
      <Form onAddItems ={handleAddItems} />
      <PackingList itemsData ={items}  onDeleteItem ={handleDeleteItem} onToggleItem={handleToggleItem}  onClearList={handleClearList} />
      <Stats itemsData ={items} />
    </div>
  )
}



