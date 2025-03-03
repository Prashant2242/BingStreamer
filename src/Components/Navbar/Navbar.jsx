import './Navbar.css';
import menu_icon from '../../asset/menu.png';
import logo from '../../asset/logo.png';
import search_icon from '../../asset/search.png';
import upload_icon from '../../asset/upload.png';
import more_icon from '../../asset/more.png';
import notification_icon from '../../asset/notification.png';
import profile_icon from '../../asset/prashant.jpg';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Navbar = ({ setSidebar }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            navigate(`/search/${searchQuery}`);
        }
    };

    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="" />
                <Link to='/'> <img className='logo' src={logo} alt="" /></Link>
            </div>

            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>
                    <input 
                        type="text" 
                        placeholder='Search' 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
                    />
                    <img src={search_icon} alt="" onClick={handleSearch} style={{ cursor: 'pointer' }} />
                </div>
            </div>

            <div className='nav-right flex-div'>
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className='user-icon' alt="" />
            </div>
        </nav>
    );
};

export default Navbar;
