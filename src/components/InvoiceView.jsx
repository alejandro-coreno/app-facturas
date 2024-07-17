import PropTypes from "prop-types"


const InvoceView = ({ id , nombre }) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">{ id }</li>
                 <li className="list-group-item">{ nombre }</li>
            </ul>
        </>
    )
}

InvoceView.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired
}

export default InvoceView;