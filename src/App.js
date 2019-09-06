import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header/Header'
import HomePage from './views/Home';
const DetailsPage = lazy(() => import("./views/Details"));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={WaitingComponent(DetailsPage)} />
      </Switch>
    </div>
  );
}

export default App;
