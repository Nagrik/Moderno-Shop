import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../redux/actions/auth";
import {Redirect} from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logout())
    })
    return (
        <Redirect to='/'/>
    );
};

export default Logout;
