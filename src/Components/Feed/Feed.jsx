import './Feed.css';
import { Link, useParams } from 'react-router-dom';
import { API_KEY, value_converter } from '../../utils/Data';
import moment from 'moment';
import { useState, useEffect } from 'react';

const Feed = ({ category }) => {
  const { searchQuery } = useParams(); // Get search query from URL
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let videoList_url = "";

    if (searchQuery) {
      // Fetch search results if a search query exists
      videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&type=video&key=${API_KEY}`;
    } else {
      // Fetch trending videos if no search query
      videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    }

    const response = await fetch(videoList_url);
    const json = await response.json();
    setData(json.items);
  };

  useEffect(() => {
    fetchData();
  }, [category, searchQuery]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link 
          to={`/video/${item.snippet.categoryId}/${item.id?.videoId || item.id}`} 
          className='card' 
          key={index}
        >
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {item.statistics ? value_converter(item.statistics.viewCount) : "N/A"} views &bull; 
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
