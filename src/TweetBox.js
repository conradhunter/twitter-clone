import { Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css"
import {Avatar} from "@mui/material"

const Tweetbox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1490506052588404740/H3wRuM1P_400x400.jpg" />
                    <input placeholder="What's happening?" type="text"></input>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"></input>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;

