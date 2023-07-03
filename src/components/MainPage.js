import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Errorboundary from './Errorboundary';
import Header from './Header';

export class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const {robots, searchField} = this.props;

    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const {onSearchChange, isPending} = this.props;

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <Errorboundary>
              <CardList robots={this.filterRobots()} />
            </Errorboundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
