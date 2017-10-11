import React from 'react';
import PrimaryHeader from '../ui/PrimaryHeader';
import { Switch,Route } from 'react-router-dom';
import AppHomePage from '../pages/AppHomePage';
const PrimaryLayout = () => (
<div>
 <PrimaryHeader/>
 <main>
 <Switch>
    <Route path="/app" exact component={AppHomePage}/>
 </Switch>

 </main>
</div>

)

export default PrimaryLayout;