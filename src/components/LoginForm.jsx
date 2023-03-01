import React from "react"

export default function LoginForm(props) {
    return (
        <div>
            <div className="input-container">
                <input onChange={props.handle} value={props.login} name="login" type="text" placeholder="Nazwa użytkownika" required/>
                <div className="checked-value">{props.checkedL}</div>
            </div>
            <div className="input-container">
                <input onChange={props.handle} value={props.password} name="password" type="password" placeholder="Hasło" minLength="8" required/>
                <div className="checked-value">{props.checkedP}</div>
            </div>
        </div>
    )
}
