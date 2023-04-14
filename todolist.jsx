export const ToDoList = () => {
   const list = [
    "сделать домашку"
    "уборка дома"
   ];
    return (
<>
<div>
    <input  onChange={(e) => setText(e.target.value)} />
    <button>+</button>
    <p>{text}</p>
    <ul>
{list.map((item)=>(
<li>(item)</li>
    ))}
    </ul>
</div>
</>

    );
};