import {Card} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <Box pb={3}>
            <Card className="copyright-bar">
                <Copyright/>
            </Card>
        </Box>);
};

export default Footer;
