import  React, {Component} from 'react';
import axios from 'axios'
import DeliverTableRow from './adminDeliverTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class AdminViewDeliver extends  Component{


    constructor(props) {
        super(props);
        this.state = {delivers : [], search:''};
        this.state.Station = this.props.match.params.id;

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }
    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFoodAdmin/admindeliver/'+this.props.match.params.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({delivers : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.delivers.map(function (object, i){
            return <DeliverTableRow obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <a href= {"/adminhome/"+this.props.match.params.id}>Home</a>
                        <a href={"/adminadddeliver/"+this.props.match.params.id}>Add Deliver</a>
                        <a href={"/adminviewdeliver/"+this.props.match.params.id}>View Deliver</a>
                        <a href={"/adminaddtrain/"+this.props.match.params.id}>Add Train</a>
                        <a href={"/adminviewTrain/"+this.props.match.params.id}>View Train</a>
                        <a href={"/adminaddfood/"+this.props.match.params.id}>Add Food</a>
                        <a href={"/adminviewfood/"+this.props.match.params.id}>View Food</a>
                        <a href={"/adminhome/"+this.props.match.params.id}>Contact Us</a>
                        <a href={"/adminhome/"+this.props.match.params.id}>Profile</a>
                        <a href="/">SignOut</a>
                    </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>Fast Food</h2>
                            <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                                </div>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/adminsearchdeliver/"+this.state.search+"/"+this.props.match.params.id} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                                </div>
                            </from>
                        </div>
                        <br/><br/><br/>
                        <h3 align="center">Your Delivers</h3>
                       
                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>Deliver Name</th>
                                    <th>Phone</th>
                                    <th>NIC</th>
                                    <th>Station</th>
                                    <th colSpan="3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>

                        <br/><br/><br/>       
                        <hr/> 
                        <br/><br/><br/>                 
                        <div className='top-footer'>
                            <div className='col-img'>
                                <img src = "https://images.yen.com.gh/images/1e458e8258712ac5.jpg?imwidth=900" width="390"/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Customer Frindly Delivery Service</h4>
                            </div>
                            <div className='col-img'>
                                <img src = "https://www.azfoodandwine.com/wp-content/uploads/2020/03/delivery-staff_68708-255.jpg" width="475"/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Number One Delivery Service</h4>
                            </div>
                            <div className='col-img'>
                                <img src = "https://media.istockphoto.com/id/1200224470/vector/motorbike-delivery-man-logo-icon-symbol-vector-template.jpg?s=612x612&w=0&k=20&c=TohyHnrnHsJWj3bglwTJ7NmnX9U98x0-1aEkTiej1Xk=" width="" height=""/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Fastest Delivery Service</h4>
                        </div>
                            
                        </div>
                        
                        <br/>
                        <hr/>
                        <Footer/>
                        <hr/>
                        
                        </div>
                </div>
        );
    }
}