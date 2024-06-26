import {MenuItem, Select, Typography} from '@mui/material';
import React from 'react';
import HorizontalStack from './util/HorizontalStack';

const SortBySelect = ({onSortBy, sortBy, sorts}) => {
    return (
        <HorizontalStack spacing={1}>
            <Typography
                color="text.secondary"
                className="hide-on-mobile"
                variant="subtitle2"
            >
                Sort by:
            </Typography>
            <Select
                size="small"
                value={sorts[sortBy]}
                sx={{minWidth: 150}}
                onChange={onSortBy}
            >
                {Object.keys(sorts).map((sortName, i) => (<MenuItem value={sorts[sortName]} key={i}>
                    {sorts[sortName]}
                </MenuItem>))}
            </Select>
        </HorizontalStack>);
};

export default SortBySelect;
