import React from 'react';
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
            <Post />
        </div>
    );
}

export default Feed;
