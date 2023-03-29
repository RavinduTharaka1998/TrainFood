import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';

export default  class AdminEditDeliver extends  Component{


    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeStation = this.onChangeStation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            phone: '',
            nic:'',
            station:''
        }
    }

    componentDidMount() {
        //alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFoodAdmin/admindeliveredit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    phone: res.data.phone,
                    nic: res.data.nic,
                    station: res.data.station
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeName(e){
        this.setState( {
           name: e.target.value
        });
    }
    onChangePhone(e){
        this.setState( {
            phone: e.target.value
        });
    }
    onChangeNIC(e){
        this.setState( {
            nic: e.target.value
        });
    }
    onChangeStation(e){
        this.setState( {
            station: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            phone : this.state.phone,
            nic : this.state.nic,
            station : this.state.station
        };

        console.log('Update id '+this.props.match.params.id);

        const lastelement = this.state.nic.charAt(this.state.nic.length - 1);

        if(this.state.phone.length === 10){
            if(this.state.nic.length === 10){
                if(lastelement === 'V' || lastelement === 'v'){
                    axios.post('http://localhost:4000/trainFoodAdmin/admindeliverupdate/'+this.props.match.params.id,obj)
                        .then(res => console.log(res.data));
                    //this.props.history.push('/myorder/'+this.state.email);
                    window.location.replace('/adminviewdeliver/'+this.state.station);
                } 
                else {
                    alert('Invalid NIC Number.. Pleace enter "V" for nic.');
                }
            } 
            else {
                alert('Invalid NIC Number.. Pleace enter 10 digits for nic.');
            }
        }
        else{
            alert('Invalid phone number.. Pleace enter 10 numbers for contact number.');
        }
    }

    render() {
        return(
            <div>
                <div class="sidebar">
                        <a href= {"/adminhome/"+this.state.station}>Home</a>
                        <a href={"/adminadddeliver/"+this.state.station}>Add Deliver</a>
                        <a href={"/adminviewdeliver/"+this.state.station}>View Deliver</a>
                        <a href={"/adminaddtrain/"+this.state.station}>Add Train</a>
                        <a href={"/adminviewTrain/"+this.state.station}>View Train</a>
                        <a href={"/adminaddfood/"+this.state.station}>Add Food</a>
                        <a href={"/adminviewfood/"+this.state.station}>View Food</a>
                        <a href={"/adminhome/"+this.state.station}>Contact Us</a>
                        <a href={"/adminhome/"+this.state.station}>Profile</a>
                        <a href="/">SignOut</a>

                        {/* <div className='inner-menu'>
                            <a href={"/adminhome/"+this.state.station}>Terms & Condition</a>
                            <a href={"/adminhome/"+this.state.station}>Setting</a>
                            <a href={"/adminhome/"+this.state.station}>More</a>
                        </div> */}
                </div>

                <div class="content">
                    <h2 className= 'tittle'>Fast Food</h2>
                    <br/>
                    <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Edit Your Deliver Details</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Deliver Name :</label>
                                <input type ="text" required  className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Phone :</label>
                                <input type ="number" required className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                            </div>
                            <div className="form-group">
                                <label>NIC :</label>
                                <input type ="text" required value={this.state.nic} onChange = {this.onChangeNIC} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Station :</label>
                                <input type ="text" readOnly value={this.state.station} onChange = {this.onChangeStation} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Update Deliver" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <div className='top-footer'>
                        <div className='col-img'>
                            <img src = "https://images.yen.com.gh/images/1e458e8258712ac5.jpg?imwidth=900" width="390"/>
                            <h4>Customer Frindly Delivery Service</h4>
                        </div>
                        <div className='col-img'>
                            <img src = "https://www.azfoodandwine.com/wp-content/uploads/2020/03/delivery-staff_68708-255.jpg" width="475"/>
                            <h4>Number One Delivery Service</h4>
                        </div>
                        <div className='col-img'>
                            <img src = "https://media.istockphoto.com/id/1200224470/vector/motorbike-delivery-man-logo-icon-symbol-vector-template.jpg?s=612x612&w=0&k=20&c=TohyHnrnHsJWj3bglwTJ7NmnX9U98x0-1aEkTiej1Xk=" width="" height=""/>
                            <h4>Fastest Delivery Service</h4>
                        </div>
                    </div>
                     
                    <br/>
                    <hr/>
                    <Footer/>
                    <hr/>
                    <br/>
                </div>
            </div>
        )
    }
}