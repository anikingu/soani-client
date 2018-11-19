import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AnimeDetail from './anime-detail';

const Main = () => (
    <Switch>
        <Route exact path="/" component={AnimeDetail} />
    </Switch>
)

export default Main;