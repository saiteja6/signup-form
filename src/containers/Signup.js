import React, { Component } from 'react'

export default class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: ""
    }

    handleChange = event => {
        const {name, value} = event.target    
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
    }
    
    render() {
        return (
            <div>
                <h1 className="title-signup">Sign Up</h1>   
                <form 
                    className="SignupForm"
                    onSubmit={this.handleSubmit}>
                    <label> Name:
                    <input 
                        type="text"
                        placeholder="Name.."
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    </label>
                    <br />
                    <label> E-mail:
                    <input 
                        type="text"
                        placeholder="E-mail.."
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    </label>
                    <br />
                    <label> Password:
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </label>
                    <br />
                    <button>SignUp</button>
                </form>
                <h5>{this.state.name}</h5>
                <h5>{this.state.email}</h5>         
                <h5>{this.state.password}</h5>         
            </div>
        )
    }
}
