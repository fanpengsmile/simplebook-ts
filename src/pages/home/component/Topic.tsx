import React from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

interface IProps {
  list?: any;
}

const Topic = (props: IProps) => {
  const { list } = props;
  return (
    <TopicWrapper>
      {list.map((item: any) => {
        return (
          <TopicItem key={item.get("id")}>
            <img
              className="topic-img"
              alt="no support"
              src={item.get("imgUrl")}
            ></img>
            {item.get("title")}
          </TopicItem>
        );
      })}
    </TopicWrapper>
  );
};

const mapState = (state: any) => ({
  list: state.getIn(["home", "topicList"]),
});

export default connect(mapState, null)(Topic);
