import React, { useState} from 'react';

export default function Login(props) {
    const [state, setState] = useState();

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.login(state.username, state.password);
    }

    const onChange = (evt) => {
        setState({ ...state, [evt.target.id]: evt.target.value });
    }

    return (
        <form onSubmit={onSubmit} onChange={onChange} className="container">
            <input type="text" className="form-control" placeholder="username" id="username" />
            <input type="text" className="form-control" placeholder="password" id="password" />
            <input type="submit" value="Login" className="btn btn-primary"/>
        </form>
    )
}