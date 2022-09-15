export const LinkButton = (props) => {

    const { label, onClick } = props;

    return (
        <a className="btn btn-link" href="#" onClick={onClick}>
            {label}
        </a>
    )
}