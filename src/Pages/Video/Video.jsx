import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';
const Video=()=>{

    const{videoId,categoryId}=useParams();//from url video id and category id will save here.

    return(
        <div className='Play-container'>
        <PlayVideo  videoId={videoId} />
        <Recommended categoryId={categoryId}/>
        </div>
    )
}

export default Video;