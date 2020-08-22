import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { HOME, MAP } from './routes'
import { Layout } from './components/Layout';
import { Home } from './entries/Home';
import { Map } from './entries/Map';

const App = () => (
    <Layout>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={MAP} component={Map} />
      </Switch>
    </Layout>
)

export default App;
