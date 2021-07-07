import { useState, useReducer, useCallback } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            };
        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
            default:
                return state;
    }
}

function useInputs(initalForm) {
    const [form, setForm] = useState(initalForm);
    const onChange = useCallback(e  => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]:value }));
    }, []);
    const reset = useCallback(() => setForm(initalForm), [initalForm]);

    return [form, onChange, reset];
};

export default useInputs;