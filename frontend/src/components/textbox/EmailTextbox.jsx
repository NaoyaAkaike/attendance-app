
export const EmailTextbox = (props) => {

    const { label, onChange, children } = props;

    return (
        <div className="row mb-3">
            <label htmlFor={label} className="col-md-4 col-form-label text-md-end">{ label }</label>

            <div className="col-md-6">
            <input id={label} type="email" className="form-control" value={children} onChange={onChange} required autoComplete="email" autoFocus></input>

                {/* <span className="invalid-feedback" role="alert">
                    <strong> invalid mail address </strong>
                </span> */}
            </div>
        </div>
    )
}