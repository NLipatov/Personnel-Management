// import './employers-add-form.css';
import './employee-add-form.scss'
import {Component} from 'react';

class EmployersAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            salary: 0
        }
    }

    onValueChange = (e)=> {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAddition(this.state.name, this.state.salary)
        this.setState(
            {
                name: "",
                salary: ""
            }
        )
    }


    render(){
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Укажите З/П в $" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmit}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;