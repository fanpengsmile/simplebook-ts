import  * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writterList: [],
    articlePage: 1,
    showScroll: false
});

interface Iresult {
    topicList: [],
    articleList: [],
    recommendList: [],
    writterList: [],
    type: string,
    nextPage: number,
    show: number,
    list: []
}

export default (state = defaultState, action: Iresult) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList) ,
                articleList: fromJS(action.articleList) ,
                recommendList: fromJS(action.recommendList) ,
                writterList: fromJS(action.writterList)
            });
        case constants.GET_MORE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            });
        case constants.CHANGE_SCROLL_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
} 