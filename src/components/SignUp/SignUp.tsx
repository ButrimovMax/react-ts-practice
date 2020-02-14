import React from 'react'
import './SignUp.scss'

class SignUp extends React.Component {
    render () {
        return (
            <>
                <form action="" className="registration-form">
                    <fieldset>
                        <label htmlFor="reg-name-field">Your name</label>
                        <input type="text" id="reg-name-field"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="reg-email-field">Your email</label>
                        <input type="text" id="reg-email-field"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="reg-pass-field">Type your pass</label>
                        <input type="text" id="reg-pass-field"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="reg-confirm-pass-field">Confirm your pass</label>
                        <input type="text" id="reg-confirm-pass-field"/>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default SignUp