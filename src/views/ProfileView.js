import {Container, Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getUser, updateUser} from "../api/users";
import {isLoggedIn} from "../helpers/authHelper";
import CommentBrowser from "../components/comment/CommentBrowser";
import ErrorAlert from "../components/ErrorAlert";
import FindUsers from "../components/FindUsers";
import Footer from "../components/Footer";
import GridLayout from "../components/GridLayout";
import Loading from "../components/Loading";
import MobileProfile from "../components/profile/MobileProfile";
import Navbar from "../components/Navbar";
import PostBrowser from "../components/post/PostBrowser";
import Profile from "../components/profile/Profile";
import ProfileTabs from "../components/profile/ProfileTabs";

const ProfileView = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [editing, setEditing] = useState(false);
    const [tab, setTab] = useState("posts");
    const user = isLoggedIn();
    const [error, setError] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    const fetchUser = async () => {
        setLoading(true);
        return await getUser(params);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const content = e.target.content.value;

        await updateUser(user, {biography: content});

        setProfile({...profile, user: {...profile.user, biography: content}});
        setEditing(false);
    };

    const handleEditing = () => {
        setEditing(!editing);
    };

    const handleMessage = () => {
        navigate("/messenger", {state: {user: profile.user}});
    };

    useEffect(() => {
        fetchUser().then(data => {
            setLoading(false);
            if (data.error) {
                setError(data.error);
            } else {
                setProfile(data);
            }
            setTab("posts");
        });
    }, [params]);

    const validate = (content) => {
        let error = "";
        if (content.length > 250) {
            error = "Bio cannot be longer than 250 characters";
        }
        return error;
    };

    const populateTabs = (profile) => {
        let tabs = [];
        if (profile) {
            tabs = {
                posts: (
                    <PostBrowser
                        profileUser={profile.user}
                        contentType="posts"
                        key="posts"
                    />), liked: (<PostBrowser
                        profileUser={profile.user}
                        contentType="liked"
                        key="liked"
                    />), comments: <CommentBrowser profileUser={profile.user}/>,
            };
        }
        return tabs;
    }

    return (
        <Container>
            <Navbar/>
            <GridLayout
                left={<>
                    <MobileProfile
                        profile={profile}
                        editing={editing}
                        handleSubmit={handleSubmit}
                        handleEditing={handleEditing}
                        handleMessage={handleMessage}
                        validate={validate}
                    />
                    <Stack spacing={2}>
                        {profile ? (<>
                            <ProfileTabs tab={tab} setTab={setTab}/>
    
                            {populateTabs(profile)[tab]}
                        </>) : (<Loading/>)}
                        {error && <ErrorAlert error={error}/>}
                    </Stack>
                </>}
                right={<Stack spacing={2}>
                    <Profile
                        profile={profile}
                        editing={editing}
                        handleSubmit={handleSubmit}
                        handleEditing={handleEditing}
                        handleMessage={handleMessage}
                        validate={validate}
                    />
                    <FindUsers
                        profile={profile}
                    />
                    <Footer/>
                </Stack>}
            />
        </Container>);
};

export default ProfileView;
