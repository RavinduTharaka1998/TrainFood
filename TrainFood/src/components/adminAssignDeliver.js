import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';

export default  class AdminAssignDeliver extends  Component{


    constructor(props){
        super(props);

        this.onChangeFoodName = this.onChangeFoodName.bind(this);
        this.onChangeTrainName = this.onChangeTrainName.bind(this);
        this.onChangeStation = this.onChangeStation.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDeliverBy = this.onChangeDeliverBy.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            foodname: '',
            trainname: '',
            station:'',
            qty:'',
            price:'',
            date:'',
            phone:'',
            email:'',
            payment:'',
            deliveryby:''
        }

        this.state.station = this.props.match.params.id;
    }

    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFood/orderEdit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    foodname: res.data.foodname,
                    trainname: res.data.trainname,
                    station: res.data.station,
                    qty: res.data.qty,
                    date: res.data.date,
                    price: res.data.price,
                    phone: res.data.phone,
                    email: res.data.email,
                    payment: res.data.payment
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeFoodName(e){
        this.setState( {
           foodname: e.target.value
        });
    }
    onChangeTrainName(e){
        this.setState( {
            trainname: e.target.value
        });
    }
    onChangeStation(e){
        this.setState( {
            station: e.target.value
        });
    }
    onChangeSeatNo(e){
        this.setState( {
            seatno: e.target.value
        });
    }
    onChangeQty(e){
        this.setState( {
            qty: e.target.value
        });
    }
    onChangeDate(e){
        this.setState( {
            date: e.target.value
        });
    }
    onChangePhone(e){
        this.setState( {
            phone: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeDeliverBy(e){
        this.setState({
            deliveryby: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            foodname : this.state.foodname,
            trainname : this.state.trainname,
            station : this.state.station,
            qty : this.state.qty,
            date : this.state.date,
            price : this.state.price,
            phone : this.state.phone,
            email : this.state.email,
            payment : this.state.payment,
            deliveryby : this.state.deliveryby
        };

        console.log('Update id '+this.props.match.params.id);

        axios.post('http://localhost:4000/trainFoodAdmin/adminassigndeliver/'+this.props.match.params.id,obj)
            .then(res => console.log(res.data));
        //this.props.history.push('/myorder/'+this.state.email);
        window.location.replace('/adminhome/'+this.state.station);
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
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Assign Deliver</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Food Name :</label>
                                {/* <select required readOnly value={this.state.foodname} onChange = {this.onChangeFoodName} className="form-control">
                                    <option value="Kottu">Kottu</option>
                                    <option value="Mix Rice">Mix Rice</option>
                                    <option value="Noodles">Noodles</option>
                                </select> */}
                                <input type ="text" required readOnly value={this.state.foodname} onChange = {this.onChangeFoodName} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Train Name :</label>
                                {/* <select required  readOnly value={this.state.trainname} onChange = {this.onChangeTrainName} className="form-control">
                                    <option value = "Ruhunu Kumari">Ruhunu Kumari</option>
                                    <option value = "Galu Kumari">Galu Kumari</option>
                                    <option value = "Rajarata Rejini">Rajarata Rejini</option>
                                    <option value = "Udarata Manike">Udarata Manike</option>
                                </select> */}
                                <input type ="text" required  readOnly value={this.state.trainname} onChange = {this.onChangeTrainName} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Station :</label>
                                {/* <select required readOnly value={this.state.station} onChange = {this.onChangeStation} className="form-control">
                                    <option value="Matara">Matara</option>
                                    <option value="Galle">Galle</option>
                                    <option value="Colombo">Colombo</option>
                                </select> */}
                                <input type ="text" required readOnly value={this.state.station} onChange = {this.onChangeStation} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Quantity :</label>
                                <input type ="number" readOnly className="form-control" value={this.state.qty} onChange = {this.onChangeQty}/>
                            </div>
                            <div className="form-group">
                                <label>Date :</label>
                                <input type ="date" readOnly  className="form-control" value={this.state.date} onChange = {this.onChangeDate}/>
                            </div>
                            <div className="form-group">
                                <label>Price :</label>
                                <input type ="number" readOnly  className="form-control" value={this.state.price}/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number :</label>
                                <input type ="number" readOnly placeholder = "Please enter contact number" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                            </div>
                            <div className="form-group">
                                <label>eMail Address :</label>
                                <input type ="email"  readOnly className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Payment :</label>
                                <input type ="text"  readOnly className="form-control" value={this.state.payment} onChange = {this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Deliver Name :</label>
                                <select required  value={this.state.deliveryby} onChange = {this.onChangeDeliverBy} className="form-control">
                                    <option >Deliver By</option>
                                    <option value="H.M. Saman">H.M. Saman</option>
                                    <option value="P.T. Kamal">P.T. Kamal</option>
                                    <option value="Nimal Cilva">Nimal Cilva</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <input type = "submit" value = "Assign Deliver" className="btn btn-dark"/>
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