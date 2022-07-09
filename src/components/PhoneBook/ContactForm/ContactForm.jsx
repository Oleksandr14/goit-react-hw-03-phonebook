import { Component } from "react";

import { initialState } from "./initialState";

import style from './contactForm.module.css'

class ContactForm extends Component {

state = {...initialState} 
    
    handleChange = ({target}) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({...initialState} ) 
    }

     render() {
        const { name, number } = this.state;
        const { handleChange, handleSubmit  } = this;
        
        return (
            
                <form action="" onSubmit={handleSubmit} className={style.form}>
                    <div className={style.input} >
                    <label htmlFor="">Name</label> <br/>
                        <input
                            value={name}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="">Number</label> <br/>
                        <input
                            value={number}
                            type="tel"
                            name="number"
                            onChange={handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </div>
                    <button type="submit" >Add contact</button>
                </form>
                 
        )
    }
}

export default ContactForm;