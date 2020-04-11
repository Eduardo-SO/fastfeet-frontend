import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Deliveries from '../pages/Deliveries';
import RegisterDeliveries from '../pages/Deliveries/Registration';

import Deliverymen from '../pages/Deliverymen';
import RegisterDeliverymen from '../pages/Deliverymen/Registration';

import Problems from '../pages/Problems';

import Recipients from '../pages/Recipients';
import RegisterRecipients from '../pages/Recipients/Registration';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/deliveries" exact component={Deliveries} isPrivate />
            <Route
                path="/deliveries/register"
                component={RegisterDeliveries}
                isPrivate
            />

            <Route
                path="/deliverymen"
                exact
                component={Deliverymen}
                isPrivate
            />
            <Route
                path="/deliverymen/register"
                component={RegisterDeliverymen}
                isPrivate
            />

            <Route path="/problems" component={Problems} isPrivate />

            <Route path="/recipients" exact component={Recipients} isPrivate />
            <Route
                path="/recipients/register"
                component={RegisterRecipients}
                isPrivate
            />
        </Switch>
    );
}
