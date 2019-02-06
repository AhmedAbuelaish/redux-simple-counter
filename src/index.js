const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const valueButton = document.getElementsByClassName('valueChange')
for (let i = 0; i< valueButton.length; i++) {
    valueButton[i].addEventListener('click', e => dispatch({ type: "VALUE_CHANGE" , stepSize: parseInt(valueButton[i].value, 10)}))
}
const colorButton = document.getElementById('counterColor')
colorButton.addEventListener('change', e => dispatch({ type: "COLOR_CHANGE" , color: colorButton.value}))
const setValueField = document.getElementById('setValue')
setValueField.addEventListener('change', e => dispatch({ type: "VALUE_SET" , value: parseInt(setValueField.value, 10)}))