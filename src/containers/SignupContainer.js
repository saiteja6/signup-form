import React, { Component } from 'react'

import SignupComponent from '../components/SignupComponent'

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
                <SignupComponent 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    data={this.state}
                />
            </div>
        )
    }
}
