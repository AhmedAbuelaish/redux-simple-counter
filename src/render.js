const render = (state) => {
    const counterDOM = document.getElementById('counterValue')
    console.log(state.value, state.color)
    counterDOM.innerHTML = state.value
    counterDOM.style.color = state.color
}