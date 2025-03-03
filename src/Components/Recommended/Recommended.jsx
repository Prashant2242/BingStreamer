import './Recommended.css';
import { API_KEY, value_converter } from '../../utils/Data';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Recommended=({categoryId})=>{

 const [apiData,setApiData]=useState([]);

 const fetchData=async()=>{

    const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

   const response=await fetch(relatedVideo_url);
   const json =await response.json();
   setApiData(json.items)
 }

 useEffect(()=>{
     fetchData();
 },[])


    return (
        <div className='recommended'>
            {apiData.map((item,index)=>{
                return(
                   <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                    <img src={item.snippet.thumbnails.default.url} alt=''/>
                    <div className='vid-info'>
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)}</p>
                    </div>
                </Link>
                )
            })}
            
           
        </div>
    )

        }
export default Recommended;