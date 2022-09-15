
export const Card = (props) => {

    const { cardTitle, children } = props;

    return (
        <main className="py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                        
                            <div className="card-header">{cardTitle}</div>

                            <div className="card-body">
                                { children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}