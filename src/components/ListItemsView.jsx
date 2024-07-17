import ListItem from "./LIstItem";

const ListItemsView = ({items}) => {
    return  (
    <>
        <h5>Productos de la factura </h5>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>

            <tbody>
            {items.map((item, index) => (
                <ListItem key={index} item={item}/>
            ))}
            </tbody>
        </table>
    </>
    );
};

export default ListItemsView;
