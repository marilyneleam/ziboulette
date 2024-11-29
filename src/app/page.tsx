import {
	Container,
    Box,
    Card,
    CardContent,
    CardMedia,
    Link,
    Typography,
} from "@mui/material";
import zibnewsData from "../zibnews.json";
import zibunityData from "../zibunity.json";

export default function Home() {
    const limitedZibnews = zibnewsData.slice(0, 5);
    const limitedZibunity = zibunityData.slice(0, 4);

    return (
        <Container className="block">
            <h1 className="sr-only">Accueil</h1>
            <Box className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Section Zibnews - pleine largeur en tablette, 2/3 en desktop */}
                <Box className="lg:col-span-2 flex flex-col gap-6">
                    {/* Titre de la section Zibnews */}
                    <Typography
                        variant="h4"
                        component="h2"
                        className="font-bold text-primary"
                    >
                        Zibnews
                    </Typography>

                    {/* Article featured */}
                    <Card className="rounded-lg shadow-md overflow-hidden h-[300px] lg:h-[400px] relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                        <Link
                            href={`/zibnews/${limitedZibnews[0].slug}`}
                            underline="none"
                            className="block h-full relative"
                        >
                            {/* Image et gradient */}
                            <CardMedia
                                image={limitedZibnews[0].image}
                                className="h-full w-full object-cover absolute inset-0"
                            />
                            {/* Gradient visible sur tous les écrans */}
                            <Box className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75" />

                            {/* Contenu (Titre et texte court) */}
                            <CardContent className="absolute bottom-0 left-0 text-white z-10">
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    className="font-bold text-white text-xl md:text-2xl line-clamp-2"
                                >
                                    {limitedZibnews[0].title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className="text-gray-200 mt-2 line-clamp-3"
                                >
                                    {limitedZibnews[0].shortContent}
                                </Typography>
                            </CardContent>
                        </Link>
                    </Card>

                    {/* Derniers articles Zibnews */}
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                        {limitedZibnews.slice(1).map((post) => (
                            <Card
                                key={post.id}
                                className="rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
                            >
                                <Link
                                    href={`/zibnews/${post.slug}`}
                                    underline="none"
                                >
                                    <CardMedia
                                        image={post.image}
                                        className="h-[160px] lg:h-[140px] w-full object-cover"
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            className="font-bold text-primary-900 line-clamp-2"
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className="text-gray-600 line-clamp-3 mt-2"
                                        >
                                            {post.shortContent}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </Box>
                </Box>

                {/* Section Zibunity - pleine largeur en tablette, 1/3 en desktop */}
                <Box className="lg:col-span-1 flex flex-col gap-6">
                    {/* Titre de la section Zibunity */}
                    <Typography
                        variant="h4"
                        component="h2"
                        className="font-bold text-primary"
                    >
                        Zibunity
                    </Typography>

                    {/* Liste des Zibunity */}
                    <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        {limitedZibunity.map((post) => (
                            <Card
                                key={post.id}
                                className="rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
                            >
                                <Link
                                    href={`/zibnews/${post.slug}`}
                                    underline="none"
                                >
                                    <CardMedia
                                        image={post.image}
                                        className="h-[160px] lg:h-[140px] w-full object-cover"
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            className="font-bold text-primary-900 line-clamp-2"
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className="text-gray-600 line-clamp-3 mt-2"
                                        >
                                            {post.content}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
