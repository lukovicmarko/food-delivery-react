import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Spinner from '../components/Spinner'
import { getUserDetails } from '../actions/userActions'
// import { listMyOrders } from '../actions/orderActions'

const ProfileScreen = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    // const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    // const { success } = userUpdateProfile;

    // const orderListMy = useSelector((state) => state.orderListMy)
    // const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (!user || !user.name) {
                dispatch(getUserDetails('profile'));
                // dispatch(listMyOrders());
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [dispatch, history, userInfo, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        // if (password !== confirmPassword) {
        //     setMessage('Passwords do not match');
        // } else {
        //     dispatch(updateUserProfile({ id: user._id, name, email, password }));
        // }
    }
    return (
        <div>

        </div>
    )
}

export default ProfileScreen
