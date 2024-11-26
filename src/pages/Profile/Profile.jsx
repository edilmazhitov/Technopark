import React from 'react';
import  {logOut} from "../../store/reducers/user";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
const Profile = () => {


    const dispatch = useDispatch()

    const user = useSelector(s => s.user)


    const { status, error } = useSelector(state => state.user);


    if (status === 'idle') {
        return <Navigate to='/'/>
    }

    return (
        <div>
            <h1>Профиль</h1>
            {user.status === 'success' && <button onClick={() => dispatch(logOut())}>Выйти из акаунта</button>}
        </div>
    );
};

export default Profile;