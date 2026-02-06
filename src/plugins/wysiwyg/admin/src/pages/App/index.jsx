/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from '@strapi/strapi/admin';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';
import { getStrapiTheme } from '../../utils/getStrapiTheme';

getStrapiTheme();

const App = () => {
  return (
    <div className="prose prose-xl dark:prose-invert">
      <Routes>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route component={Page.Error} />
      </Routes>
    </div>
  );
};

export default App;
