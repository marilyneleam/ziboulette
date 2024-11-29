import { Container, Typography, Box } from "@mui/material";

const Accessibility = () => {
    return (
        <Container maxWidth="md" className="py-8 min-h-[calc(100vh-400px)]">
            <Box component="header" className="mb-6">
                <Typography
                    variant="h3"
                    component="h1"
                    className="text-center font-bold mb-4"
                >
                    Déclaration d’Accessibilité
                </Typography>
                <Typography variant="body1">
                    Nous nous engageons à rendre notre site accessible à tous.
                    Cependant, certaines parties ne sont pas encore totalement
                    conformes.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    État de conformité
                </Typography>
                <Typography variant="body1">
                    Actuellement, notre site est{" "}
                    <strong>partiellement conforme</strong> aux standards
                    d'accessibilité. Certaines fonctionnalités sont en cours
                    d’amélioration.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Contactez-nous
                </Typography>
                <Typography variant="body1">
                    Si vous rencontrez des problèmes d’accès, contactez-nous à{" "}
                    <a href="mailto:accessibilite@ziboulette.fr">
                        accessibilite@ziboulette.fr
                    </a>
                    .
                </Typography>
            </Box>

            <Box component="footer" className="text-center mt-8">
                <Typography variant="body2">
                    Dernière mise à jour : {new Date().toLocaleDateString()}
                </Typography>
            </Box>
        </Container>
    );
};

export default Accessibility;
