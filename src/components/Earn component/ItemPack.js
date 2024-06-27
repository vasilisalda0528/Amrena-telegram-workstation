import Itemview from "./Itemview";
import calender from "../../assets/images/Homepage/calender.png";
import rightArrow from "../../assets/svg/right-arrow-3094.svg"

const Itempack = () => {
  return (
    <div>
      <div className="item-list-part-description">Daily tasks</div>
      <div className="item-list-part">
        <Itemview
          detailInfo="hey you what's up"
          headImg={calender}
          description={() => (
            <>
              <div className="item-info-title">Daily rewards</div>
              <div className="item-info-detail">
                <div className="item-info-detail-coin"></div>
                <div className="item-info-detail-text">+6.649.000</div>
              </div>
            </>
          )}
          tailImg={rightArrow}
          itemColor={'gray'}
        />
      </div>
    </div>
  );
};

export default Itempack;
