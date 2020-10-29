import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection.item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const Collection = ({ collection }) => {
    console.log(collection);
    return (
        <div className='collection'>
            <h2>CATEGORY PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Collection);