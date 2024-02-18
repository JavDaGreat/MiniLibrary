import { Navigate, useNavigate } from "react-router-dom";

function BookShow({ title, id, author, plot, year, color }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/${id}`, { state: { id, title, author, plot, year, color } });
  }
  return (
    <div
      className="book"
      style={{
        backgroundColor: color,
        boxShadow: `0px 10px 20px ${color}, ${color} 0px 6px 6px`,
      }}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p>
        by <b>{author}</b>
      </p>
      <button onClick={handleClick}>show more</button>
    </div>
  );
}
export default BookShow;
