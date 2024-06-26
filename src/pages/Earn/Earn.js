
import Itempack from 'components/Earn component/ItemPack';

import tokenImg from '../../assets/images/Homepage/amarIcon.png'

import './styles.css'

const Earn =() =>{
return <div className='earn'>
    <div className='picture'>
        <div className='picture-token-img'>
            <img src={tokenImg}/>
        </div>
    </div>
    <div className='description'>
        Hello. Wellcome to here!!
    </div>
    <div className='item-list'>
        <Itempack/>
        <Itempack/>
    </div>

</div>
}

export default Earn;