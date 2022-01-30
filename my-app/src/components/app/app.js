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
            ]
        }
    }

    delteItem = (id) => {
        this.setState(({data})=> {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    
    render(){
        const {data} = this.state;
        return(
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                    data={data}
                    onDelete={this.delteItem}/>
                <EmployersAddForm/>
            </div>
        );
    }

}

export default App;