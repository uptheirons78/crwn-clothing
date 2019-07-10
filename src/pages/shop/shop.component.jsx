import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

export default class shopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    console.log(this.state);
    console.log(this.state.collections);
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={ id } { ...otherCollectionProps } />
          ))
        }
      </div>
    )
  }
}
