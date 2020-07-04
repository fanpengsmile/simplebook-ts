import React from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreators";
import { Link } from "react-router-dom";

type onePar = (id: number) => void;

interface IProps {
  list: any;
  page: number;
  getMoreList: onePar;
}

const List = (props: IProps) => {
  const { list, page, getMoreList } = props;
  return (
    <div>
      {list.map((item: any, index: number) => (
        <Link key={index} to={"/detail/" + item.get("id")}>
          <ListItem>
            <img
              className="pic"
              alt="no support"
              src={item.get("imgUrl")}
            ></img>
            <ListInfo>
              <h3 className="title">{item.get("title")}</h3>
              <p className="desc">{item.get("desc")}</p>
            </ListInfo>
          </ListItem>
        </Link>
      ))}
      <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
    </div>
  );
};

const mapState = (state: any) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"]),
});

const mapDispatch = (dispatch: any) => ({
  getMoreList(page: number) {
    dispatch(actionCreators.getMoreList(page));
  },
});

export default connect(mapState, mapDispatch)(List);
