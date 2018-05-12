import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";
import './modifyCard.scss';

class ModifyCard extends React.PureComponent {

    clickShowPost(id, tags) {
        this.props.handleClickShowPost(id, tags);
    }

    clickRemovePost(id){
        this.props.handleClickRemovePost(id);
    }

    clickUpdatePost(id) {
        this.props.handleClickUpdatePost(id);
    }

    render() {
        const {id, title, visit, date, content, summary, tags, publish, thumb, compliment} = this.props.items;
        return (
            <div className={'modify-card-wrap'}>
                <div className={'modify-card-info-wrap'}>
                    <span>{title ? title.trim() : title}</span>
                    <span className={'modify-card-info'}>发布时间: {new Date(date).toLocaleString()} 阅读数: {visit} 点赞数: {compliment}</span>
                </div>
                <div className={'modify-card-status-wrap'}>
                    <span className={'modify-card-info'}>{publish ? '已发布' : '草稿'}</span>
                </div>
                <div className={'modify-card-btn-wrap'}>
                    <Button describe={'编辑'} btnClick={() => this.clickUpdatePost({id, title, content, summary, tags, thumb})} />
                    <Button describe={'查看'} btnClick={() => this.clickShowPost(id)} />
                    <Button describe={'删除'} btnClick={() => this.clickRemovePost(id)} />
                </div>
            </div>
        );
    }
}

ModifyCard.propTypes = {
    items: PropTypes.object.isRequired,
    handleClickShowPost: PropTypes.func.isRequired,
    handleClickRemovePost: PropTypes.func.isRequired,
    handleClickUpdatePost: PropTypes.func.isRequired
};

export default ModifyCard;
