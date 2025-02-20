import React from "react"
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import "./ProfileCard.css"

const ProfileCard = () =>{

    const ProfilePage = true;
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>

            <div className="ProfileName">
                <span>Mary Jane</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>1,250</span>
                        <span>Followers</span>
                    </div>
                    <div className="verticle-line"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Following</span>
                    </div>

                    {ProfilePage &&(
                        <>
                        <div className="verticle-line"></div>
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {ProfilePage? '': <span>
                My Profile
            </span> }
            

        </div>
    )


}

export default ProfileCard