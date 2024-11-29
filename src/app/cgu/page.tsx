import { Container, Typography, Box } from "@mui/material";

const TermsOfUse = () => {
    return (
        <Container maxWidth="md" className="py-8 min-h-[calc(100vh-400px)]">
            <Box component="header" className="mb-6">
                <Typography
                    variant="h3"
                    component="h1"
                    className="text-center font-bold mb-4"
                >
                    Conditions Générales d'Utilisation
                </Typography>
                <Typography variant="body1" className="text-center">
                    En utilisant notre site, vous acceptez les présentes
                    conditions générales d'utilisation.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Accès au site
                </Typography>
                <Typography variant="body1">
                    L'accès à notre site est gratuit, mais peut nécessiter une
                    connexion Internet. Vous êtes responsable de la
                    compatibilité de vos équipements.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Propriété intellectuelle
                </Typography>
                <Typography variant="body1">
                    Tous les contenus du site sont protégés par le droit
                    d'auteur et ne peuvent être reproduits sans autorisation.
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

export default TermsOfUse;
