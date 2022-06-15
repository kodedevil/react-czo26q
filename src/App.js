import React from 'react';
import './style.css';

const queryResult = [
  { id: 1, title: 'Dribble Shot', status: 'To Do' },
  { id: 2, title: 'Usability Testing', status: 'To Do' },
  { id: 3, title: 'Hero Section Update', status: 'In Progress' },
];

let id = 4;

export default function App() {
  const [data, setData] = React.useState(queryResult);

  function handleOnClick() {
    setData(
      data.concat([
        {
          id: id++,
          title: 'New To Do',
          status: 'To Do',
        },
      ])
    );
  }

  function handleDelete(id) {
    setData(data.filter((element) => element.id !== id));
  }

  console.log('Rendering');

  return (
    <div className="container">
      <button onClick={handleOnClick}>Add</button>
      <div>
        To Do
        {data
          .filter((element) => element.status === 'To Do')
          .map((element) => {
            return (
              <Card
                title={element.title}
                onDelete={() => handleDelete(element.id)}
              />
            );
          })}
      </div>
      <div>
        In Progress
        {data
          .filter((element) => element.status === 'In Progress')
          .map((element) => {
            return (
              <Card
                title={element.title}
                onDelete={() => handleDelete(element.id)}
              />
            );
          })}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="title">{props.title}</div>
      <div>{props.description}</div>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
}
