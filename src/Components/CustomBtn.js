import React from 'react';


const CustomBtn = ({ title, field, setState }) => {
    const handleClick = () => {
        if (title === '=') {
            try {
                setState(eval(field).toString());
            } catch {
                setState('Error');
            }
        } else {
            setState(field + title.toString());
        }
    };



    return(
        <button onClick={handleClick} className="my-btn">
            {title}
        </button>
    )
}
export default CustomBtn;