import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        passwordConfirm: '',
        joinTheNewsletter: true
    })
    
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    console.log(formData)
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm){
            console.log("Succesfully Signed In!")
        }else{
            console.log("Passwords are not Matched!")
            return
        }
        if(formData.joinTheNewsletter){
            console.log("Thanks for signing up for our newsletter!")
        }
    }
    
    
    
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="passwordConfirm"
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="joinTheNewsletter"
                        value={formData.joinTheNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
