// create a fucntion that returns a js object when called
// We'll name the createStore
// This function will return an object that contains the dispatch method, which will be accessible from stroe
function createStore(reducer){
  let state;

  // state is now accessible to dispatch

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  // We'll also need methods to retrieve data from the store
  // getState will return the state so it can be used else where in the app

  function getState(){
    return state
  }

  return {
    dispatch,
    getState
  }
}


function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}


function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

// dispatch({ type: "@@INIT" });

// store returns the createStore method, returning our dispatch
// This store contains all our application's state.
let store = createStore();

store.dispatch({ type: "@@INIT" });

let button = document.getElementById("button");



button.addEventListener("click", () => {
  store.dispatch({ type: "counter/increment" })
})