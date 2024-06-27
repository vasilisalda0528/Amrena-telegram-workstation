
import './styles.css'

const Itemview = ({headImg,description,tailImg,itemColor}) =>{
    return <div className="item" style={{backgroundColor:itemColor,borderRadius:'1.5rem'}}>
        <div className='item-img-box'>
            <img className="item-img" src={headImg}/>
        </div>
        <div className="item-info"  style={{backgroundColor:itemColor}}>
            {/* <div className="item-info-title">{titleInfo}</div>
            <div className="item-info-detail">
                <div className='item-info-detail-coin'></div>
                <div className='item-info-detail-text'>{detailInfo}</div>
            </div> */}
            {description()}
        </div>
        <div className="item-link-box"  style={{backgroundColor:itemColor}}>
            {/* <div className='right-arrow'></div> */}
            <img className="right-arrow" src={tailImg}/>
        </div>
    </div>
}

export default Itemview