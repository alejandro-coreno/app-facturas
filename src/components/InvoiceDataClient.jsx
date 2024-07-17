import PropTypes from "prop-types"

const InvoceDataClient = ({cliente}) => {
    const { nombreCliente, apellido, direccion: { pais, city, calle, numero } } = cliente; 


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

InvoceDataClient.propTypes = {
    cliente: PropTypes.object.isRequired
}

export default InvoceDataClient