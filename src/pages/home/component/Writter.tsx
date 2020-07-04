import React from "react";
import { WritterWrapper, WritterItem } from "../style";
import { connect } from "react-redux";

interface IProps {
  list?: [];
}
interface IState {
  list?: any;
}

const Writter = (props: IProps) => {
  const { list } = props;
  return (
    <WritterWrapper>
      {list!.map((item: any) => {
        return (
          <WritterItem key={item.get("id")}>
            <img
              className="img"
              alt="no support!!!"
              src={item.get("imgUrl")}
            ></img>
            <p className="autor">{item.get("desc")}</p>
          </WritterItem>
        );
      })}
    </WritterWrapper>
  );
};

const mapState = (state: any) => ({
  list: state.getIn(["home", "writterList"]),
});

export default connect(mapState, null)(Writter);
