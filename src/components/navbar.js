

function navbar (){


    return <>
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Weather App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                
                <li className="nav-item">
                    <a className="nav-link" href="/counter">Counter</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/timer">Timer</a>
                </li>
                </ul>
            </div>
            </nav>

    </>;
}

export default navbar;