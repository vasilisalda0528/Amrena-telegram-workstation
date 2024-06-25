
import Itemview from 'components/Earn component/Itemview';

import tokenImg from '../../assets/images/Homepage/amarIcon.png'

import './styles.css'

const Earn =() =>{
return <div className='earn'>
    <div className='picture'>
        <div className='picture-flash'></div>
        <div className='picture-token-img'>
            <img src={tokenImg}/>
        </div>
    </div>
    <div className='description'>
        Hello. Wellcome to here!!
    </div>
    <div className='item-list'>
        <div className='item-list-part1'>

        </div>
        <div className='item-list-part2'>
            <Itemview detailInfo="hey you what's up" titleInfo="quest"/>
        </div>
    </div>

</div>
}

export default Earn;