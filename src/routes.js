import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TechniciansSection from './Components/TechniciansSection/TechniciansSection';
import BoilersSection from './Components/Boilers/BoilersSection';

const Routes = (props) => (
        <Switch>
            <Route path="/technicians" component={() => <TechniciansSection setHeaderCallback={props.setHeaderCallback}/>} />
            <Route path="/boilers" component={BoilersSection} />
        </Switch>
);

export default Routes;
