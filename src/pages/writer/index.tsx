import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

interface IProps {
  loginState: boolean;
}

const Write = (props: IProps) => {
  const { loginState } = props;
  if (loginState) {
    return <div>写文章</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

const mapState = (state: any) => ({
  loginState: state.getIn(["login", "login"]),
});

export default connect(mapState, null)(Write);
