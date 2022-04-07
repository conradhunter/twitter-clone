import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1490506052588404740/H3wRuM1P_400x400.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                    <h3>
                        Conrad Hunter {" "}
                        <span>
                            <VerifiedIcon className="post__badge" /> @conradhunter10
                        </span>
                    </h3>
                    </div>
                </div>
                <div className="post__headerDescription">
                    <p>Building a Twitter Clone using React!</p>
                </div>
            </div>
            <img className="post__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"></img>
            <div className="post__footer">
                <ChatBubbleOutlineIcon className='post__footer--icon' fontSize="small" />
                <RepeatIcon className='post__footer--icon' fontSize="small" />
                <FavoriteBorderIcon className='post__footer--icon' fontSize="small" />
                <PublishIcon className='post__footer--icon' fontSize="small" />
            </div>
        </div>
    );
}

export default Post;
