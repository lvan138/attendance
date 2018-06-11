import React, {Component} from 'react';
import { connect } from 'react-redux'
import { LOGOUT } from '../../redux/actions/constants';

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch({type: LOGOUT})
  }
  render() {
    return (<div></div>);
  }
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => {
    dispatch({type: LOGOUT});
  }
})

Logout = connect(mapStateToProps)(Logout);
export default Logout;