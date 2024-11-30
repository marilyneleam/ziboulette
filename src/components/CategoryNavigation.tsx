"use client"

import * as React from "react";
import { Box, Tabs, Tab } from "@mui/material";

export default function CategoryNavigation() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className="mb-4 flex flex-center w-full ">
            <Tabs value={value} onChange={handleChange} centered >
                <Tab label="Dernières actualités" />
                <Tab label="Catégorie" />
                <Tab label="Autres" />
            </Tabs>
        </Box>
    );

}
