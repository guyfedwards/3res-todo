const todos = (state = [], action) => {
  const todoIndex = () => {
    return state.findIndex(thisTodo => {
      return thisTodo && thisTodo.id === action.todo.id;
    })
  }

  switch (action.type) {
    case 'todo:insert':
      return todoIndex() < 0 ? [...state, action.todo] : state;

    case 'todo:update':
      var index = todoIndex();
      if (index > -1) {
        const updatedTodo = Object.assign({}, state[index], action.todo);
        return [...state.slice(0, index), updatedTodo, ...state.slice(index + 1)];
      } else {
        return state;
      }

    case 'todo:delete':
      var index = todoIndex();
      if (index > -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default todos;
