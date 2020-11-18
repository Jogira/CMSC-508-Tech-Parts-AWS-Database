import React, { Component } from "react"
import axios from "axios";

export default class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data, // attribute
            sort: 'Select'
        }
        this.state.data = props.data;
    }

    renderRow(row) {
        return(
            <tr>
                <td>{row.itemID}</td>
                <td>{row.itemName}</td>
                <td>{row.currentPrice}</td>
                <td>{row.shippingPrice}</td>
                <td>{row.series}</td>
                <td>{row.manufacturer}</td>
                <td>{row.companyName}</td>
            </tr>
        )
    }

    renderRows() {
        console.log(this.props);
    }

    handleChange(e) {
        this.setState({sort: e.target.value})
    }

    renderSortedList() {
        console.log(this.state.data, this.state.sort)
        if(this.state.sort === 'price-asc') {
            return this.state.data.sort((a, b) => {
                return b.currentPrice - a.currentPrice;
            });
        } else if(this.state.sort === 'price-decs') {
            return this.state.data.sort((a, b) => {
                return a.currentPrice - b.currentPrice;
            });
        } else if(this.state.sort === 'name') {
            return this.state.data.sort((a,b) => {
                return a.itemName.localeCompare(b.itemName)
            })
        }
        else if(this.state.sort === 'vendor') {
            return this.state.data.sort((a,b) => {
                return a.companyName.localeCompare(b.companyName)
            })
        }
        else {
            return this.state.data;
        }
    }

    render() {
        return (
            <div>


                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">💻📱🖥</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active"><a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a></li>
                                <li class="nav-item"><a class="nav-link" href="/update">Update</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="main-container">
                    <div></div>
                    <div>
                        <p>
                            asfdasd
                        </p>
                    </div>
                    <hr />
                    <div class="results-container">
                        <h2>Results</h2>
                        <div class="form-group">
                            <label for="filter-menu">Sort By: </label>
                            <div>
                                <select id="filter-menu" name="filter-menu" onChange={e => this.handleChange(e)}>
                                    <option>Select</option>
                                    <option value="price-asc">Price (ascending)</option>
                                    <option value="price-decs">Price (descending)</option>
                                    <option value="date-asc">Date (ascending)</option>
                                    <option value="date-desc">Date (descending)</option>
                                    <option value="name">Name </option>
                                    <option value="vendor">Vendor</option>
                                </select>
                                <input name="vendor" hidden="hidden" />
                            </div>
                        </div>
                        <table>
                            <tr>
                                <th>Item ID</th>
                                <th>Item Name</th>
                                <th>Current Price </th>
                                <th>Shipping Price</th>
                                <th>Series</th>
                                <th>Manufacturer</th>
                                <th>Vendor</th>
                            </tr>
                            {this.renderSortedList().map(x => this.renderRow(x))}
                        </table>
                    </div>
                    <div class="btn-container"><a class="btn btn-primary mb-2" href="/">Return </a></div>
                </div>
            </div>
        )
    }
}