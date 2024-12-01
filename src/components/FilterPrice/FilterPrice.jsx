import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector, useDispatch} from "react-redux";
import {changeFilterPrice, changePage} from "../../store/reducers/products";

export default function FilterPrice() {

    const {filter} = useSelector((state) => state.products)

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(changeFilterPrice(event.target.value))
        dispatch(changePage(1))
    };

    return (
        <Box sx={{ maxWidth: 200, color: 'skyblue' }}>
            <FormControl fullWidth sx={{ color: 'skyblue' }}>
                <InputLabel id="demo-simple-select-label" sx={{ color: 'skyblue' }}>Порядок</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.filterPrice}
                    label="Порядок"
                    onChange={handleChange}
                    sx={{
                        '& .MuiSelect-root': {
                            backgroundColor: '#f0f0f0',
                            color: 'skyblue',
                        },
                        '& .MuiMenuItem-root': {
                            color: 'skyblue',
                        },
                        '& .MuiInputBase-root': {
                            color: 'skyblue',
                        },
                        '& .MuiInput-underline:before': {
                            borderBottomColor: 'skyblue',
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'skyblue',
                        },
                    }}
                >
                    <MenuItem value={'default'}>По умолчанию</MenuItem>
                    <MenuItem value={'asc'}>По возрастанию</MenuItem>
                    <MenuItem value={'desc'}>По убыванию</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
