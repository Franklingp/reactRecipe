import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" 
        style={{borderRadius: 6,
        marginBottom: '16px',
        backgroundColor: '#e3f2fd'}}>
            <span className="navbar-brand mb-0 h1">Recetas</span>
            <div className="navbar-nav ml-auto">
                <Link to="/receta" className="nav-item nav-link">Recetas</Link>
                <Link to="/agregar" className="nav-item nav-link">Agregar Receta</Link>
            </div>
        </nav>
    )
}

export default Navbar