/* ------------------------------ Action Value ------------------------------ */
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

/* ----------------------------- Action Creator ----------------------------- */
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

/* ------------------------------ Initial State ----------------------------- */
const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
];

/* --------------------------------- Reducer -------------------------------- */
const todos = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      console.log(state);
      return state.filter((list) => list.id !== action.payload);

    case TOGGLE_TODO:
      return state.map((list) =>
        list.id === action.payload ? { ...list, isDone: !list.isDone } : list
      );

    default:
      return state;
  }
};
export default todos;
