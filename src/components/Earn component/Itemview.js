
import './styles.css'

const Itemview = ({pimg,titleInfo,detailInfo}) =>{
    return <div className="item">
        <div className="item-img-box item-bg">
            <img className="item-img" src={pimg}/>
        </div>
        <div className="item-info item-bg">
            <div className="item-info-title">{titleInfo}</div>
            <div className="item-info-detail">
                <div className='item-info-detail-coin'></div>
                <div className='item-info-detail-text'>{detailInfo}</div>
            </div>
        </div>
        <div className="item-link-box item-bg">
            <div className='right-arrow'></div>
        </div>
    </div>
}

export default Itemview