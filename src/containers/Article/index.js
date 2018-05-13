import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReactMarkDown from 'react-markdown';
import NProgress from 'nprogress';
import { getSpecifiedArticle, reduceVisit} from "../../reducers/article.redux";
import RightSideBar from "../RightSideBar";
import Tag from "../../components/Tag";
import './article.scss';

class Article extends React.PureComponent {

    componentDidMount() {
        const {articleId} = this.props.match.params;
        this.props.reduceVisit({id: articleId});
        this.props.getSpecifiedArticle(articleId);
    }

    showPostContent(articleId) {
        this.props.getSpecifiedArticle(articleId);
        this.props.history.push({pathname: `/article/${articleId}`});
    }

    componentDidUpdate() {
        NProgress.done();
    }

    componentWillUnmount() {
        NProgress.done();
    }

    tagClick(v) {
        this.props.history.push(`/tag/${v}`);
    }

    render () {
        const {title, content, date, tags} = this.props.article;
        return (
            <div className='container'>
                <div className='article'>
                    <section>
                        <h1 className='article-title'>{title ? title.trim() : ''}</h1>
                        <p className='article-date'>Post: {new Date(date).toLocaleString()}</p>
                        <ReactMarkDown source={content} escapeHtml={false} skipHtml={true} className='article-content'/>
                        <p className='article-tags'>
                            {
                                [...tags.split(',')].map((v, index) => (
                                    <Tag label={v} key={index} clickTag={(v) => this.tagClick(v)}/>
                                ))
                            }
                        </p>
                    </section>
                </div>
                {
                    tags && tags.length > 0 ? <RightSideBar tags={tags} showPopular={false}
                                         showPostContent={(id, visit) => this.showPostContent(id, visit)}
                                         articleSideBarTitle={'相关文章'}
                    /> : ''
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        article: state.articleLoad,
    };
};

export default withRouter(connect(mapStateToProps, {getSpecifiedArticle, reduceVisit})(Article));
