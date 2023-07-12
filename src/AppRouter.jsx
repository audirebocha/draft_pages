import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndividualListing from './pages/listingDetails/ListingIndividualDetails.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        
        <Route path="/listings/:id" component={IndividualListing} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
