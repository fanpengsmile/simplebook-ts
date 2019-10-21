import * as constants from './constants';
import axios from 'axios';

const setList = (data: []) => ({
    type: constants.SET_HEADER_LIST,
    list: data,
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const switchList = () => ({
    type: constants.SWITCH_LIST
})

export const getList = () => {
    return (dispatch: any) => {
        axios.get('/api/headerList.json').then(res => {
            dispatch(setList(res.data));
        }).catch(err => {
            console.log('headerList error');
        });
    }
}