export const newTodo = todo => {
  return {
    type: 'todo:new',
    todo: todo
  }
}

export const updateTodo = todo => {
  console.log('ipate action')
  return {
    type: 'todo:update',
    todo: todo
  }
}

export const deleteTodo = todo => {
  console.log('deleteaction')
  return {
    type: 'todo:delete',
    todo: todo
  }
}
