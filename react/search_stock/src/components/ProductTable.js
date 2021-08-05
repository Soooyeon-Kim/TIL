import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    const { products, filterText, inStockOnly } = this.props;
    const rows = [];
    let lastCategory = null;
		

    products.forEach((product) => {
      const { name, category, stocked } = product;
      // fiter text를 포함하지 않으면 이 product를 출력하지 않음
      if (name.indexOf(filterText) === -1) {
        return;
      }

      // inStockOnly가 true이고, product의 재고가 없다면 출력하지 않음.
      if (inStockOnly && !stocked) {
        return;
      }

      // 카테고리 체크
      if (category !== lastCategory) {
        rows.push(<ProductCategoryRow category={category} key={category} />);
      }

      // product push
      rows.push(<ProductRow product={product} key={name} />);

      // 카테고리 체크
      lastCategory = category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;