import zibunityData from "../../zibunity.json";
import {
    Container,
    Box,
    Card,
    CardContent,
    CardMedia,
    Link,
    Typography,
} from "@mui/material";
import { isZibunityPost } from "../../types/IZibPost";

const ZibunityPage: React.FC = () => {
    return (
        <Container>
            <Box className="p-8">
                <h1 className="sr-only">Zibunity</h1>
                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {zibunityData.map((post) => (
                        <Card
                            key={post.id}
                            className="rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            <Link
                                href={`/${post.postType}/${post.slug}`}
                                underline="none"
                            >
                                <CardMedia
                                    image={post.image}
                                    className="h-[400px] lg:h-[400px] w-full object-cover"
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        component="h2"
                                        className="font-bold text-primary-900 line-clamp-2"
                                    >
                                        {post.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className="text-gray-600 line-clamp-5 mt-2"
                                    >
                                        {post.content}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default ZibunityPage;
