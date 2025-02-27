import Item from "./Item";

const ItemList = ({ items, onDelete, onEdit }) => {
    if (!items || items.length === 0) {
        return <p>No items available</p>;
    }

    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </>
    );
};

export default ItemList;
