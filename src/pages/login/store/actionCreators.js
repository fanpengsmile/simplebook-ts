import axios from 'axios';
import * as contants from './constants';

export const changeLogin = (login) => ({
    type: contants.CHANGE_LOGIN,
    login: login
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin(true));
            } else {
                alert('密码错误');
            }
        }).catch(err => {
            console.log(err);
        })
    }
}