import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function RatingComponent({ selectedRating, setSelectedRating }) {
  function handleRating(rating) {
    setSelectedRating(rating);
  }
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     if (!selectedRating) return;
  //     setIsSubmitted(true);
  //   }
  return (
    <div className="component">
      <Star />
      <h2>How did we do?</h2>
      <RatingInfo />
      <Rating
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        handleRating={handleRating}
      />

      <Submit />
    </div>
  );
}
function Star() {
  return (
    <div className="star-div">
      <img className="img-star" src=".\images\icon-star.svg" alt="star" />
    </div>
  );
}
function RatingInfo() {
  return (
    <p className="p-rating-info">
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
  );
}
function Rating({ handleRating }) {
  return (
    <div className="buttons">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button className="rating" onClick={() => handleRating(rating)}>
          {rating}
        </button>
      ))}
    </div>
  );
}
function Submit({ handleSubmit }) {
  return (
    <Link to="/thankyou">
      <button className="submit">SUBMIT</button>
    </Link>
  );
}
