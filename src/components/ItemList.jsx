import Item from "././Item"; 
import "../styles/ItemList.css";

function ItemList( { items } ) {
    return (
        <div className="item-list">
            {items.map(item => 
                <Item key={item.id} item={item} />
            )}
        </div>
    );
}

export default ItemList;

