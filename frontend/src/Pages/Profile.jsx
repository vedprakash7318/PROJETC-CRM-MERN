import React, { useEffect, useState } from "react";
import "./CSS/Profile.css";
import Dashboard from "../Components/Dashboard";
import axios from "axios";

const Profile = () => {
    const API_URL = import.meta.env.VITE_API_URL
    const [profile, setProfile] = useState([])

    const fetchProfile = async() => {
        try {
            const token = localStorage.getItem('token')
            const res =await axios.get(`${API_URL}/api/user/profile`, {
                headers: {
                    Authorization: token
                }
            })
            setProfile(res.data.user)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(()=>{
        fetchProfile()
    },)
    return (
        <Dashboard>
            <div className="profile-container">
                <div className="profile-card">
                    <h2 className="profile-name">{profile.name}</h2>
                    <p className="profile-role">{profile.role}</p>

                    <div className="profile-info">
                        <p><strong>Email:</strong> {profile.email}</p>
                    </div>

                    <button className="profile-btn">Edit Profile</button>
                </div>
            </div>
        </Dashboard>
    );
};

export default Profile;
