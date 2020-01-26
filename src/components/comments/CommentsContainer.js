import React from 'react';
import CommentComponent from './CommentComponent';

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenDescription: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

onButtonClick() {
    this.setState({
        isOpenDescription: !this.state.isOpenDescription
    });
}

    render() {
        const {comments} = this.props;
        return (
            <div className="card">
                <button className={`btn ${this.state.isOpenDescription
                    ? 'btn-primary'
                    : 'btn-success'
                }`}
                   onClick={this.onButtonClick} 
                >
                    {this.state.isOpenDescription
                        ? 'Close'
                        : 'Open'
                    }
                </button>
                {comments.map(comment => (
                    <CommentComponent author={comment.author}
                                      commentText={comment.commentText}
                                      likes={comment.likes}
                                      key={comment.author}    
                    />
                ))}
           
            {this.state.isOpenDescription && (
                <div>{comments}</div>
            )}
             </div>
        );
    }
}

export default CommentsContainer;