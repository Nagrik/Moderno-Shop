import React from 'react';
import ProfilePage from "../Pages/ProfilePage";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../redux/actions/clothes";
import PlaceholderItems from "../Components/Products/ProductsItem/PlaceholderItems";

const ProfileContainer = () => {
    const dispatch = useDispatch()

    const selectAuthor = ({clothes}:any) => clothes.author.author
    const author = useSelector(selectAuthor)

    const selectLoading = ({clothes}:any) => clothes.isLoadedProfile
    const isLoadedProfile = useSelector(selectLoading)

    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchProfile())
    }, [])


    return (
        <>
            {isLoadedProfile ? <ProfilePage author={author}/> :  Array(10).fill(0).map((_, index) => (<PlaceholderItems key={index}/> ))}

        </>
    );
};

export default ProfileContainer;
