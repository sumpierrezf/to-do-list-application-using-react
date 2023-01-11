import React, {useState} from "react";



//create your first component
const Home = () => {

	
	const [tarea,setTarea] = useState("");
	const [list,setList] = useState([]);


	/*const listItems = list.map((item) =>
	<li key={item.toString()}>
	{item}
  </li>
	);*/

	const DeleteItems = (indexItem) => {
		setList((prevState) =>
		  prevState.filter((listItems, index) => index !== indexItem)
		);
	  };

	function enviarDatos(e) {
		e.preventDefault()
		setList([...list, tarea]);
		setTarea("")
	}
	console.log(list);

	return (
		<>
		<div className="card container d-flex mt-3">
  			<div className="card-body">
  				<input type="text" className="input m-1 w-75" value={tarea} id="exampleInput" aria-describedby="inputHelp" onChange={(e)=>{setTarea(e.target.value)}} placeholder="No hay tareas, añadir tareas"/>
				<button type="submit" className="btn btn-primary btn-sm" onChange={(e)=>{setList(e.target.value)}} onClick={enviarDatos}>Agregar</button>
  			</div>
			<div className="to-do-list d-flex">
			  <ul>{list.map((item, index) => (
        <li key={index}>
          {item}
          <button className="btn" onClick={() => DeleteItems(index)}>
            <i className="fas fa-trash-alt" />
          </button>
        </li>
      ))}</ul>
			</div>
		</div>
		
		</>
	);
};

export default Home;
