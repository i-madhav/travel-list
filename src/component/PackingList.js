import { useState } from "react";
import Item from "./Item";

export default function PackingList({itemsData , onDeleteItem , onToggleItem, onClearList}){
    const[sortBy , setSortBy] = useState("input")
    let sortedItem;
    if(sortBy === "input") sortedItem = itemsData;
    if(sortBy === "description") sortedItem = itemsData.slice().sort((a,b)=>a.description.localeCompare(b.description));
    if(sortBy === "packed") sortedItem = itemsData.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    return(
      <div className="list">
      <ul>
      {sortedItem.map((item)=>
       <Item itemObj ={item} key={item.id} onDeleteItem={ onDeleteItem} onToggleItem={onToggleItem} />)}
      </ul>
  
      <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
  
        <button onClick={()=>onClearList(itemsData)}>Boom💥</button>
      </div>
    </div>
  )}
  