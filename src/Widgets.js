import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
            <h2>Whats Happening</h2>

            <TwitterTweetEmbed tweetId={"1511598622873247746"} />

            <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="ConradHunter10"
                options={{ height: 400 }}
            />

            <TwitterShareButton 
                url={"https://twitter.com/ConradHunter10"}
                options={{ text: "#reactjs is amazing"}}
            />
            </div>
        </div>
    );
}

export default Widgets;
