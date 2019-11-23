import React, {PureComponent} from 'react';
import {LoginWrapper, LoginBox, Input, Button} from './style';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';

interface IProps {
    login: Function,
    loginState: boolean
  }
interface IState {
    title: string,
    content: string
  }

class Login extends PureComponent<IProps, IState> {

    private account: any;
    private password: any; 

    render() {
        const {login, loginState} = this.props;
        if (loginState) {
            return <Redirect to = '/' />
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder = '账户：' ref = {(input) => {this.account = input}}/>
                        <Input placeholder = '密码：' type = 'password' ref = {(input) => {this.password = input}}/>
                        <Button
                        onClick = {() => login(this.account, this.password)}
                        >登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}

const mapState = (state: any) => ({
    loginState: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch: Function) => ({
    login(account: string, password: string) {
        dispatch(actionCreators.login(account, password));
    }
})

export default connect(mapState, mapDispatch)(Login);