import React from 'react'
import PropTypes from 'prop-types'

const Button = (prop) => {
    const style = {
        color: prop.text,
        backgroundColor: prop.color,
        padding: prop.size,
        textDecoration: prop.decor,
        border: prop.border,
        fontSize: prop.fontSize,
        textAlign: prop.textAlign,
        borderRadius: prop.borderRadius,
        backgroundImage: prop.backgroundImage,
        tranform: prop.transform,
        width: prop.width,
    }

    return (
        <button onClick={prop.onClick} style = {style} className = "button">{prop.name}</button>
    )
}

Button.defaultProps = {
    name: "Button",
    color: "white",
    text: "black",
    size: "10px",
    decor: "none",
    border: "3px black solid",
    fontSize: "30px",
    textAlign: "center",
    borderRadius: "6px"
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Button