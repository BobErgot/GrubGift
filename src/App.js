import '@mui/material';
import 'react-icons';
import 'react-icons/bi';
import 'react-icons/md';
import 'react-icons/bs';
import 'react-router-dom';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ExploreView from './components/views/ExploreView';
import PostView from './components/views/PostView';
import PrivateRoute from './components/PrivateRoute';
import CreatePostView from './components/views/CreatePostView';
import LoginView from './components/views/LoginView';
import SignupView from './components/views/SignupView';
import ProfileView from './components/views/ProfileView';
import SearchView from './components/views/SearchView';
import { initiateSocketConnection } from './helpers/socketHelper';
<Route path="/externalSearch" element={<ExternalApiSearch />} />

function App() {
    initiateSocketConnection();
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline/>
                <Routes>
                    <Route path="/" element={<ExploreView/>}/>
                    <Route path="/posts/:id" element={<PostView/>}/>
                    <Route
                        path="/posts/create"
                        element={<PrivateRoute>
                            <CreatePostView/>
                        </PrivateRoute>}
                    />
                    <Route path="/search" element={<SearchView />} />
                    <Route path="/users/:id" element={<ProfileView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/signup" element={<SignupView />} />
                    <Route path="/externalSearch" element={<ExternalApiSearch />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>);
}

export default App;
