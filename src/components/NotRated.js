const NotRated = () =>{
    const style = {
        color: "rgb(230, 48, 8)",
        fontSize: "20px",
        fontWeight: "bold",
        background: "rgb(70, 74, 82)",
        margin: "auto",
        width: "50%",
        textAlign: "center",
        border: "red solid 2px",
        padding: "5px",
        height: "35px",
    }

    return(
        <div style={style}>
            You have not rated this character yet
        </div>
    )
}

export default NotRated