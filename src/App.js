import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/ui/Header/Header'
import Loader from './components/ui/Loader/Loader'
import HomePage from './views/Home';
import { connect } from 'react-redux';
const DetailsPage = lazy(() => import("./views/Details"));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.isLoading && <Loader />}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={WaitingComponent(DetailsPage)} />
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

