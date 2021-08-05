import React from 'react';

class ProductRow extends React.Component {
  render() {
    const { name, price, stocked } = this.props.product;

    return (
      <tr>
        <td style={stocked ? {} : { color: 'red' }}>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;