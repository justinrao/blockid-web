
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import Main from './components/Layout'
import * as host from './Data/Host'

function mapStateToProps(state) {
  let {Permissions, ...profile} = state.profile
  host.setSession(state.session)
  Permissions = Permissions || {Users: {}}
  return {
    users: state.users
  }

}

function dispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

 const App = connect(mapStateToProps, dispatchToProps)(Main)

 export default App
