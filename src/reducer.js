const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    let { type, value, stepSize, color } = action
    if (type === "VALUE_CHANGE") {
        return {
            value: state.value + stepSize,
            color: state.color
        }
    } else if (type === "COLOR_CHANGE") {
        return {
            value: state.value,
            color: color
        }
    } else if (type === "VALUE_SET") {
        return {
            value: value,
            color: state.color
        }
    } 
    return state
}