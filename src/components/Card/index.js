import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Tag from '../Tag/index';
import './card.scss';

class Card extends React.PureComponent {
    constructor(props) {
        super(props);
        this.showPost = this.showPost.bind(this);
        this.handleImgOnLoad = this.handleImgOnLoad.bind(this);
        this.state = {showCard: false};
    }

    showPost() {
        const {articleId} = this.props;
        this.props.showPost(articleId);
    }

    handleImgOnLoad(e) {
        const {imgOnLoad} = this.props;
        if (imgOnLoad) {
            imgOnLoad(e);
        }
    }

    handleClickTag(v) {
        this.props.clickTag(v);
    }

    componentDidMount() {
        this.setState({showCard: true});
    }

    componentWillUnmount() {
        this.setState({showCard: false});
    }

    render() {
        const {thumb, title, summary, tags, date, showCardInfo} = this.props;
        return (
            <CSSTransition
                in={this.state.showCard}
                classNames="card"
                unmountOnExit
                timeout={{ enter: 500, exit: 300 }}
                onExited={() => {this.setState({showCard: false});}}
            >
                <div className={'card'}>
                    <div className={'thumb'} onClick={this.showPost}>
                            <img src={thumb} onLoad={this.handleImgOnLoad}/>
                    </div>
                    <div className={'card-container'}>
                        <div className={'card-title'} onClick={this.showPost} >
                            <span>{title}</span>
                        </div>
                        <div className={'card-content'} onClick={this.showPost} >
                            <span>{summary}</span>
                        </div>
                        <div className={'card-info'} style={{display: showCardInfo ? 'flex' : 'none'}}>
                            <div className={'card-tags'}>
                                {
                                    tags.split(',').sort().map((v, index) => (
                                        <Tag label={v} key={index} clickTag={(v) => this.handleClickTag(v)} />
                                    ))
                                }
                            </div>

                            <div className={'card-tail'}>
                                <span className={'card-date'}>{new Date(date).toDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

Card.propTypes = {
    thumb: PropTypes.string,
    showPost: PropTypes.func,
    clickTag: PropTypes.func,
    articleId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    showCardInfo: PropTypes.bool.isRequired,
    visit: PropTypes.number.isRequired,
    imgOnLoad: PropTypes.func,
};

export default Card;
