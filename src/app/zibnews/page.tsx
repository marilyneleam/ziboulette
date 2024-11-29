"use server";

import {
    Box,
    Container,
    Card,
    CardContent,
    CardMedia,
    Link,
    Typography,
} from "@mui/material";
import React from "react";
import zibnewsData from "../../zibnews.json";
import { IZibnewsPost } from "@/types/IZibPost";

const Zibnews: React.FC = () => {
    const transformedData: IZibnewsPost[] = zibnewsData.map((post) => ({
        ...post,
        postType: "zibnews",
    }));

    const mainArticle = transformedData[0];
    const otherArticles = transformedData.slice(1, 5);

    return (
        <Container>
            <Box className="p-8">
                <h1 className="sr-only">Zibnews</h1>
                {/* Article Principal */}
                <Box className="mb-12">
                    <Card
                        component={Link}
                        href={`/zibnews/${mainArticle.slug}`}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl overflow-hidden"
                        sx={{ textDecoration: "none" }}
                    >
                        <Box className="relative h-[300px] md:h-[400px] overflow-hidden">
                            <CardMedia
                                component="img"
                                image={mainArticle.image}
                                alt={mainArticle.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </Box>
                        <CardContent className="p-6 flex flex-col justify-center">
                            <Typography
                                variant="h4"
                                component="h2"
                                className="font-bold mb-4"
                            >
                                {mainArticle.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                className="text-gray-600 mb-4"
                            >
                                {mainArticle.shortContent}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Grille d'articles */}
                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherArticles.map((post) => (
                        <Card
                            key={post.id}
                            className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            <Link
                                href={`/zibnews/${post.slug}`}
                                sx={{ textDecoration: "none" }}
                            >
                                <CardMedia
                                    component="img"
                                    image={post.image}
                                    alt={post.title}
                                    className="h-48 w-full object-cover"
                                />
                                <CardContent className="p-6">
                                    <Typography
                                        variant="h6"
                                        component="h2"
                                        className="font-bold mb-4 line-clamp-1 text-primary "
                                    >
                                        {post.title}
                                    </Typography>
                                    <button className="bg-primary-700 text-white m-4 px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">
                                        Read More
                                    </button>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default Zibnews;
