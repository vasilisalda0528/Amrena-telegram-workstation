
import './styles.css'

const Itemview = ({headImg,description,tailImg,itemColor}) =>{
    return <div className="item" style={{backgroundColor:itemColor,borderRadius:'1.5rem'}}>
        <div className='item-img-box'>
            <img className="item-img" src={headImg}/>
        </div>
        <div className="item-info" >
            {description()}
        </div>
        <div className="item-link-box" >
            <img className="item-img" src={tailImg}/>
        </div>
    </div>
}

export default Itemview