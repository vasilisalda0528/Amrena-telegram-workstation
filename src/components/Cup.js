// import { useCheat } from "../Routes";
// import logo from "../../assets/images/Homepage/vase.png"
import './styles.css'

export default function Cup({ cup, status, userChoice }) {
  // const { showJackpot } = useCheat();
  const showJackpot =true
  return (
    <div
      onClick={() => userChoice(cup.isJackpot)}
      className={`${cup.position} absolute duration-200 cursor-pointer`}
    >
      {cup.isJackpot &&
        (status === "ready" || status === "over" || showJackpot) && (
          <div className="m-auto bg-yellow-400 h-4 w-4 sm:h-8 sm:w-8 rounded-full absolute bottom-0 inset-x-0 z-0 shadow-lg"></div>
        )}
      
        <div className="vase-img-small" id='cup_animation_1'></div>
      
    </div>
    )
}