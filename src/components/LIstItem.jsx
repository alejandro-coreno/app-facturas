import PropTypes from "prop-types";

const ListItem = ({item}) => {
    return (
        
        <tr>
            <td>{item.producto}</td>
            <td>{item.precio}</td>
            <td>{item.cantidad}</td>
        </tr>
        
    )
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired
}



export default ListItem;