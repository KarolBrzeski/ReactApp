import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplate';
import Articles from 'Views/Articles';
import Twitters from 'Views/Twitters';
import Notes from 'Views/Notes';

const Root = () => (
  <BrowserRouter>
    <MainTemplates>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/twitters" component={Twitters} />
        <Route path="/articles" component={Articles} />
      </Switch>
    </MainTemplates>
  </BrowserRouter>
);

export default Root;
