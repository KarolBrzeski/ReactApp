import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplate';
import Articles from 'Views/Articles';
import Twitters from 'Views/Twitters';
import Notes from 'Views/Notes';
import DetailsPage from 'Views/DetailsPage';
import { routes } from 'routes/index';

const Root = () => (
  <BrowserRouter>
    <MainTemplates>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
        <Route exact path={routes.notes} component={Notes} />
        <Route path={routes.note} component={DetailsPage} />
        <Route exact path={routes.twitters} component={Twitters} />
        <Route path={routes.twitter} component={DetailsPage} />
        <Route exact path={routes.articles} component={Articles} />
        <Route path={routes.article} component={DetailsPage} />
      </Switch>
    </MainTemplates>
  </BrowserRouter>
);

export default Root;
