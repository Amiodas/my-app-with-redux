import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state.todosR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      <div>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error.message}</h3>}
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h4>{todo.id}</h4>
                <h3>{todo.title}</h3>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default Todos;

// 1. step1 - Install axios
// 2. step2 - constants define
// 3. step3 - async action creator
// 4. step4 - reducer
// 5. step5 - creat store
// 6. step6 - provide store
// 7. step7 - use store
