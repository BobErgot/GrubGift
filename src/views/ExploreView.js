import {Container} from "@mui/material";
import React from "react";
import GridLayout from "../components/GridLayout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PostBrowser from "../components/PostBrowser";

const ExploreView = () => {
    return (
        <Container>
            <Navbar/>
            <GridLayout
                left={<PostBrowser createPost contentType="posts"/>}
                right={<Sidebar/>}
            />
        </Container>
    );
};

export default ExploreView;
