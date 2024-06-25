import "./styles.css";
import vase from "../assets/images/Homepage/vase.png";
import scroll from "../assets/images/Homepage/quest.png";
import amar_token from "../assets/images/Homepage/amarIcon.png";
import Btn from "../components/Btn";
import detail from "../assets/svg/temp.svg";
import Hide from "../assets/images/Homepage/logo.png";
import { useState } from "react";
const FirstPage = () => {
  const [holdClick, setHoldClick] = useState(false)
  const static_vases = [
    <img src={vase} className="vase-img-small" style={{left:'90px'}}/>,
    <img src={vase} className="vase-img-small" style={{left:'180px'}}/>,
    <img src={vase} className="vase-img-small" style={{left:'270px'}}/>,
  ]
  const dynamic_vases = [
    <img src={vase} className="vase-img-small" style={{left:'90px'}} id="cup_animation_1"/>,
    <img src={vase} className="vase-img-small" style={{left:'180px'}} id="cup_animation_1"/>,
    <img src={vase} className="vase-img-small" style={{left:'270px'}} id="cup_animation_1"/>,
  ]
 const init = () =>{
  return static_vases.map(vase => vase)
 }
 const move = () => {
  return dynamic_vases.map(vase=>vase)
 }
 const handle = () => {
  let temp, retrieve;
  if(holdClick){
    temp = move();
    retrieve = setTimeout(()=>setHoldClick(false),1000)
  }
  else{
    clearTimeout(retrieve)
    temp = init();
  }
  return temp;
 }
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
          onClick={()=>setHoldClick(true)}
        />
      </div>
      {/* <div className="coin" style={{ animation: hide_flag ? "coin_down 2s backwards" : "" }}>
        <div id="coin"></div>
      </div> */}
       {handle()}
    </div>
  );
};

export default FirstPage;
