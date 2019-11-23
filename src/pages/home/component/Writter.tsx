import React, {PureComponent} from 'react';
import {WritterWrapper,
    WritterItem} from '../style';
import {connect} from 'react-redux';

interface IProps {
    list?: [],
  }
interface IState {
    list?: any
  }

class Writter extends PureComponent<IProps, IState> {
    render() {
        const {list} = this.props;
        return (
            <WritterWrapper>
                {list!.map((item: any) => {
                    return (
                <WritterItem key = {item.get('id')}>
                    <img className = 'img' alt = 'no support!!!' src = {item.get('imgUrl')}></img>
                    <p className = 'autor'>{item.get('desc')}</p>
                </WritterItem>
                    )
                })}
            </WritterWrapper>
        )
    }
}

const mapState = (state: any) => ({
    list: state.getIn(['home', 'writterList'])
})

export default connect(mapState, null)(Writter);