import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import {Component} from 'react';
import './app.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Fred Durst", salary: 800, id: 1},
                {name: "Wes Borland", salary: 3000, id: 2},
                {name: "John Otto", salary: 15000, id: 3}
            ],
            test: "testString"
        }
    }

    getLastId = ()=>{
        return this.state.data.at(-1).id
    }

    deleteItem = (id) => {
        //when calling set state method from this class instance, we get all objects from state.
        //in code below, we are getting only object called data:
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })

        //upper code is equal to this code below
        //here we are getting state of class instance and in state we are addressing to data object:
        // this.setState((state) => {
        //     return {
        //         data: state.data.filter(item => item.id !== id)
        //     }
        // })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name, 
            salary: salary,
            id: this.getLastId() + 1
        }
        //we can make new array by getting old array directly from state and then change current array in state from setState function:
        // const newArray = [...this.state.data, newItem]
        // this.setState(
        //     {
        //         data: newArray
        //     }
        // )

        //or we can make it from setState function:
        this.setState(({data})=>{
            const newArray = [...data, newItem]
            return{
                data: newArray
            }
        })
        
    } 
    
    render(){
        const {data} = this.state;
        this.getLastId()
        return(
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm
                    onAddition={this.addItem}/>
            </div>
        );
    }

}

export default App;