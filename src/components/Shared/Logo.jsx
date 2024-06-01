import { Link } from "react-router-dom";
import logoImg from '../../../public/images/logo.png'

const Logo = () => {
  return (
    <Link to='/'>
              <img
                 
                src={logoImg}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
  );
};
export default Logo;