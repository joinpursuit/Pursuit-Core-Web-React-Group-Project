import React from 'react';
import axios from 'axios';

class Login extends React.PureComponent {
    state = {
        email: '',
        password: '',
        username: '',
        fullName: '',
    }

    handleFormSubmit = async (e) => {
        e.preventDefault()

        if (this.state.formFunctionality[0] === 'Login') {
            const user = {
                email: this.state.email,
                password: this.state.password
            }
            try {
                this.setState({loading: true})
                const { data } = await axios.patch('http://localhost:3001/users/login', user)

                this.setState({ loading: false })
                this.props.formSubmit(data.payload, this.state.password)
            } catch (err) {
                
            }
        } else if (this.state.formFunctionality[0] === 'Sign-in') {
            const user = { 
                username: this.state.username, 
                fullname: this.state.fullName, 
                password: this.state.password, 
                email: this.state.email
            }
            }
            try {
                this.setState({loading: true})
                const { data } = await axios.post('http://localhost:3001/users/signup', user)

                this.setState({ loading: false })
                this.props.formSubmit(data.payload, this.state.password)
            } catch (err) {
            }
        }
    

    handleUsernameInput = e => {
        this.setState({username: e.target.value})
    }


    handlefullNameInput = e => {
        this.setState({fullName: e.target.value})
    }
    
    handleEmailInput = e => {
        this.setState({email: e.target.value})
    }

    handlePasswordInput = e => {
        this.setState({password: e.target.value})
    }

    handleSigninBtn = () => {
        if (this.state.formFunctionality[0] === 'Login'){
            this.setState({formFunctionality: ['Sign-in', 'Already a user? ', 'Login']})
        } else if (this.state.formFunctionality[0] === 'Sign-in') {
            this.setState({formFunctionality: ['Login', 'New user? ', 'Sign-in']})
        }

    }


    render() {
        if (this.state.formFunctionality[0] === 'Sign-in') {
            signinFields = <>
                <div>
                    <input  id='username' type='text' value={this.state.username} onChange={this.handleUsernameInput} required></input>
                </div>
                <div >
                    <input id='fullName' type='text' value={this.state.fullName} onChange={this.handlefullNameInput} required></input>
                </div>
            
                <div >
                    <input  id='defaultCheck' type='checkbox' checked={this.state.ageCheck} onChange={this.handleAgeCheck}/>
                </div>
            </>
        }
        return(
            <form  onSubmit={this.handleFormSubmit} >
                <div>
                    <input id='email' type='email' value={this.state.email} onChange={this.handleEmailInput} required></input>
                </div>
                <div>
                    <input  id='password' type='password' autoComplete='off' value={this.state.password} onChange={this.handlePasswordInput} required></input>
                    <label >Password: </label>
                </div>
                {signinFields}
                <div >
                    <button onClick={this.handleSigninBtn}>{this.state.formFunctionality[1]}<strong>{this.state.formFunctionality[2]}</strong></button>
                </div>
            </form>
        )
    }
}
export default Login