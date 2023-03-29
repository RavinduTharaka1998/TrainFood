import  React, {Component} from 'react';
import axios from 'axios'
import SearchOrderTableRow from './adminSearchOrderTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class AdminSearchOrder extends  Component{


    constructor(props) {
        super(props);

        this.state = {
            orders : []
        }
       
    }

    componentDidMount() {
        alert('search is ' +this.props.match.params.pathParam1+ ' and '+this.props.match.params.pathParam2);
        axios.get('http://localhost:4000/trainFoodAdmin/adminorderssearch/'+this.props.match.params.pathParam1+'/'+this.props.match.params.pathParam2)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({orders : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.orders.map(function (object, i){
            return <SearchOrderTableRow obj = {object} key = {i}/>;
        });
    }

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <a href= {"/adminhome/"+this.props.match.params.pathParam2}>Home</a>
                        <a href={"/adminadddeliver/"+this.props.match.params.pathParam2}>Add Deliver</a>
                        <a href={"/adminviewdeliver/"+this.props.match.params.pathParam2}>View Deliver</a>
                        <a href={"/adminaddtrain/"+this.props.match.params.pathParam2}>Add Train</a>
                        <a href={"/adminviewTrain/"+this.props.match.params.pathParam2}>View Train</a>
                        <a href={"/adminaddfood/"+this.props.match.params.pathParam2}>Add Food</a>
                        <a href={"/adminviewfood/"+this.props.match.params.pathParam2}>View Food</a>
                        <a href={"/adminhome/"+this.props.match.params.pathParam2}>Contact Us</a>
                        <a href={"/adminhome/"+this.props.match.params.pathParam2}>Profile</a>
                        <a href="/">SignOut</a>
                    </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>Fast Food</h2>
                            <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/adminhome/"+this.props.match.params.pathParam2} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Go Back</a>
                                </div>
                            </from>
                        </div>
                        <br/><br/>
                        <h3 align="center">Search Result</h3>

                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>FoodName</th>
                                    <th>TrianName</th>
                                    <th>Station</th>
                                    <th>QTY</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Phone Number</th>
                                    <th>eMail</th>
                                    <th>Payment</th>
                                    <th>DeliveryBy</th>
                                    <th colSpan="3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>

                        <br/><br/><br/>       
                        <hr/>   
                        <br/>
                        <hr/>
                        <Footer/>
                        <hr/>
                        <br/>
                        </div>
                </div>
        );
    }
}