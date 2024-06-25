
import './styles.css'

const Itemview = ({pimg,titleInfo,detailInfo}) =>{
    return <div className="item">
        <div className="item-img-box">
            <img className="item-img" src={pimg}/>
        </div>
        <div className="item-info">
            <div className="item-info-title">{titleInfo}</div>
            <div className="item-info-detail">{detailInfo}</div>
        </div>
        <div className="item-link-box"></div>
    </div>
}

export default Itemview