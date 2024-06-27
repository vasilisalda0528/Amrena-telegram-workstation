// import Itemview from "./Itemview";
// import calender from "../../assets/images/Homepage/calender.png";
// import rightArrow from "../../assets/svg/right-arrow-3094.svg"

const Itempack = ({taskTitle, item, }) => {
  return (
    <div>
      <div className="item-list-part-description">{taskTitle}</div>
      <div className="item-list-part">
        {item()}
      </div>
    </div>
  );
};

export default Itempack;
