import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TechniciansSection from './Components/Sections/TechniciansSection/TechniciansSection';
import BuildingsSection from './Components/Sections/BuildingsSection/BuildingsSection';
import AppointmentsSection from './Components/Sections/AppointmentsSection/AppointmentsSection';
import BoilersSection from './Components/Sections/BoilersSection/BoilersSection';
import BoilerTypesSection from './Components/Sections/BoilerTypesSection/BoilerTypesSection';
import CustomersSection from './Components/Sections/CustomersSection/CustomersSection';

const Routes = () => (
        <Switch>
            <Route path="/technicians" component={TechniciansSection} />
            <Route path="/boilers" component={BoilersSection} />
            <Route path="/boilerTypes" component={BoilerTypesSection} />
            <Route path="/buildings" component={BuildingsSection} />
            <Route path="/customers" component={CustomersSection} />
            <Route path="/appointments" component={AppointmentsSection} />
        </Switch>
);

export default Routes;
