import React from 'react';

const Item = ({ item, onDelete, onEdit }) => {
    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <p>ID: {item.id}</p>
            <p>Description: {item.description}</p>
            <button onClick={() => onEdit(item.id)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
};

export default Item;
