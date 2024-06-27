// import BackButton from "pages/Topbar/topbar";
import icon from "../../assets/images/Homepage/icon1024V3.png";
import Itemview from "components/Earn component/Itemview";
import binance from "../../assets/svg/binance.svg";
import check from "../../assets/images/Homepage/check.png";
import BlackPage from "pages/blackpage/blackpage";
import Itempack from "components/Earn component/ItemPack";

import "./wallet.css";

const Wallet = () => {
  return (
    <BlackPage
      mainImg={icon}
      bigDes="Airdrops"
      smallDes="Hello. Wellcome to here!!"
      itemFunc={() => (
        <div className="item-list-part">
          <Itempack
            taskTitle="Tasks list"
            item={() => (
              <Itemview
                headImg={binance}
                description={() => <div className="wallet-task-list-text">Connect your BSC wallet</div>}
                tailImg={check}
                itemColor="#efb83e"
              />
            )}
          />
        </div>
      )}
    />
  );
};

export default Wallet;
