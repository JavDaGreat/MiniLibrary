import { Navigate, useNavigate } from "react-router-dom";


function BookShow({title,id,author,plot,year}){
  
  const navigate = useNavigate();
  function handleClick(){
    navigate(`/${id}`,{state:{id,title,author,plot,year}})

    

  }
return <div className="book">
  <p>{title}</p>
  <p>{author}</p>
  <button onClick={handleClick}>show more</button>
</div>

}
export default BookShow