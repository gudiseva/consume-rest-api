import React from 'react';

function Item(props) {

    const { item } = props;
    const [bg, setBg] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);

    const handleMouseOver = () => {
        setBg('red');
    }

    const handleMouseOut = () => {
        setBg('');
    }

    return (
        
        <div>
            <input
                type = "checkbox"
                checked = {isChecked}
                onChange = { () => setIsChecked(true) }
            />
            <label
                onMouseOver = {handleMouseOver}
                onMouseOut = {handleMouseOut}
                style = {{backgroundColor: bg}}
            >
                {item}
            </label>
        </div>
        
        /*
        <p
        onMouseOver = {handleMouseOver}
        onMouseOut = {handleMouseOut}
        style = {{backgroundColor: bg}}
        >
            {item}
        </p>
        */
    );
}

export default Item;
