import {Button, Card, Stack, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {getUserComments} from '../../api/posts';
import {isLoggedIn} from '../../helpers/authHelper';
import Comment from './Comment';
import Loading from '../Loading';
import SortBySelect from '../SortBySelect';

const CommentBrowser = (props) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [end, setEnd] = useState(false);
    const [sortBy, setSortBy] = useState('-createdAt');
    const user = isLoggedIn();

    const fetchComments = async () => {
        setLoading(true);
        const newPage = page + 1;
        setPage(newPage);
        return await getUserComments({id: props.profileUser._id, query: {sortBy},});
    };

    useEffect(() => {
        fetchComments().then((comments) => {
            setComments(comments);
            setLoading(false);
        });
    }, [sortBy]);

    const handleBackToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth',});
    };

    const sorts = {
        '-createdAt': 'Latest', createdAt: 'Earliest',
    };

    const handleSortBy = (e) => {
        const newSortName = e.target.value;
        let newSortBy;

        Object.keys(sorts).forEach((sortName) => {
            if (sorts[sortName] === newSortName) {
                newSortBy = sortName;
            }
        });

        setComments([]);
        setPage(0);
        setEnd(false);
        setSortBy(newSortBy);
    };

    return (
        <Stack spacing={2}>
            <Card>
                <SortBySelect onSortBy={handleSortBy} sortBy={sortBy} sorts={sorts}/>
            </Card>
            {loading ? (<Loading/>) : (<>
                {comments && comments.map(
                    (comment) => (<Comment key={comment._id} comment={comment} profile/>))}
    
                <Stack py={5} alignItems="center">
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        className="end-of-page"
                        gutterBottom
                    >
                        {comments.length > 0 ? (<>All comments have been viewed</>) : (<>No
                            comments available</>)}
                    </Typography>
                    <Button
                        variant="text"
                        className="yellow-btn"
                        size="small"
                        onClick={handleBackToTop}
                    >
                        Back to top
                    </Button>
                </Stack>
            </>)}
        </Stack>);
};

export default CommentBrowser;
