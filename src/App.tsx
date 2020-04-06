import React, { useState, useEffect } from 'react';
import LandingLoadingPage from './features/landing-loading-page/presentation';
import LandingPage from './features/landing-page/presentation';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import LoadingPage from './features/loading-page/presentation';
import UserAuth from './core/auth';

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
  <>
    <Route exact component={LandingPage} path='/' />
    <Route exact component={LoadingPage} path='/loading' />
    <Route exact component={LandingLoadingPage} path='/landing-loading' />
  </>
)

class App extends React.Component<any, AppState> {
  private userAuth: UserAuth;
  constructor(props: any) {
    super(props)
    this.userAuth = new UserAuth();
    this.state = {
      token: '',
      loading: true
    };
  };

  async componentDidMount() {
    await this.getToken()
  }

  getToken = async () => {
    this.setState({ loading: true })
    const token: string = await this.userAuth.getToken()
    console.log(token)
    this.setState({ loading: false, token })
  }





  render() {
    const { loading, token } = this.state;
    const { landingPageShown } = this.userAuth;
    let selectedRoutes;

    if(loading){
      return <LandingLoadingPage></LandingLoadingPage>
    }

    if (!landingPageShown) {
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


export default App;
