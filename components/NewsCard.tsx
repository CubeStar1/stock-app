"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type NewsArticle = {
    id: string;
    title: string;
    summary: string;
    url: string;
    publishedAt: string;
    source: string;
};

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.source} - {new Date(article.publishedAt).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{article.summary}</p>
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default NewsCard;