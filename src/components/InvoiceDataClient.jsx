
const InvoceDataClient = ({cliente}) => {
    const { nombreCliente, apellido, direccion } = cliente; 
    const { pais, city, calle, numero } = direccion;

    return (
        <div className="col">
            <h5>Datos del cliente</h5>
            <ul className="list-group">
                <li className="list-group-item active">{ nombreCliente } { apellido }</li>
                <li className="list-group-item">{ pais } / { city }</li>
                <li className="list-group-item">{ calle } { numero }</li>
            </ul>

        </div>
    )
}

export default InvoceDataClient