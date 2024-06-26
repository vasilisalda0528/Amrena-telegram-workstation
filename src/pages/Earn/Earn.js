
import Itempack from 'components/Earn component/ItemPack';

import tokenImg from '../../assets/images/Homepage/amarIcon.png'

import './earn.css'
import BackButton from 'pages/Topbar/topbar';

const Earn =() =>{
return <div className='earn'>
    
    <div className='earn-picture'>
        <div className='earn-picture-token-img'>
            <img src={tokenImg}/>
        </div>
    </div>
    <div className='earn-description'>
        Hello. Wellcome to here!!
    </div>
    <div className='earn-item-list'>
        <Itempack/>
        <Itempack/>
    </div>
    <BackButton/>
</div>
}

export default Earn;