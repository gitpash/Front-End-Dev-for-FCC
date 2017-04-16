import React, { Component } from 'react';
import './App.css';

var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
                'Access-Control-Allow-Origin': '*', };

const DEFAULT_QUERY = 'bee';
const PATH_BASE = 'https://en.wikipedia.org//w/api.php?';
const PATH_SEARCH = 'action=opensearch&format=json&origin=*';
const PARAM_SEARCH = 'search=';

const RANDOM_A = 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=bee'
//const list = [
//   {
//     title: 'React',
//     url: 'https://facebook.github.io/react/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
// }, {
//     title: 'Redux',
//     url: 'https://github.com/reactjs/redux',
//     author: 'Dan Abramov, Andrew Clark, Pavel Luzanov',
//     num_comments: 2,
//     points: 5,
//     objectID: 1
// }, ];

function isSearched(searchTerm) {
  return function(item) {
    return !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
} }

class App extends Component {
  constructor(props) {
    super(props)
// связываем любые изменения списка с ре-рендером компонента
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    }
// bind class method inside constructor
    this.setSearchTopstories = this.setSearchTopstories.bind(this)
    this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }
  
  setSearchTopstories(result) {
    this.setState({ result });
}

fetchSearchTopstories(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${searchTerm}`, myInit)
    // fetch(`${RANDOM_A}`)
      .then(response => response.json())
      .then(result => this.setSearchTopstories(result))
      .then(result => console.log(result))
  }

 componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopstories(searchTerm);
}

onSearchChange(event) {
  this.setState({searchTerm: event.target.value})
}
  
  render() {
    const { searchTerm, result } = this.state
    if (!result) { return null; }

    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
         >
         Search
         </Search>
        <Table
          list={result.hits}
          pattern={searchTerm}
         />
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) =>
    
      <form>
            {children} <input
              type="text"
              value={value}
              onChange={onChange}
              />
      </form>
    
  


const Table = ({ list, pattern, onDismiss }) =>
    
      <div>
      { list.filter(isSearched(pattern)).map(item => 
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
        )}
      </div>
  
  

// fetchSearch(searchTerm, page) {
//   fetch(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${DEFAULT_QUERY}`)
//     .then(response => response.json())
//     .then(result => this.s(result))
// }

// setSearchFromRespond(result) {
//   const {hits, page} = result
//   const {searchKey, results} = this.state

//   const oldHits = results && results[searchKey]
//     ? results[searchKey].hits
//     : []

//   const updatedHits = [
//     ...oldHits,
//     ...hits
//   ]
//     this.setState({
//     results: {
//       ...results,
//       [searchKey]: {hits: updatedHits, page}
//     }
//   })
// }
 
export default App;
