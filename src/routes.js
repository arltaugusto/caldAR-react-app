import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TechniciansSection from './Components/Sections/TechniciansSection/TechniciansSection';
import BuildingsSection from './Components/Sections/BuildingsSection/BuildingsSection';
import AppointmentsSection from './Components/Sections/AppointmentsSection/AppointmentsSection';
import BoilersSection from './Components/Sections/BoilersSection/BoilersSection';
import BoilerTypesSection from './Components/Sections/BoilerTypesSection/BoilerTypesSection';
import CustomersSection from './Components/Sections/CustomersSection/CustomersSection';

const Routes = (props) => (
        <Switch>
            <Route path="/technicians" component={() => <TechniciansSection setHeaderTitle={props.setHeaderCallback}/>} />
            <Route path="/boilers" component={() => <BoilersSection setHeaderTitle={props.setHeaderCallback}/>} />
            <Route path="/boilerTypes" component={() => <BoilerTypesSection setHeaderTitle={props.setHeaderCallback}/>} />
            <Route path="/buildings" component={() => <BuildingsSection setHeaderTitle={props.setHeaderCallback}/>} />
            <Route path="/customers" component={() => <CustomersSection setHeaderTitle={props.setHeaderCallback}/>} />
            <Route path="/appointments" component={() => <AppointmentsSection setHeaderTitle={props.setHeaderCallback}/>} />
        </Switch>
);

export default Routes;
