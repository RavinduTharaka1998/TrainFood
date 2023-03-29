import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';

export default  class AdminAddDeliver extends  Component{


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

        this.state.station = this.props.match.params.id;
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
                        axios.post('http://localhost:4000/trainFoodAdmin/adminadddeliver',obj)
                        .then(res => {
                            alert("Deliver Add Successfully");
                            this.setState({
                                name :'',
                                phone :'',
                                nic :'',
                                station:''
                    
                            })
                            console.log(res.data)});
                        // this.props.history.push('/signIn');
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

                        {/* <div className='inner-menu'>
                            <a href={"/adminhome/"+this.props.match.params.id}>Terms & Condition</a>
                            <a href={"/adminhome/"+this.props.match.params.id}>Setting</a>
                            <a href={"/adminhome/"+this.props.match.params.id}>More</a>
                        </div> */}
                </div>

                <div class="content">
                    <h2 className= 'tittle'>Fast Food</h2>
                    <br/>
                    <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Add New Deliver</h3>
                        <hr/>
                        <br/>
                         <center>
                            <img src = "https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg" width ="250" height="200"/>
                         </center>
                        <br/>
                        <hr/>
                        <form onSubmit={this.onSubmit}>
                            {/* <div className="form-group">
                                <label>Food Image :</label>
                                <input type ="file" required className="form-control" value={this.state.price} onChange = {this.onChangePrice}/>
                            </div> */}
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
                                <input type ="text" required className="form-control" value={this.state.nic} onChange = {this.onChangeNIC}/>
                            </div>
                            <div className="form-group">
                                <label>Station :</label>
                                <input type ="text" readOnly value={this.state.station} onChange = {this.onChangeStation} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Add Deliver" className="btn btn-dark"/>
                            </div>
                        </form>
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