import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/ui/Header/Header'
import Loader from './components/ui/Loader/Loader'
import HomePage from './views/Home';
import DetailsPage from './views/Details';
import fetchNasaImages from './store/nasa-images/actions';
import { connect } from 'react-redux';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchNasaImages("Earth"));
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.isLoading && <Loader />}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={DetailsPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoading: store.loader.isLoading
  }
}
export default connect(mapStateToProps)(App);

