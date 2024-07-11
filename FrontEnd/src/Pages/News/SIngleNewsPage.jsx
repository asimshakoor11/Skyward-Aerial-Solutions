import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SIngleNewsPage = ({ newsData }) => {
    const { id } = useParams();
    const news = newsData.find((newsItem) => newsItem.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!news) {
        return <p>News item not found</p>;
    }
    return (
        <div className='section'>
            <div className="single-news-page">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <span className="bg-primarycolor text-white text-xs font-semibold px-2 py-1 rounded">
                        {news.category}
                    </span>
                    <p className="text-muted-foreground mt-2 text-sm">{news.date}</p>
                    <h2 className="text-card-foreground font-semibold text-lg mt-2">{news.title}</h2>
                    <p className="mt-4">{news.desc} 
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SIngleNewsPage