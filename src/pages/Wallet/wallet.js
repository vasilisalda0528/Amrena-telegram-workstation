import BackButton from "pages/Topbar/topbar";
import icon from "../../assets/images/Homepage/icon1024V3.png";
import Itemview from "components/Earn component/Itemview";
import binance from "../../assets/svg/binance.svg";
import check from "../../assets/images/Homepage/check.png";

import "./wallet.css";

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="wallet-picture">
        <div className="wallet-picture-token-img">
          <img className="wallet-token-img" src={icon} />
        </div>
      </div>
      <div className="wallet-description">
        <div style={{ fontSize: "40px", fontWeight: "bolder" }}>Airdrops</div>
        <div style={{ fontSize: "20px" }}>Hello. Wellcome to here!!</div>
      </div>
      <div className="wallet-item-list">
        <div
          style={{
            width:'80%',
            height: "10%",
            display: "flex",
            // alignItems: "center",
            fontWeight: "bold",
            fontSize: "24px"
          }}
        >
          Task List
        </div>
        <div className="item-list-part">
          <Itemview
            headImg={binance}
            description={() => <div className="wallet-task-list-text">Connect your BSC wallet</div>}
            tailImg={check}
            itemColor="#efb83e"
          />
        </div>
        {/* <div className="connect-btn" >
            <div><img className="wallet-binance" src={binance} /></div>
            <div className="wallet-task-list-text">Connect your BSC wallet</div>
            <div className="wallet-item-list-check"></div>
        </div> */}
      </div>
      <BackButton />
    </div>
  );
};

export default Wallet;
