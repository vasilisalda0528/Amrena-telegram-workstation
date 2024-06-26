
import './styles.css'

const Itemview = ({pimg,titleInfo,detailInfo}) =>{
    return <div className="item">
        <div className="item-img-box item-bg" style={{borderRadius:"1.5rem 0 0 1.5rem"}}>
            <img className="item-img" src={pimg}/>
        </div>
        <div className="item-info item-bg">
            <div className="item-info-title">{titleInfo}</div>
            <div className="item-info-detail">{detailInfo}</div>
        </div>
        <div className="item-link-box item-bg" style={{borderRadius:"0 1.5rem 1.5rem 0"}}></div>
    </div>
}

export default Itemview