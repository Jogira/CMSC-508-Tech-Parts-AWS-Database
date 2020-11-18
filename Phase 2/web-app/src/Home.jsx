import React, { Component, Fragment } from "react"
import axios from "axios";
import Results from "./Results";

export default class Home extends Component {

    constructor() {
        super();
        this.state = {home: true}
    }

    componentDidMount() {
        axios.get('http://localhost:3030/test')
            .then(res => {
                this.setState({ data: res.data});
                console.log(res.data);
            })
            .catch(error => console.log(error));

        axios.get('http://localhost:3030/cpus')
            .then(res => {
                this.setState({ cpus: res.data});
                console.log(res.data);
            })
            .catch(error => console.log(error));

        axios.get('http://localhost:3030/storage')
            .then(res => {
                this.setState({ storage: res.data});
                // now can use this.state.storage
                // this.state.x = 5 <- no
                // this.setState({x: 5}) <- yes
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }

    loadVendors(){
        if(!this.state.data){
            return null;
        }

        return this.state.data.company.map((x,i)=>{
            return (
                <option key={i} value={x.companyName}>{x.companyName}</option>
            )
        })
    }

    loadManufacturers(){
        if(!this.state.data){
            return null;
        }

        return this.state.data.manu.map((x,i)=>{
            return (
                <option key={i} value={x.manufacturer}>{x.manufacturer}</option>
            )
        })
    }
    
    loadCategories(){
        if(!this.state.data){
            return null;
        }

        return this.state.data.items.map((x,i)=>{
            return (
                <option key={i} value={x.category}>{x.category}</option>
            )
        })
    }
    
    updateSearch(e) {
        this.setState({searchTerm: e.target.value});
    }

    updateVendor(e) {
        this.setState({vendor: e.target.value});
    }

    updateManu(e) {
        this.setState({manu: e.target.value});
    }

    updateItem(e) {
        this.setState({item: e.target.value});
    }

    //takes text in textbox, makes request to server, returns results array
    submit() {
        axios.post('http://localhost:3030/test-search', {
            searchTerm: this.state.searchTerm
        }).then(data => {
            this.setState({home: false, results: data.data});
        }).catch(error => console.log(error))
    }

    //takes selections from dropdowns + textbox, makes request to server, returns results array 
    advSubmit() {
        axios.post('http://localhost:3030/test-advsearch', {
            searchTerm: this.state.searchTerm,
            vendor: this.state.vendor,
            manu: this.state.manu,
            item: this.state.item
        }).then(data => {
            this.setState({home: false, results: data.data});
        }).catch(error => console.log(error))
    }

    //used for item specific dropdowns
    renderSelect(title, entires) {

        // todo remove duplicates
        let uniqueArray = entires.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })

        return (
            <Fragment>
                <div>{title}</div>
                <select>
                    {uniqueArray.map(x => <option>{x[title]}</option>)}
                </select>
            </Fragment>
        )
    }

    //used for item specific dropdowns
    renderSelects(selects, entries) {
        return (
            <Fragment>
                {selects.map(x => this.renderSelect(x, entries))}
            </Fragment>
        )
    }

    //todo: this
    renderFilterGroup() {
        if(!this.state.item || this.state.item === 'Select') return null;

        if(this.state.item === 'CPU') {
            let selects = Object.keys(this.state.cpus[0])
            return (
                <div>
                    CPU
                    {this.renderSelects(selects, this.state.cpus)}
                </div>
            )
        }

        else if(this.state.item === 'Storage') {
            let selects = Object.keys(this.state.storage[0])
            return (
                <div>
                    Storage
                    {this.renderSelects(selects, this.state.storage)}
                </div>
            )
        }
        
    }

    renderHome() {
        return (
            <div>

                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light"><a className="navbar-brand" href="#">💻📱🖥</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="/update">Update</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="main-container">
                    <div>
                        <h3>Search item name, item id, model number, or series name:</h3>
                        <div className="form-group mb-6">
                            <label className="sr-only" htmlFor="inputSearch">test</label>
                            <input onChange={e => this.updateSearch(e)} className="form-control search-box" id="inputSearch" type="text" placeholder="test" name="user_query" />
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-primary mb-2" onClick={e => this.submit()}>Search</button>
                        </div>

                    </div>

                    <div>
                        <p>message</p>
                        <p>results</p>
                    </div>

                    <hr />

                    <div>
                        <h3>Advanced search</h3>
                    </div>
                    <div className="options-container">
                        <div className="form-group">
                            <label htmlFor="vendor_menu">Vendor: </label>
                            <div>
                                <select id="vendor_menu" name="vendor" onChange={e => this.updateVendor(e)}>
                                    <option>Select</option>
                                    {this.loadVendors()}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="manu_menu">Manufacturer:</label>
                            <div>
                                <select id="manu_menu" name="manu" onChange={e => this.updateManu(e)}>
                                    <option>Select</option>
                                    {this.loadManufacturers()}

                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type_menu">Item Type:</label>
                            <div>
                                <select id="type_menu" name="type" onChange={e => this.updateItem(e)}>
                                    <option>Select</option>
                                    {this.loadCategories()}

                                </select>
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-primary mb-2" onClick={e => this.advSubmit()}>Advanced Search</button>
                        </div>

                        <div>
                            {this.renderFilterGroup()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderPage() {
        if(this.state.home) {
            return this.renderHome()
        } else {
            return <Results data={this.state.results}/>
        }
    }

    render() {
        return this.renderPage()
    }
}