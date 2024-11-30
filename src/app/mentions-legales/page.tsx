import { Container, Typography, Box } from "@mui/material";

const MentionsLegales = () => {
    return (
        <Container maxWidth="md" className="py-8">
            <Box component="header" className="mb-6">
                <Typography
                    variant="h3"
                    component="h1"
                    className="text-center font-bold mb-4 pb-4"
                >
                    Mentions Légales
                </Typography>
                <Typography variant="body1">
                    Bienvenue sur notre page de mentions légales. Vous y
                    trouverez toutes les informations relatives à l’utilisation
                    du site Ziboulette.fr
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Éditeur du site
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>Nom de l’entreprise :</strong>{" "}
                    Ziboulette
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>Forme juridique :</strong> Projet Scolaire
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>Siège social :</strong> 28 place de la Bourse, 75002 Paris
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>SIRET :</strong> 000 000 000 00000
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>Téléphone :</strong> 01 23 45 67 89
                </Typography>
                <Typography variant="body1">
                    <strong>Email :</strong>{" "}
                    <a href="mailto:contact@ziboulette.fr">
                        contact@ziboulette.fr
                    </a>
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Directeur de la publication
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>Nom :</strong> [Nom du responsable]
                </Typography>
                <Typography variant="body1">
                    <strong>Fonction :</strong> [Ex : Gérant / Président]
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Hébergeur du site
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>Nom :</strong> [Nom de l’hébergeur, ex : OVH]
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>Adresse :</strong> [Adresse complète]
                </Typography>
                <Typography variant="body1" className="mb-1">
                    <strong>Téléphone :</strong> [Numéro de l’hébergeur]
                </Typography>
                <Typography variant="body1">
                    <strong>Site Web :</strong>{" "}
                    <a href="[URL de l’hébergeur]">[URL de l’hébergeur]</a>
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
                    Tous les contenus présents sur le site (textes, images,
                    graphismes, logo) sont la propriété de Ziboulette, sauf
                    mention contraire. Toute reproduction ou utilisation sans
                    autorisation préalable est strictement interdite.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Limitation de responsabilité
                </Typography>
                <Typography variant="body1">
                    Ziboulette s’efforce de fournir des informations exactes sur
                    le site. Cependant, aucune garantie n’est donnée quant à
                    l’exactitude ou à l’exhaustivité des informations.
                    L’utilisation des contenus du site est sous votre propre
                    responsabilité.
                </Typography>
            </Box>

            <Box component="section" className="mb-6">
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold mb-2"
                >
                    Politique de confidentialité
                </Typography>
                <Typography variant="body1" className="mb-2">
                    Le site peut collecter des données personnelles dans le
                    cadre de formulaires ou de cookies. Conformément au RGPD,
                    vous disposez d’un droit d’accès, de modification et de
                    suppression de vos données. Pour exercer ce droit,
                    contactez-nous à l’adresse suivante :{" "}
                    <a href="mailto:contact@ziboulette.fr">
                        contact@ziboulette.fr
                    </a>
                    .
                </Typography>
                <Typography variant="body1">
                    Vous pouvez également configurer vos préférences en matière
                    de cookies directement depuis votre navigateur.
                </Typography>
            </Box>
        </Container>
    );
};

export default MentionsLegales;
