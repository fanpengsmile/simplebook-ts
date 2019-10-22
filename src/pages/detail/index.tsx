import React, {PureComponent} from 'react';
import {DetailWrapper, Header, Content} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';

type onePar = (id: number) => void

interface IProps {
    title: string,
    content: string,
    params: any,
    getDetail: onePar,
    match: any
  }
interface IState {
    title: string,
    content: string
  }

class Detail extends PureComponent<IProps, IState> {
    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML = {{__html: content}}/>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        console.log(this.props)
        const id = this.props.match.params.id;
        this.props.getDetail(id);
    }
}

const mapState = (state: any) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch: any) => ({
    getDetail(id: number) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(Detail);