import {fromJS, List} from "immutable";

import * as Constants from '../../utils/Constants';

import * as request from '../../utils/axios/api';
import * as Article from "./constants";

export const articleDetail = (article) => {
    return {
        type: Article.ARTICLE_DETAIL,
        article,
    };
};

const initialState = fromJS({
    ARTICLE_DETAIL: {},
});

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case Article.ARTICLE_DETAIL:
            return state.set(Article.ARTICLE_DETAIL, action.article);
        default:
            return state;
    }
};

export function fetchArticle(id) {
    return request.articleDetail(id).then(res => {
        if (res.code === Constants.SUCCESS_CODE) {
            return res.data;
        } else {
            return {};
        }
    });
}
