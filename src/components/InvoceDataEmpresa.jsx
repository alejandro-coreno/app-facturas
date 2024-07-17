const InvoceDataEmpresa = ({empresa }) => {
    return (
        <div className="col">
            <h5>Datos de la empresa</h5>
            <ul className="list-group">
                <li className="list-group-item active">{empresa.nombreEmpresa}</li>
                <li className="list-group-item">{empresa.fiscalia}</li>
            </ul>
        </div>
    );
};

export default InvoceDataEmpresa;
