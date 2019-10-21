import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 0,
    totalPage: 1
});

export default (state = defaultState, action: any) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:{
            return state.set('focused', true);
        }
        case constants.SEARCH_BLUR:{
            return state.set('focused', false);
        }
        case constants.SET_HEADER_LIST:{
            return state.set('list', action.list).set('totalPage', action.totalPage);
        }
        case constants.MOUSE_ENTER:{
            return state.set('mouseIn', true);
        }
        case constants.MOUSE_LEAVE:{
            return state.set('mouseIn', false);
        }
        case constants.SWITCH_LIST:{
            let pageIndex = state.get('page') + 1;
            return state.set('page', pageIndex > state.get('totalPage') - 1 ? 0 :pageIndex);
        }
        default:
            return state;
    }
} 