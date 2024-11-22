import React from 'react';
import  {logOut} from "../../store/reducers/user";
import {useDispatch, useSelector} from "react-redux";
const Profile = () => {


    const dispatch = useDispatch()

    const user = useSelector(s => s.user)

    return (
        <div>
            <h1>Профиль</h1>
            {
                user.status === 'success' && <button onClick={dispatch(logOut())} style={{
                    width: '100px',
                height: '50px',
                background: 'black'
                }}>Выйти из акаунта</button>
            }
        </div>
    );
};

export default Profile;