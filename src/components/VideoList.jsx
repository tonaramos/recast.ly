var VideoList = (props) => (
  <div className="video-list">
    <div className="video-list">
      {props.data.map( (video, i) => 
        <VideoListEntry video={video} key={i} />
      )}
    </div>
  </div>
);

// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  
//   render() {
//     return (
//       <div className="video-list">
//         {exampleVideoData.map( video => 
//           <VideoListEntry video={video} />
//         )}
//       </div>
//     )
//   }
// }

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;





// class TodoListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.todo}</li>
//     );

//   }

// }

// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );
