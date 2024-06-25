import "./styles.css";
// import vase from "../assets/images/Homepage/vase.png";
import scroll from "../assets/images/Homepage/quest.png";
import amar_token from "../assets/images/Homepage/amarIcon.png";
import Btn from "../components/Btn";
import detail from "../assets/svg/temp.svg";
import Hide from "../assets/images/Homepage/logo.png";
import useShellGame from "hooks/useShellGame";
import Cup from "components/Cup";
const FirstPage = () => {
  const {  shuffle, userChoice,  status, cups } = useShellGame();
 
console.log(cups, 'cups');
  return (
    <div className="home">
      <div className="topbar">
        <div className="topbar-cancel">Cancel</div>
        <div className="topbar-title">
          <div className="topbar-title-amarna">Amarna</div>
          <div>Bot</div>
        </div>
        <div className="topbar-detail">
          <img src={detail} style={{ width: "28px", height: "28px" }} />
        </div>
      </div>
      <div className="info">
        <div className="info-avatar">
          <div className="info-avatar-imgbox"></div>
          <div className="info-avatar-text">Vasili</div>
        </div>
        <div className="info-quest">
          <img className="info-quest-img" src={scroll} />
          <div className="info-quest-text">Quest:Find the hidden $AMAR token</div>
        </div>
      </div>
      <div className="panel">
        <Btn title="Earn" />
        <div className="panel-score">
          <img src={amar_token} className="panel-score-img" />
          <div className="panel-score-text">4,999,999</div>
        </div>
        <Btn title="Wallet" />
      </div>
      <div className="hide">
        <img
          className="hide-img"
          src={Hide}
          onClick={shuffle}
        />
      </div>
      {/* <div className="coin" style={{ animation: hide_flag ? "coin_down 2s backwards" : "" }}>
        <div id="coin"></div>
      </div> */}
        {cups.map((cup, index) => (
            <Cup
              key={index}
              cup={cup}
              status={status}
              userChoice={userChoice}
              animation={index}
            />
          ))}
    </div>
  );
};

export default FirstPage;
