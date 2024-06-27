import Itempack from "components/Earn component/ItemPack";
import Itemview from "../../components/Earn component/Itemview";
import calender from "../../assets/images/Homepage/calender.png";
import rightArrow from "../../assets/svg/right-arrow-3094.svg"
import tokenImg from "../../assets/images/Homepage/amarIcon.png";

import "./earn.css";
// import BackButton from "pages/Topbar/topbar";
import BlackPage from "pages/blackpage/blackpage";

const Earn = () => {
  return (
    <BlackPage
      mainImg={tokenImg}
      bigDes="Hello. Wellcome to here!!"
      smallDes="Wellcome to here!!"
      itemFunc={() => (
        <div className="earn-item-list">
          <Itempack taskTitle="Daily tasks" item={()=><Itemview
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
        /> }/>
          {/* <Itempack /> */}
        </div>
      )}
    />
  );

};

export default Earn;
