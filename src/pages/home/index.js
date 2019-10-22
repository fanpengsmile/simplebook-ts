import React, {PureComponent} from 'react';
import {HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writter from './component/Writter';
import {connect} from 'react-redux';
import {actionCreators} from '../home/store/index';

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        const {showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className = 'banner-img'  alt = 'not support img !!!' src = '//upload.jianshu.io/admin_banners/web_images/4732/5d0b947b56c13a3d5e96fe8fe77c66079deed975.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writter></Writter>
                </HomeRight>
                {showScroll ? <BackTop
                onClick = {this.handleScrollTop}
                >回到顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvent();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(e) {
        let top = document.documentElement.scrollTop;
        if (top > 320) {
            dispatch(actionCreators.changeScrollShow(true));
        } else {
            dispatch(actionCreators.changeScrollShow(false));
        }
    }
});

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

export default connect(mapState, mapDispatch)(Home);