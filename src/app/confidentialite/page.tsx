import { Container, Typography, Box } from "@mui/material";

const PrivacyPolicy = () => {
    return (
        <Container maxWidth="md" className="py-8 min-h-[calc(100vh-400px)]">
            <Box component="header" className="mb-6">
                <Typography
                    variant="h3"
                    component="h1"
                    className="text-center font-bold mb-4"
                >
                    Politique de Confidentialité
                </Typography>
                <Typography variant="body1">
                    Votre vie privée est importante pour nous. Cette politique
                    explique comment nous collectons, utilisons et protégeons
                    vos données personnelles.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Données collectées
                </Typography>
                <Typography variant="body1">
                    Nous collectons les données suivantes :
                    <ul>
                        <li>
                            Informations fournies volontairement : nom, e-mail,
                            etc.
                        </li>
                        <li>
                            Données collectées automatiquement : adresse IP,
                            cookies, etc.
                        </li>
                    </ul>
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Utilisation des données
                </Typography>
                <Typography variant="body1">
                    Vos données sont utilisées pour améliorer nos services, vous
                    fournir un support client et respecter nos obligations
                    légales.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Vos droits
                </Typography>
                <Typography variant="body1">
                    Vous disposez des droits suivants :
                    <ul>
                        <li>Accéder à vos données.</li>
                        <li>Demander leur rectification ou suppression.</li>
                        <li>Refuser leur traitement dans certains cas.</li>
                    </ul>
                </Typography>
            </Box>

            <Box component="footer" className="text-center mt-8">
                <Typography variant="body2">
                    Pour toute question ou demande, contactez-nous à{" "}
                    <a href="mailto:contact@ziboulette.fr">
                        contact@ziboulette.fr
                    </a>
                </Typography>
            </Box>
        </Container>
    );
};

export default PrivacyPolicy;
