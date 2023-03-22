import { useLocation } from "react-router-dom"

function GoodNightMoon(){
  const {state} = useLocation()
  

  return <div>
    <h1>{state.title}</h1>
    <h3>{state.author}</h3>
    <p>{state.plot}</p>
    <h4>{state.year}</h4>
  
  </div>
}
export default GoodNightMoon