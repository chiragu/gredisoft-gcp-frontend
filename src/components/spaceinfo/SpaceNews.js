import useFetch from "../../hooks/useFetch";
import SkeletonNewsCard from "../skeletons/SkeletonNewsCard";

const SpaceNews = () => {

    const { data, error, isPending } = useFetch("/api/space/news/");
    return (   
        <div>
            {data  &&
                <div className="news-list">
                    {data && data.map((newsItem, i) => (
                        <a href={newsItem.url} target="_blank" rel="noreferrer" key={i}>
                            <div className="card my-card">
                                <div className="card-header my-card-header">{newsItem.title}</div>
                                <div className="card-body my-card-body">
                                    <img src={newsItem.imageUrl} alt="News"/>             
                                    <p>{newsItem.summary}</p><br/>
                                    Source: {newsItem.newsSite}
                                </div>           
                            </div> 
                        </a>
                    ))}
                </div>
            }

            {error  &&
                <div className="card my-card">
                    <div className="card-header my-card-header">Space News</div>
                    <div className="card-body my-card-body">Error: {error}</div>  
                </div>        
            }

            {isPending  &&
                <div>
                    <SkeletonNewsCard title="Space News" />
                    <SkeletonNewsCard title="Space News" />
                    <SkeletonNewsCard title="Space News" />
                </div>
            }
        </div>        
     );
}
 
export default SpaceNews;