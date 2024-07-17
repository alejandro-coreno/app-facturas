
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

export default InvoceView;