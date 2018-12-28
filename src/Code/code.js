const ramda1 = `
      const List = items => <ul>{items}</ul>
      const Item = todo => <li key={todo.id}>{todo.text}</li>
      const getTodos = R.prop('todos')
      const TodoList = R.compose(List, R.map(Item), getTodos)
      const props = {todos: [{id: 1, text: 'foo'}, {id: 2, text: 'bar'}]}
      render(<TodoList {...props} />);
  `

const codes=[
              {code:ramda1,step:{step1:'step1',step2:'step2',step3:'step3'}},
              {code:ramda1,step:{step1:'step1',step2:'step2',step3:'step3'}},
            ];

export {codes};