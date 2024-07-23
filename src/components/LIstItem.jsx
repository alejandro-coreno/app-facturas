import PropTypes from "prop-types";

const ListItem = ({item, handlerDeletedItem}) => {
    return (
        
        <tr>
            <td>{item.producto}</td>
            <td>{item.precio}</td>
            <td>{item.cantidad}</td>
            <td><button onClick={() => handlerDeletedItem(item.id)} className="btn btn-danger">Eliminar</button></td>
        </tr>
        
    )
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired
}



export default ListItem;