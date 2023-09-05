export default function Stats({itemsData}){
    if(!itemsData.length) return <p className="stats">Add Some Items MyLord</p> ; 
    const numItems = itemsData.length;
    const numPacked = itemsData.filter(item=>(item.packed)).length;
    const percentage = Math.round((numPacked/numItems * 100))
      return(
      <footer className="stats">
        <em>
          {percentage === 100 ? ("You are ready yo boom boom 💥") :
            `You have ${numItems} items on your list, and you already  packed ${numPacked} (${percentage}%)`
           }
          </em>
      </footer>) 
    }