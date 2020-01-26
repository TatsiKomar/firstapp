import React from 'react';

function CommentComponent(props) {
    const {author, commentText, likes} = props;
    return (
        <div>
        Author: {author}<br/>
        {commentText}<br/>
        Likes: {likes}
        </div>
    );
}

export default CommentComponent;