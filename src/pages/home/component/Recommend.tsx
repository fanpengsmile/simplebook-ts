import React  from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";

interface IProps {
  list?: any;
}

const Recommend = (props: IProps) => {
  const { list } = props;
  return (
    <RecommendWrapper>
      {list.map((item: any) => {
        return <RecommendItem key={item.get("id")}></RecommendItem>;
      })}
    </RecommendWrapper>
  );
};

const mapState = (state: any) => ({
  list: state.getIn(["home", "recommendList"]),
});

export default connect(mapState, null)(Recommend);
