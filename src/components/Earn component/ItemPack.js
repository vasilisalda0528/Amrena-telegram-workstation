import Itemview from "./Itemview";
import calender from "../../assets/images/Homepage/calender.png"

const Itempack =( ) => {
    return <div >
        <div className="item-list-part-description">
            part
        </div>
        <div className="item-list-part">
            <Itemview detailInfo="hey you what's up" titleInfo="quest" pimg={calender}/>
        </div>
    </div>
}


export default Itempack;