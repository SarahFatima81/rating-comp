export default function ThankYou({ selectedRating }) {
  return (
    <div className="component ty-component">
      <Image />
      <CustRating selectedRating={selectedRating} />
      <h1>Thank you!</h1>
      <TyNote />
    </div>
  );
}
function Image() {
  return (
    <img
      className="img-ty"
      src=".\images\illustration-thank-you.svg"
      alt="thankyou"
    />
  );
}
function CustRating({ selectedRating }) {
  return (
    <div className="cust-rating">
      <p>You selected {selectedRating} out of 5</p>
    </div>
  );
}
function TyNote() {
  return (
    <p className="ty-note">
      We appreciate you taking the time to give a rating. If you ever need more
      support, don't hesitate to get in touch!
    </p>
  );
}
