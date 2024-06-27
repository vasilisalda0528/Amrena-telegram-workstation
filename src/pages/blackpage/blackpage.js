import BackButton from "pages/Topbar/topbar";


import "./styles.css";

const BlackPage = ({mainImg,bigDes, smallDes, taskTitle,itemFunc}) => {
  return (
    <div className="wallet">
      <div style={{width:'90%',paddingTop:'30px'}}>
        <BackButton />
      </div>
      <div className="wallet-picture">
        <div className="wallet-picture-token-img">
          <img className="wallet-token-img" src={mainImg} />
        </div>
      </div>
      <div className="wallet-description">
        <div className="blackpage-bigDes" >{bigDes}</div>
        <div className="blackpage-smallDes" >{smallDes}</div>
      </div>
      <div className="wallet-item-list">
        <div
          style={{
            width:'80%',
            height: "10%",
            display: "flex",
            fontWeight: "bold",
            fontSize: "24px"
          }}
        >
          {taskTitle}
        </div>
        <div className="item-list-part">
          {itemFunc()}
        </div>
      </div>
      
    </div>
  );
};

export default BlackPage;
