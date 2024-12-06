import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllReviews} from "../../store/reducers/reviews.js";

const Reviews = () => {


    const {data, status} = useSelector((s) => s.reviews)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllReviews())
    }, [])

    return (
        <div>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <h2>{item.text}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default Reviews;