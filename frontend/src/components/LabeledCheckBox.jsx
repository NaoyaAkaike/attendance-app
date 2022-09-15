export const LabeledCheckBox = (props) => {

    const { label } = props;

    return (
        <div className="row mb-3">
            <div className="col-md-6 offset-md-4">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="remember" id="remember" ></input>

                    <label className="form-check-label" htmlFor="remember">
                        {label}
                    </label>
                </div>
            </div>
        </div>
    )
}