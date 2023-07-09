const handleChange = (data) => {
    return (dispatch) => {
        dispatch({
            type: "handleChange",
            payload: data
        });
    };
};

export { handleChange };