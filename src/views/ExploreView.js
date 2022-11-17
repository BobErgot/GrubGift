import {Container} from "@mui/material";
import React from "react";
import GridLayout from "../GridLayout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const ExploreView = () => {
    return (
        <Container>
            <Navbar/>
            <GridLayout
                right={<Sidebar/>}
            />
        </Container>
    );
};

export default ExploreView;
