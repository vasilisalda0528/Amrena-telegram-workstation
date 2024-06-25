
import React, { useEffect, useState,  } from "react";

import {  
  
  // useNavigation 
} from "react-router-dom";

import "./styles.css";
// import vase from "../assets/images/Homepage/vase.png";
import amar_token from "../assets/images/Homepage/amarIcon.png";
import Hide from "../assets/images/Homepage/logo.png";
import scroll from "../assets/images/Homepage/quest.png";
import detail from "../assets/svg/temp.svg";
import Btn from "../components/Btn";

function FirstPage (props) {
  const [holdClick, setHoldClick] = useState(false);
  const [droped, setDroped] = useState(false);
  // const [goEarn, setGoEarn] = useState(false);
  let retrieveDrop;
  let temp, retrieveHold;
  const static_vases = [
    <div className="vase-img-small" style={{ left: "90px" }}></div>,
    <div className="vase-img-big" style={{ left: "175px" }}></div>,
    <div className="vase-img-small" style={{ left: "270px" }}></div>
    // <img src={vase} className="vase-img-big" style={{left:'175px'}}/>,
    // <img src={vase} className="vase-img-small" style={{left:'270px'}}/>,
  ];
  const dynamic_vases = [
    <div className="vase-img-small" style={{ left: "90px" }} id="cup_1"></div>,
    <div className="vase-img-big" style={{ left: "175px" }} id="cup_2"></div>,
    <div className="vase-img-small" style={{ left: "270px" }} id="cup_3"></div>
    // <img src={vase} className="vase-img-big" style={{left:'180px'}} id="cup_animation_1"/>,
    // <img src={vase} className="vase-img-small" style={{left:'270px'}} id="cup_animation_1"/>,
  ];
  const init = () => {
    return static_vases.map((vase) => vase);
  };
  const move = () => {
    return dynamic_vases.map((vase) => vase);
  };
  const handle = () => {
    if (droped) {
      clearTimeout(retrieveDrop);
      temp = move();
      retrieveHold = setTimeout(() => setHoldClick(false), 1000);
      retrieveDrop = setTimeout(() => setDroped(false), 1000);
    } else {
      clearTimeout(retrieveHold);
      clearTimeout(retrieveDrop);
      temp = init();
    }
    return temp;
  };

  

  useEffect(() => {
  console.log('input params:->', props);
    if (holdClick) retrieveDrop = setTimeout(() => setDroped(true), 2500);
  }, [holdClick]);
  useEffect(() => {
    if (droped) {
      retrieveHold = setTimeout(() => setHoldClick(false), 1000);
      retrieveDrop = setTimeout(() => setDroped(false), 1000);
    }
  }, [droped]);
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
        <Btn title="Earn" url='/earn' />
        <div className="panel-score">
          <img src={amar_token} className="panel-score-img" />
          <div className="panel-score-text">4.999.999</div>
        </div>
        <Btn title="Wallet" />
      </div>
      <div className="hide">
        <img className="hide-img" src={Hide} onClick={!holdClick ? () => setHoldClick(true) : null} />
      </div>
      <div className="coin" style={{ animation: holdClick ? "coin_down 2s backwards" : "" }}>
        <div id="coin"></div>
      </div>
      {droped ? handle() : init()}
      {/* {goEarn ? (<Link to="/earn" />) : <></>} */}
    </div>
  );
};

export default FirstPage;
