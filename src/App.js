import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsPageContainer from './components/Friends/FriendsPageContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));//lazy - nachnet podgryjatsa tolko pri perehode po nei
//import, kotorii bydet ispolzovatsa s lazy doljen bit obernyt <Suspense fallback=../> eto nije
class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) return <Preloader /> //poka inizializaziya ne bydet = true =>Preloader

    return (

      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />} >{/* Dla 'lazy'//fallback - pokazivaetsa vo vrema zagryzki */}
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} /> {/* path ykazan ne strogo (not exact)*/} 
              <Route path="/dialogs" render={() => <DialogsContainer />} /> 
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/friends" render={() => <FriendsPageContainer />} />
              <Route exact="/login" render={() => <Login />} />
              <Route path='*' render={() => <div>404 NOT FOUND</div>} />
              
            </Switch>
          </Suspense>



        </div>
      </div>


    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);//esli v zaconnekchenom componente nahoditsa route< neobhodimo obernyt connect withRoutom
