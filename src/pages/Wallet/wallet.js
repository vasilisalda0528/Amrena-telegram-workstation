import icon from "../../assets/images/Homepage/icon1024V3.png";
import binance from "../../assets/svg/binance.svg"

import "./wallet.css";

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="wallet-picture">
        <div className="wallet-picture-token-img">
          <img className="wallet-token-img" src={icon}/>
        </div>
      </div>
      <div className="wallet-description">
        <div style={{fontSize:'40px',fontWeight:'bolder'}}>Airdrops</div>
        <div style={{fontSize:'20px'}}>Hello. Wellcome to here!!</div>
      </div>
      <div className="wallet-item-list">
        <div
          style={{
            color: "white",
            height: "10%",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "24px"
          }}
        >
          Task List
        </div>
        <div style={{ borderRadius: "1.5rem", backgroundColor: "#efb83e", width: "100 %", height: "80px", display:'flex', justifyContent:'space-around',alignItems:'center' }}>
            <div><img className="wallet-binance" src={binance} /></div>
            <div className="wallet-task-list-text">Connect your BSC wallet</div>
            <div className="wallet-item-list-check"></div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
