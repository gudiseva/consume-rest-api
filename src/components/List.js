import React from 'react';
import Item from './Item';

function List(props) {

    //const itemList = ["Get milk", "Buy Amazon", "Take over the world"];
    const { itemList } = props;
    
    return (
        itemList.map( (item) => (
            /* <p>{item}</p> */
            <Item item = {item} />
        ))
    );
}

export default List;
