import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BookDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  console.log(state);

  return (
    <div className="book-detail">
      <button onClick={handleClick} className="back-button">
        Back
      </button>

      <div
        className="book-container"
        style={{
          backgroundColor: state.color,
          boxShadow: `0px 10px 20px ${state.color}, ${state.color} 0px 6px 6px`,
        }}>
        <h1>{state.title}</h1>
        <h3>
          <b>Author:</b> {state.author}
        </h3>
      </div>
      <div style={{ padding: "16px" }}>
        <h3>Descirption:</h3>
        <p>{state.plot}</p>
      </div>

      <h4>
        <b> Release year:</b> {state.year}
      </h4>
      <button className="want-button">Oh I want this book badly</button>
    </div>
  );
}
export default BookDetail;
