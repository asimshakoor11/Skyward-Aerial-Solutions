import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ newsData }) => {
    let value = 0
    return (
        <>
            <div className='' id='hero'>
                <div className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/a4.jpg)' }}>
                    <div className="section absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-12">
                        <div data-aos="slide-right">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase">
                                News
                            </h1>
                            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-lg">
                                Tag Line
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className='section'>
                <h1 className='font-bold text-4xl'>News</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {newsData.map((news, index) => (
                        <Link
                            to={`/singlenewspage/${news.id}`} key={index}>
                            <div data-aos="fade-up" data-aos-delay={value*index} key={index} className="bg-card shadow-lg rounded-lg overflow-hidden">
                                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <span className="bg-primarycolor text-white text-xs font-semibold px-2 py-1 rounded">{news.category}</span>
                                    <p className="text-muted-foreground mt-2 text-sm">{news.date}</p>
                                    <h2 className="text-card-foreground font-semibold text-lg mt-2">{news.title}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default News;
