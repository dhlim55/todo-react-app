import React from 'react';
import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import { Paper,List, Container } from '@material-ui/core';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [{id:0, title: "Hello World 1", done:true },
             {id:1, title: "Hello World 2", done:false }, 
             {id:2, title: "Hello World 3", done:true }, 
             {id:3, title: "Hello World 4", done:true }, 
            ] 
    };
  }
//(1)함수추가
add = (item) => {
  const thisItems = this.state.items;
  item.id = "ID-" + thisItems.length;
  item.done = false;
  thisItems.push(item);
  this.setState({ items: thisItems });
  console.log("items: ", this.state.items);
}

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin:16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
        </Paper>
    );
      
     return (
    <div className="App">
      {/* <Todo> 컴포넌트 여러개 */}
      <Container maxWidth="md">
        <AddTodo add={this.add} />
        <div className='TodoList'>{todoItems}</div>
      </Container>
      
    </div>
  );
  }
   
}

export default App;
