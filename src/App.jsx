import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { filteredTodoListState } from "./filteredTodoListState";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./todoListStats";

function App() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default App;
