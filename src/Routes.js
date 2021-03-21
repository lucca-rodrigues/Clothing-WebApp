import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './Pages/Home';
import ClothingNew from './Pages/ClothingNew';
import ClothingDetails from './Pages/ClothingDetails';
import ClothingEdit from './Pages/ClothingEdit';

const Routes = () => {
  return (
    <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/clothing/new" exact component={ClothingNew}/>
        <Route path="/clothing/:id" exact component={ClothingDetails}/>
        <Route path="/edit-clothing/:id" exact component={ClothingEdit}/>
    </Switch>
  );
}

export default Routes;
