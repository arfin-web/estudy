import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut, admin } = useAuth();
    console.log(user);
    const history = useHistory()
    const signIn = () => {
        history.push('/signin')
    }
    const signUp = () => {
        history.push('/signup')
    }

    return (
        <>
            <div className="container-fluid bg-dark text-muted">
                <div className="container py-1">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                            <p>Phone: +88017255</p>
                        </div>
                        <div className="col-lg-6 col-md-4 col-6">
                            <p>Email: projectt373@gmail.com</p>
                        </div>
                        {
                            user ? <div className="col-lg-4 col-md-4 col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    Dashboard
                                </button>

                                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header overflow-hidden">
                                        <p className="offcanvas-title fs-4 text-success" id="offcanvasExampleLabel">Dashboard</p>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="card">
                                        <img src={user?.photoURL} className="card-img-top img-fluid img-thumbnail rounded-circle w-50" alt="profile" />
                                        <div className="card-body overflow-hidden">
                                            <p className="card-title fs-4 text-dark">{user?.displayName}</p>
                                            <p className="card-text">{user?.email}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            {
                                                admin && <>
                                                    <li className="list-group-item overflow-hidden">
                                                        <NavLink className="nav-link text-success" to="/makeadmin"> Make Admin</NavLink>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden">
                                                        <NavLink className="nav-link text-success" to="/addcourse"> Add Course</NavLink>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden">
                                                        <NavLink className="nav-link text-success" to="/managecourse"> Manage Course</NavLink>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden">
                                                        <NavLink className="nav-link text-success" to="/orders"> All Orders</NavLink>
                                                    </li>
                                                </>
                                            }
                                            <li className="list-group-item overflow-hidden">
                                                <NavLink className="nav-link text-success" to="/myorders"> My Orders</NavLink>
                                            </li>
                                            <li className="list-group-item overflow-hidden">
                                                <NavLink className="nav-link text-success" to="/makereviews"> Give Review</NavLink>
                                            </li>
                                            <li className="list-group-item overflow-hidden">
                                                <NavLink className="nav-link text-success" to="/pay"> Payment</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button onClick={logOut} type="button" className="btn btn-success btn-sm fw-bold">Sign Out</button>
                            </div>
                                : <div className="col-lg-4 col-md-4 col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button onClick={signIn} type="button" className="btn btn-success btn-sm fw-bold">Sign In</button>
                                    <button onClick={signUp} type="button" className="btn btn-success btn-sm fw-bold">Sign Up</button>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home"><h3 className="fw-bold text-success logo">E-LEARNING</h3></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/courses">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;