import './sidebar.css';
import home from '../../asset/home.png'
import game_icon from '../../asset/game_icon.png'
import automobiles from '../../asset/automobiles.png'
import sports from '../../asset/sports.png'
import entertainment from '../../asset/entertainment.png'
import tech from '../../asset/tech.png'
import music from '../../asset/music.png'
import blogs from '../../asset/blogs.png'
import news from '../../asset/news.png'
import jack from '../../asset/jack.png'
import simon from '../../asset/simon.png'
import tom from '../../asset/tom.png'
import megan from '../../asset/megan.png'
import cameron from '../../asset/cameron.png'

const Sidebar=({sidebar,category,setCategory})=>{
    return (
         <div className={`sidebar ${sidebar ?"":"smaller-sidebar"}`}>
             <div className='shortcut-links'>
                 <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                     <img src={home} alt=""/><p>Home</p>
                 </div>
                 <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                     <img src={game_icon} alt=""/><p>Gaming</p>
                 </div>
                 <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                     <img src={automobiles} alt=""/><p>Automobiles</p>
                 </div>
                 <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                     <img src={sports} alt=""/><p>Sport</p>
                 </div>
                 <div className={`side-link ${category===24?"active":""}`}onClick={()=>setCategory(24)}>
                     <img src={entertainment} alt=""/><p>Entertainment</p>
                 </div>
                 <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                     <img src={tech} alt=""/><p>Technology</p>
                 </div>
                 <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                     <img src={music} alt=""/><p>Music</p>
                 </div>
                 <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                     <img src={blogs} alt=""/><p>Blogs</p>
                 </div>
                 <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25) }>
                     <img src={news} alt=""/><p>News</p>
                 </div>
                 <hr/>         
             </div>
             <div className="subscribed-list">
                 <h3>Subscribed</h3>
                 <div className='side-link'>
                     <img src={jack} alt="" /><p>PewDiePie</p>
                 </div>
                 <div className='side-link'>
                     <img src={simon} alt="" /><p>MrBeast</p>
                 </div>
                 <div className='side-link'>
                     <img src={tom} alt="" /><p>Justin Bieber</p>
                 </div>
                 <div className='side-link'>
                     <img src={megan} alt="" /><p>5-Minute Crafts</p>
                 </div>
                 <div className='side-link'>
                     <img src={cameron} alt="" /><p>Nas Dail</p>
                 </div>
             </div>
         </div>
    )
};

export default Sidebar;
