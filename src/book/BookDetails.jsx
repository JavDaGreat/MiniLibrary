import { useLocation } from "react-router-dom"
import { Navigate, useNavigate } from "react-router-dom";


function BookDetail(){
  const {state} = useLocation()
   
  const navigate = useNavigate();
function handleClick(){
  navigate('/')
}

  return <div style={{margin:'auto',padding:140}}>
        <button onClick={handleClick} style={{backgroundColor:'red'}}>Back</button>

    <div style={{backgroundColor: state.color,height:300,width:400,padding:50,margin:'auto'}}>  <h1>{state.title}</h1>
    <h3> <b>Author:</b>  {state.author}</h3></div>
  
   
    <p> <b>Description:</b>  {state.plot}</p>
    <h4> <b> Release year:</b> {state.year}</h4>
    <button  style={{backgroundColor:'white',color:'black'}}>Oh I want this book badly</button>


  </div>
}

export default BookDetail