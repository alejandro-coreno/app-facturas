
const ListItem = ({item}) => {
    return (
        
        <tr>
            <td>{item.Producto}</td>
            <td>{item.precio}</td>
            <td>{item.cantidad}</td>
        </tr>
        
    )
}

export default ListItem;