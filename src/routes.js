import React from 'react';
import TechniciansSection from "./Components/TechniciansSection/TechniciansSection";
import BoilersSection from "./Components/Boilers/BoilersSection";
import { Switch, Route } from 'react-router-dom';

const Routes = (props) => {
    console.log(props.setHeaderCallback);
    return (
        <Switch>
            <Route path="/technicians" component={() => <TechniciansSection setHeaderCallback={props.setHeaderCallback}/>} />
            <Route path="/boilers" component={BoilersSection} />
        </Switch>
    )
}

export default Routes;
