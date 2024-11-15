import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Очень плохое качество',
    1: 'Плохое качество',
    1.5: 'Ниже среднего',
    2: 'Посредственное качество',
    2.5: 'Среднее качество',
    3: 'Нормальное качество',
    3.5: 'Хорошее качество',
    4: 'Очень хорошее качество',
    4.5: 'Отличное качество',
    5: 'Высшее качество',
};

function getLabelText(value) {
    return `${labels[value] || 'Нет оценки'}`;
}

export default function HoverRating() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                    {labels[hover !== -2
                        ? hover : value]}
                </Box>
            )}
        </Box>
    );
}
