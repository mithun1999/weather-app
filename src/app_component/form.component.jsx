import React from 'react';
import './form.style.css';

const Form = (props)=>{
    return(
        <div className="container">
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" name="city" className="form-control" placeholder="Enter city" autoComplete="off" />
                </div>
                <div className="col-md-3">
                    <input type="text" name="country" className="form-control" placeholder="Enter country" autoComplete="off" />
                </div>
                <div className="col-md-3 mt-md-0 py-2 text-md-left">
                    <button className="btn btn-warning">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    );
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please enter your city and country
        </div>
    );
}

export default Form;