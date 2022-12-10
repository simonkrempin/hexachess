"use client";

import React, { ReactElement } from "react";
import "./homepage.css";

const HomePage = () => {
    return (
        <div className="homepage">
            <Sidebar />
            <Selection />
        </div>
    );
}

const Sidebar = (): ReactElement => {
    return (
        <div id="sidebar">
            <Profile />
            <FriendsList />
        </div>
    );
};

const Profile = () => {
    return (
        <div className="user-profile">
            <h3>Username</h3>
            <p>Ranking</p>
        </div>
    );
};

const FriendsList = () => {
    return (
        <div className="friends-list">
            <div className="divider">
                <h3>Freunde</h3>
            </div>
        </div>
    );
};

const Selection = () => {
    return (
        <div className="selection">
            <a href="/play">Play</a>
            <a href="/rules">Rules</a>
            <a href="/scoreboard">Scoreboard</a>
            <a href="/about">About</a>
        </div>
    );
};

export default HomePage;