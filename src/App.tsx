import React from 'react';
import LandingLoadingPage from './features/landing-loading-page/presentation';
import LandingPage from './features/landing-page/presentation';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import LoadingPage from './features/loading-page/presentation';
import UserContext, { IUserContext } from './core/auth-context';
import HomePage from './features/home-page';
import SelectGenrePage from './features/select-genre-page/presentation';
import LeftSideBar from './core/presentation/components/side-bar';

interface AppState {
  token: string,
  loading: boolean
}


const publicRoutes = (
  <>
    <Route exact component={LandingPage} path='/' />
    <Route exact component={LoadingPage} path='/loading' />
    <Route exact component={LandingLoadingPage} path='/landing-loading' />
  </>
)
const privateRoutes = (
  <div className='app-container'>
    <LeftSideBar/>
    <Route exact component={HomePage} path='/' />
    <Route exact component={SelectGenrePage} path='/select-genre' />
  </div>
)

class App extends React.Component<any, AppState> {
  render() {
    const { landingPageShown, token, loadingToken }: IUserContext = this.context;
    let selectedRoutes;
    if (loadingToken) {
      return <LandingLoadingPage />
    }

    if (landingPageShown) {
      return <LandingLoadingPage></LandingLoadingPage>
    }

    if (!token) {
      selectedRoutes = publicRoutes
    } else {
      selectedRoutes = privateRoutes
    }

    return (
      <BrowserRouter>
        <Switch>
          {selectedRoutes}
        </Switch>
      </BrowserRouter>
    );
  }
}
App.contextType = UserContext;


export default App;
