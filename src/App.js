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
import PostView from './views/PostView';
import CreatePostView from './views/CreatePostView';
import ProfileView from './views/ProfileView';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import ExploreView from './views/ExploreView';
import PrivateRoute from './components/PrivateRoute';
import SearchView from './views/SearchView';
import MessengerView from './views/MessengerView';
import {initiateSocketConnection} from './helpers/socketHelper';
import ExternalApiSearch from './components/ExternalApiSearch';
import './css/globalStyles.css';

function App() {
    initiateSocketConnection();
    return (<ThemeProvider theme={theme}>
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
                <Route
                    path="/messenger"
                    element={<PrivateRoute>
                        <MessengerView/>
                    </PrivateRoute>}
                />
                <Route path="/search" element={<SearchView/>}/>
                <Route path="/users/:id" element={<ProfileView/>}/>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/signup" element={<SignupView/>}/>
                <Route path="/externalSearch" element={<ExternalApiSearch/>}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>);
}

export default App;
