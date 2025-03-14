
import './PlayVideo.css';
import like from '../../asset/like.png';
import dislike from '../../asset/dislike.png';
import share from '../../asset/share.png';
import save from '../../asset/save.png';
import { useEffect ,useState} from 'react';
import { API_KEY, value_converter } from '../../utils/Data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo= ()=> {
    
    const  {videoId}=useParams();

   const[apiData,setApiData]=useState(null);
   const [channelData,setChannelData]=useState(null);
   const [commentData,setCommentData]=useState([]);
 
   //fetching videos data
   const fetchVideoData= async()=>{
   const fetchVideoData_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

   
   const response=await fetch(fetchVideoData_url);
   const json=await response.json();
   setApiData(json.items[0]);
   }

    
   const fetchOtherData=async()=>{
       //fetching channel data
       const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`

       const channeldata=await fetch(channelData_url);
       const store=await channeldata.json();
       setChannelData(store.items[0]);


       //fetching comments data
   const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
   const response=await fetch(comment_url);
   const json=await response.json();
   setCommentData(json.items);
   


   }

   useEffect(()=>{
       fetchVideoData();
   },[videoId]);

   useEffect(()=>{
      fetchOtherData();
   },[apiData]);

    return(
        <div className='play-video'>
           {/*<video src={video1} controls autoPlay muted></video>*/}
           <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
           <div className='play-video-info'>
              <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} views &bull;{apiData?moment(apiData.snippet.publishedAt).fromNow():""} </p>
              <div>
                <span><img src={like} alt=""/>{apiData?value_converter(apiData.statistics.likeCount):"155"}</span>     
                <span><img src={dislike} alt=""/>2</span>    
                <span><img src={share} alt=""/>Share</span>    
                <span><img src={save} alt=""/>Save</span>    
             </div> 
           </div>
           <hr/>
           <div className='publisher'>
               <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt=""/>
             <div>
               <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"}</span>  
           </div>
             <button>Subscribe</button>
        </div>
           <div className="vid-description">
               <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
               <hr/>
               <h4>{apiData?value_converter(apiData.statistics.commentCount):"102"}</h4>

               {commentData.map((item,index)=>{
               return(
                <div key={index} className='comment'>
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alr=''/>
              <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span> 1day ago</span></h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className='comment-action'>
                      <img src={like} alt=''/>
                      <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                      <img src={dislike} alt=''/>
                  </div>
              </div>
            </div>
               )})}
                        
           </div>
        </div>
    )
}
export default PlayVideo;