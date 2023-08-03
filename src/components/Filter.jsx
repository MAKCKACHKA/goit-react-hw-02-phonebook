import { Component } from 'react';
import { FilterLabel, FilterInput } from './Styles';

class Filter extends Component {
  render() {
    return (
      <>
        <FilterLabel>Find contacts by name: </FilterLabel>
        <FilterInput
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.handleFilterChange}
        />
      </>
    );
  }
}

export default Filter;
