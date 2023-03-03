import {Link, NavLink} from 'react-router-dom';


function Header(){
    return (
        <div><nav className='navBar'>
        <Link to=''> WikiCountries</Link>
    </nav>
    <Route path="//:projectId" element={<CountrytDetails />} />
    </div>
        
    )
}

export default Header