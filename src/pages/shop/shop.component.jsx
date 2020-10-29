import React from "react";
import { Route } from 'react-router-dom';


import CollectionsOverview from '../../components/collections-overview/collections-overview.componenet';
import Collection from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={Collection} />
  </div>
)


export default ShopPage;