import React, { Component } from "react";
import api from "./api";
import PropTypes from "prop-types";

const Search = ({ value, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={value} onChange={onChange} autoFocus />
    <button type="submit">
      go!
    </button>
  </form>
);

const ArticlesGrid = props => (
  <ul className="wrapper-list">
    {props.title.map((title, index) => (
      <a href={props.url[index]} target="_blank" key={props.title[index]}>
        <ul className="articles-block">
          <h3>{title}</h3>
          <li className="article">
            <p>{props.description[index]}</p>
          </li>
        </ul>
      </a>
    ))}
  </ul>
);

ArticlesGrid.propTypes = {
  url: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired
};

class App extends Component {
  constructor(props) {
    super(props);
    // связываем любые изменения списка с ре-рендером компонента
    this.state = {
      result: null,
      searchTerm: "",
      title: null,
      description: null,
      url: null
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    this.searchByRequest(searchTerm);
    event.preventDefault();
  }

  searchByRequest(searchTerm) {
    api.fetchArticles(this.state.searchTerm).then(
      function(articles) {
        this.setState(function() {
          return { title: articles[1] };
        });
        this.setState(function() {
          return {
            description: articles[2]
          };
        });
        this.setState(function() {
          return {
            url: articles[3]
          };
        });
      }.bind(this)
    );
  }
  componentDidMount() {
    const { searchTerm } = this.state;
    this.searchByRequest(searchTerm);
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="page-content">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        <div>
          {!(this.state.title && this.state.url && this.state.description)
            ? <p className="preloadMessage">Type smth & hit enter</p>
            : <ArticlesGrid
                title={this.state.title}
                description={this.state.description}
                url={this.state.url}
              />}
        </div>
      </div>
    );
  }
}
export default App;

//
