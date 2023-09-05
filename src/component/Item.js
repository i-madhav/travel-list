
export default function Item({ itemObj, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={itemObj} onChange={() => { onToggleItem(itemObj.id); }} />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
