import  * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const homeAction = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writterList: result.writterList
});

const moreListAction = (result, nextPage) => ({
    type:constants.GET_MORE_LIST,
    list: fromJS(result.articleList),
    nextPage: nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = homeAction(result);
            dispatch(action);
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const getMoreList = (page) => {
    return(dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then(res => {
            const result = res.data.data;
            const action = moreListAction(result, page+1);
            dispatch(action);
        }).catch(err => {
            console.log(err);
        })
    }
}


export const changeScrollShow = (show) => ({
    type: constants.CHANGE_SCROLL_SHOW,
    show: show
})