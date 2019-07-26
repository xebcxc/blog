import { get } from './http';


// Article
export const articleDetail = (id) => {
    return get('/blog/info', {id: id});
};


export const countArticle = () => {
    return get('/blog/count');
};

export const partArticles = ({page, size}) => {
    return get('/blog/all', {
        pageNum: page,
        pageSize: size,
        orderBy:'modify_time',
    });
};

export const achieveArticle = () => {
    return get('/blog/achieve');
};


export const increaseVisit = (id) => {
    return get('/blog/visit', {id: id});
};


export const relativeArticles = ({tag, page, size}) => {
    return get('/blog/tag', {tagName: new Array(tag).join(','), pageNum: page, pageSize: size});
};


export const doConfirmCompliment = (id, compliment) => {
    return get('/blog/compliment', {id, compliment});
};

