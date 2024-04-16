import React from 'react'
import UserProfileInfo from '../components/UserProfileInfo';  

//user info page. later this will fetch the user's name, area etc from the database and display their info here

const UserProfile = () => {
    return (
<div>
<UserProfileInfo name="Student Name" area="Webutveckling"/>
</div>
    )
}
export default UserProfile;
