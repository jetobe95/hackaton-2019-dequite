import React from 'react';
import LandingLoadingPage from './features/landing-loading-page/presentation';
import LandingPage from './features/landing-page/presentation';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import LoadingPage from './features/loading-page/presentation';
import UserContext, { IUserContext } from './core/auth-context';
import HomePage from './features/home-page/presentation';
import SelectGenrePage from './features/select-genre-page/presentation';
import LeftSideBar from './core/presentation/components/side-bar';
import PageNotFound from './features/page-not-found/presentation';
import NavigationKeys from './core/navigation/key';
import BrowsePage from './features/browse/presentation';
import BottomPlayer from './features/bottom-player/presentation';

interface AppState {
  token: string,
  loading: boolean
}


const publicRoutes = (
  <Switch >
    <Route exact component={LandingPage} path='/' />
    <Route component={LoadingPage} path='/loading' />
    <Route component={LandingLoadingPage} path='/landing-loading' />
    <Route component={LandingLoadingPage} path='/landing-loading' />
    <Route component={PageNotFound} />
  </Switch>
)
const privateRoutes = (
  <Switch >
    <div className='app-container'>
      <LeftSideBar />
      <Route exact component={HomePage} path='/' />
      <Route component={SelectGenrePage} path='/select-genre' />
      <Route component={BrowsePage} path={NavigationKeys.browse} />
      <Route component={PageNotFound} path='/not-found' />
      <BottomPlayer />
    </div>
  </Switch>
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
      <BrowserRouter >
        {selectedRoutes}
      </BrowserRouter>
    );
  }
}
App.contextType = UserContext;


export default App;
