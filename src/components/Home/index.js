import { Link, NavLink } from 'react-router-dom';
import './index.scss';

const Home = () => 
{

    return(
        <div className="container home-page">

            <div className="text-zone">
            <h1 className='Home'>Gun Violence & Household Income Data</h1>
            </div>
            <form>
            <label>User Name:
          <input className='username' type="text"/>
          </label>
          <label>Password:
          <input className='password'type="password"/>
          </label>
                <Link to="/database" className ='flat-button'>Submit</Link>
                </form>
                
            
        </div>
    )
}

export default Home