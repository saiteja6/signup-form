import React from 'react'

export default function SignupComponent(props) {
    return (
        <div>
            <h1 className="title-signup">Sign Up</h1>   
                <form 
                    className="SignupForm"
                    onSubmit={props.handleSubmit}>
                    <label> Name:
                    <input 
                        type="text"
                        placeholder="Name.."
                        name="name"
                        value={props.data.name}
                        onChange={props.handleChange}
                    />
                    </label>
                    <br />
                    <label> E-mail:
                    <input 
                        type="text"
                        placeholder="E-mail.."
                        name="email"
                        value={props.data.email}
                        onChange={props.handleChange}
                    />
                    </label>
                    <br />
                    <label> Password:
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={props.data.password}
                        onChange={props.handleChange}
                    />
                    </label>
                    <br />
                    <button>SignUp</button>
                </form>
                <h5>{props.data.name}</h5>
                <h5>{props.data.email}</h5>         
                <h5>{props.data.password}</h5>         
        </div>
    )
}
