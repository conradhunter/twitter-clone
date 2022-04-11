import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {

    return (
        <div className="feed">
            {/* {HEADER} */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* {TWEET BOX} */}

            <TweetBox />

            {/* {POSTS} */}
            <Post 
            displayName="Conrad Hunter"
            username="ConradHunter10"
            verified={true}
            text="Building a Twitter clone with ReactJS!!!!!"
            avatar="https://pbs.twimg.com/profile_images/1490506052588404740/H3wRuM1P_400x400.jpg"
            image="https://c.tenor.com/NII7Z9YQLsMAAAAC/go-for-it-you-can-do-it.gif"
            />
            <Post 
            displayName="Bob"
            username="NFTY_YTFN"
            verified={true}
            text="Lets go Baby"
            avatar="https://pbs.twimg.com/profile_images/1488686250043535360/ESiNtsam_400x400.jpg"
            image="https://media.giphy.com/media/LoCDk7fecj2dwCtSB3/giphy.gif"
            />
            <Post 
            displayName="Danny"
            username="dannyjk3_"
            verified={true}
            text="Bring back sheep game"
            avatar="https://pbs.twimg.com/profile_images/1463367885804371973/g74nrmj9_400x400.png"
            image="https://nftplazas.com/wp-content/uploads/2021/11/Wolf-Game.jpg"
            />
            <Post 
            displayName="Cameron"
            username="Camandrew123"
            verified={true}
            text="I love Lebron James, Like I LOVE HIM"
            avatar="https://pbs.twimg.com/profile_images/1490539791775010817/O_7t4EY0_400x400.jpg"
            image="https://i.ebayimg.com/images/g/HRQAAOSwD4laoXMg/s-l400.jpg"
            />

        </div>
    );
}

export default Feed;
