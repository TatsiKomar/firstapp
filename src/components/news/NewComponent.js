import React from 'react';
import CommentsContainer from '../comments/CommentsContainer';

class NewComponent extends React.Component {
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
        const {newsInfo: {title, description, comments}} = this.props;
        return (
            <div className="card new_card">
                <div className="new_header centered">
                    <p>{title}</p>
                    <button className={`btn ${this.state.isOpenDescription
                        ? 'btn-info'
                        : 'btn-success'
                    }`}
                            onClick={this.onButtonClick}
                    >
                        {this.state.isOpenDescription
                            ? 'Close'
                            : 'Open'
                        }
                    </button>
                </div>
                {this.state.isOpenDescription && (
                    <div>{description}</div>
                )}
                <CommentsContainer comments={comments}/>
            </div>
        );
    }
}

export default NewComponent;
