import React, {PureComponent} from 'react';
import {WritterWrapper,
    WritterItem} from '../style';
import {connect} from 'react-redux';

class Writter extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <WritterWrapper>
                {list.map((item) => {
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

const mapState = (state) => ({
    list: state.getIn(['home', 'writterList'])
})

export default connect(mapState, null)(Writter);