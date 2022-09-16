
export const NameTextbox = (props) => {

    const { label, onChange, children } = props;

    return (
        <div className="row mb-3">
            <label htmlFor={label} className="col-md-4 col-form-label text-md-end">{ label }</label>

            <div className="col-md-6">
            <input id={label} type="text" className="form-control" value={children} onChange={onChange} required autoComplete="name" autoFocus></input>

                {/* <span className="invalid-feedback" role="alert">
                    <strong> invalid name </strong>
                </span> */}
            </div>
        </div>
    )
}