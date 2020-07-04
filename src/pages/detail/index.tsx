import React, { useEffect } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store/index";

type onePar = (id: number) => void;

interface IProps {
  title: string;
  content: string;
  params: any;
  getDetail: onePar;
  match: any;
}

const Detail = (props: IProps) => {
  const { title, content } = props;
  useEffect(() => {
    console.log(props);
    const id = props.match.params.id;
    props.getDetail(id);
  });
  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </DetailWrapper>
  );
};

const mapState = (state: any) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch = (dispatch: any) => ({
  getDetail(id: number) {
    dispatch(actionCreators.getDetail(id));
  },
});

export default connect(mapState, mapDispatch)(Detail);
