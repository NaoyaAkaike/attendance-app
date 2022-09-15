export const Button = (props) => {

    const { label, onClick } = props;

    return (
        <button type="submit" className="btn btn-primary" onClick={onClick}>
            {label}
        </button>
    )
}