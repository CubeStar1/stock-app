"use client";

import React from 'react'
import NewsCard from '@/components/NewsCard'

type NewsArticle = {
    id: string;
    title: string;
    summary: string;
    url: string;
    publishedAt: string;
    source: string;
}

function News({symbol}: {symbol: string}) {
    const [news, setNews] = React.useState<NewsArticle[]>([])
    React.useEffect(() => {
        // Fetch news articles from your API
        fetch(`http://127.0.0.1:8000/stock/${symbol}/news`).then(res => res.json()).then(setNews)
    }, [symbol])

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article: NewsArticle) => (
                <NewsCard key={article.id} article={article} />
            ))}
        </div>
    )
}

export default News