import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import Authcontext from './Store/AuthContext';

function App() {
  const authCtx = useContext(Authcontext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
          <AuthPage />
        </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path='/profile'>
          <UserProfile />
        </Route>
        )}
        <Route path='*'>
          <Redirect path= '/' />
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;
