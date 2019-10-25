import axios from 'axios';
import * as contants from './constants';

export const changeLogin = (login: any) => ({
    type: contants.CHANGE_LOGIN,
    login: login
});

export const login = (account: string, password: string) => {
    return (dispatch: any) => {
        axios.get('/api/login.json?account=' + account + '&passwordqqq=' + password).then(res => {
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