import React, {PureComponent} from 'react';
import {RecommendWrapper,
    RecommendItem} from '../style';
import {connect} from 'react-redux';

interface IProps {
    list?: any
  }
interface IState {
    list?: any
  }


class Recommend extends PureComponent<IProps, IState> {
    render() {
        const {list} = this.props;
        return (
            <RecommendWrapper>
                {list.map((item: any) => {
                    return (
                    <RecommendItem key = {item.get('id')} ></RecommendItem>
                    )
                })}
                </RecommendWrapper>
        )
    }
}

const mapState = (state: any) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);