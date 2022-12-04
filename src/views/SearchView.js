import {Container, Stack} from "@mui/material";
import React from "react";
import GridLayout from "../components/GridLayout";
import Navbar from "../components/Navbar";
import PostBrowser from "../components/post/PostBrowser";
import Sidebar from "../components/Sidebar";

const SearchView = () => {
    return (
        <Container>
            <Navbar/>
            <GridLayout
                left={<Stack spacing={2}>
                    <PostBrowser createPost contentType="posts"/>
                </Stack>}
                right={<Sidebar/>}
            />
        </Container>);
};

export default SearchView;
