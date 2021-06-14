import {Switch, Route, Router} from 'wouter'
import Profile from './components/profileForm'
import Register from './components/registerForm'




const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    )
  }
  
  export default Routes