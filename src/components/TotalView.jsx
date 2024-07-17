import PropTypes from "prop-types";

const TotalView = ({ total }) => {
    return (
        <div className="text-end">
            <span className="badge bg-success px-2 py-1">{total}</span>
        </div>
    );
}

TotalView.propTypes = {
    total: PropTypes.number.isRequired
}

export default TotalView;