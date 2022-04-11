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
            <div className="post__header--container">
                <div className="post__avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                        <h3>
                            {displayName} {" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedIcon className="post__badge" />} @{username}
                            </span>
                        </h3>
                        </div>
                    </div>
                </div>
            </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            <img className="post__image" src={image}></img>
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
