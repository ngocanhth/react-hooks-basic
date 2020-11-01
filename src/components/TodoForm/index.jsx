import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}
function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState("");
    function handleValueChange (e) {
       console.log( e.target.value);
       setValue(e.target.value);
    }
    function hanleSubmit(e){
        // event reloading browser
        e.preventDefault();
        if(!onSubmit) return;
        const fromValue = {
            title: value,
        }
        onSubmit(fromValue);
        setValue('');
    }
    return (
        <form onSubmit = {hanleSubmit}>
            <input type="text" value = {value} onChange = {handleValueChange}/>
        </form>
    );
}

export default TodoForm;