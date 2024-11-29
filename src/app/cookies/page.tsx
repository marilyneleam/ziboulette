import { Container, Typography, Box } from "@mui/material";

const CookiesPolicy = () => {
    return (
        <Container maxWidth="md" className="py-8 min-h-[calc(100vh-400px)]">
            <Box component="header" className="mb-6">
                <Typography
                    variant="h3"
                    component="h1"
                    className="text-center font-bold mb-4"
                >
                    Politique des Cookies
                </Typography>
                <Typography variant="body1">
                    Cette politique explique comment nous utilisons les cookies
                    et comment vous pouvez les gérer.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Qu'est-ce qu'un cookie ?
                </Typography>
                <Typography variant="body1">
                    Un cookie est un fichier texte stocké sur votre appareil
                    pour améliorer votre expérience de navigation.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Gestion des cookies
                </Typography>
                <Typography variant="body1">
                    Vous pouvez configurer votre navigateur pour refuser les
                    cookies ou supprimer ceux existants. Cependant, cela
                    pourrait limiter certaines fonctionnalités.
                </Typography>
            </Box>

            <Box component="footer" className="text-center mt-8">
                <Typography variant="body2">
                    Pour plus d’informations, contactez-nous à{" "}
                    <a href="mailto:contact@ziboulette.fr">
                        contact@ziboulette.fr
                    </a>
                    .
                </Typography>
            </Box>
        </Container>
    );
};

export default CookiesPolicy;
