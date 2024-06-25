import { Link } from 'react-router-dom';
import './styles.css'

const Button = ({ title,url }) => {
    return (
        <div className='temp-div'>
            {url?<Link to={url} style={{color:'#6F3716',textDecorationLine:'none'}}>{title}</Link>:<div style={{color:'#6F3716'}}>{title}</div>}
            
        </div>
    );
  };

export default Button