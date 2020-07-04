import React, { useEffect } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./component/Topic";
import List from "./component/List";
import Recommend from "./component/Recommend";
import Writter from "./component/Writter";
import { connect } from "react-redux";
import { actionCreators } from "./store/index";

interface IProps {
  showScroll: boolean;
  changeHomeData: Function;
  changeScrollTopShow: Function;
}

const handleScrollTop = () => {
  window.scrollTo(0, 0);
};

const bindEvent = (props: IProps) => {
  window.addEventListener("scroll", props.changeScrollTopShow());
};

const Home = (props: IProps) => {
  const { showScroll } = props;
  useEffect(() => {
    props.changeHomeData();
    bindEvent(props);
    props.changeScrollTopShow();
    return () => {
      window.removeEventListener("scroll", props.changeScrollTopShow());
    };
  });
  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          className="banner-img"
          alt="not support img !!!"
          src="//upload.jianshu.io/admin_banners/web_images/4732/5d0b947b56c13a3d5e96fe8fe77c66079deed975.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        ></img>
        <Topic></Topic>
        <List></List>
      </HomeLeft>
      <HomeRight>
        <Recommend></Recommend>
        <Writter></Writter>
      </HomeRight>
      {showScroll ? (
        <BackTop onClick={handleScrollTop}>回到顶部</BackTop>
      ) : null}
    </HomeWrapper>
  );
};

const mapDispatch = (dispatch: Function) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    let top = document.documentElement.scrollTop;
    if (top > 320) {
      dispatch(actionCreators.changeScrollShow(true));
    } else {
      dispatch(actionCreators.changeScrollShow(false));
    }
  },
});

const mapState = (state: any) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

export default connect(mapState, mapDispatch)(Home);