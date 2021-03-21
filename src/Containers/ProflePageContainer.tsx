import React from 'react';
import ProfilePage from "../Pages/ProfilePage";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile, setLoadedProduct, setProfile} from "../redux/actions/clothes";
import PlaceholderItems from "../Components/Products/ProductsItem/PlaceholderItems";
import axios from "axios";
import { withRouter } from 'react-router-dom';

const ProfileContainer = (props:any) => {
   let userId = props.match.params.userId
    const dispatch = useDispatch()

    const selectAuthor = ({clothes}:any) => clothes.author.author
    const author = useSelector(selectAuthor)

    const selectLoading = ({clothes}:any) => clothes.isLoadedProfile
    const isLoadedProfile = useSelector(selectLoading)

    React.useEffect(() => {
        // @ts-ignore
        dispatch(setLoadedProduct(false))
        axios.get(`https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes/${userId}.json`).then(({data}) => {
            dispatch(setProfile(data))
        })
    }, [])


    return (
        <>
            {isLoadedProfile ? <ProfilePage author={author}/> :  Array(10).fill(0).map((_, index) => (<PlaceholderItems key={index}/> ))}

        </>
    );
};

export default withRouter(ProfileContainer);
