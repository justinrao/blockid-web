
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import Main from './components/Layout'
import * as host from './data/host'

function mapStateToProps(state) {
  let Permissions = state.Permissions
  host.setSession(state.session)
  Permissions = Permissions || {Users: {}}
  console.log(state.idtypes);
  return {
    users: state.users || [],
    session: state.session,
    permissions: Permissions,
    idtypes: state.idtypes,
    provinces: state.provinces
  }

}

function dispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

 const App = connect(mapStateToProps, dispatchToProps)(Main)

 export default App
