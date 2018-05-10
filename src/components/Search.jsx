class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }
  
  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }
  
  render () {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.searchInput} onChange={(event) => this.handleChange(event)} />
        <button className="btn hidden-sm-down" onClick={() => this.props.onClick( this.state.searchInput )}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}


// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down" onClick={() => props.onClick('david bowie')}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
