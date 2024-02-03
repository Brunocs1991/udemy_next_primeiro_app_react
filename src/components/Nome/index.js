import PropTypes from "prop-types";

const Nome = ({name, age}) => {
    return (
        <span>Welcome: {name} - Age: {age} years</span>
    )
}

Nome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default Nome
