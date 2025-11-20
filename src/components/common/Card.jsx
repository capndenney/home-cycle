import "./card.css";
import Spacer from "./Spacer";

const Card = ({ viewType, children }) => {
  return (
    <>
      <div className={`card ${viewType}`}>{children}</div>
      {/* <Spacer /> */}
    </>
  );
};

export default Card;
