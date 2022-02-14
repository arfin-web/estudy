import React from 'react';
import './Contact.css';
import useAuth from '../../Hooks/useAuth';

const Contact = () => {
    const { user } = useAuth();
    const contactimg = 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80';
    return (
        <>
            <div className="container-fluid contact-container p-5">
                <div className="card mb-3 border-0 rounded-3 shadow">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="fs-3">Stay With Us</p>
                                <div className="mb-3">
                                    <input type="text" value={user?.displayName} className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" value={user?.email} className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea"></textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="button" className="btn  btn-success">Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={contactimg} className="img-fluid rounded-start h-100" alt="contact" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;