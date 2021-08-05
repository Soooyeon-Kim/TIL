import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText){
    this.setState({
      filterText: filterText,
    });
  }

  handleInStockChange(inStockOnly){
    this.setState({
      inStockOnly: inStockOnly,
    });
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;