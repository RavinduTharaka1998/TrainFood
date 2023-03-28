import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';

export default  class EditOrder extends  Component{


    constructor(props){
        super(props);

        this.onChangeFoodName = this.onChangeFoodName.bind(this);
        this.onChangeTrainName = this.onChangeTrainName.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeSeatNo = this.onChangeSeatNo.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            foodname: '',
            trainname: '',
            class:'',
            seatno:'',
            qty:'',
            price:'',
            date:'',
            phone:'',
            email:'',
            payment:'',
            deliveryby:''
        }
    }

    componentDidMount() {
        //alert('Payment id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFood/orderEdit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    foodname: res.data.foodname,
                    trainname: res.data.trainname,
                    class: res.data.class,
                    seatno: res.data.seatno,
                    qty: res.data.qty,
                    date: res.data.date,
                    price: res.data.price,
                    phone: res.data.phone,
                    email: res.data.email
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
    onChangeClass(e){
        this.setState( {
            class: e.target.value
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

    onSubmit(e){
        e.preventDefault();
         if (this.state.foodname == 'Kottu') {

            this.state.price = this.state.qty * 1000;

        } else if (this.state.foodname == 'Mix Rice') {

            this.state.price = this.state.qty * 900;

        } else if (this.state.foodname == 'Noodles') {

            this.state.price = this.state.qty * 1200;
            
        }
        this.state.deliveryby = 'pending';
        this.state.payment = 'pending';

        const obj = {
            foodname : this.state.foodname,
            trainname : this.state.trainname,
            class : this.state.class,
            seatno : this.state.seatno,
            qty : this.state.qty,
            date : this.state.date,
            price : this.state.price,
            phone : this.state.phone,
            email : this.state.email,
            payment : this.state.payment,
            deliveryby : this.state.deliveryby
        };

        console.log('Update id '+this.props.match.params.id);

        axios.post('http://localhost:4000/trainFood/orderPayment/'+this.props.match.params.id,obj)
            .then(res => console.log(res.data));
        //this.props.history.push('/myorder/'+this.state.email);
        window.location.replace('/myorder/'+this.state.email);
    }

    render() {
        return(
            <div>
                <div class="sidebar">
                        <a href= {"/index/" +this.state.email}>Home</a>
                        <a href={"/myorder/" +this.state.email}>My Orders</a>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                        <a href={"/cusprofile/"+this.state.email}>Profile</a>
                        <a href="/">SignOut</a>

                        <div className='inner-menu'>
                            <a href="/signin">Terms & Condition</a>
                            <a href="/about">Setting</a>
                            <a href="/contact">More</a>
                        </div>
                </div>

                <div class="content">
                    <h2 className= 'tittle'>Fast Food</h2>
                    <br/>
                    <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Payment form</h3>

                        <center>
                            <img src = "https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg" width={300} height="100"/>
                        </center>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Food Name :</label>
                                <input type ="text" required readOnly className="form-control" value={this.state.foodname} onChange = {this.onChangeFoodName}/>
                                {/* <select required readonly value={this.state.foodname} onChange = {this.onChangeFoodName} className="form-control">
                                    <option value="Kottu">Kottu</option>
                                    <option value="Mix Rice">Mix Rice</option>
                                    <option value="Noodles">Noodles</option>
                                </select> */}
                                {/* <input type ="text" required placeholder = "Please enter name" className="form-control" value={this.state.name} onChange = {this.onChangeName}/> */}
                            </div>
                            <div className="form-group">
                                <label>Quantity :</label>
                                <input type ="number" readOnly required  className="form-control" value={this.state.qty} onChange = {this.onChangeQty}/>
                            </div>
                            <div className="form-group">
                                <label>Total Amount :</label>
                                <input type ="number" readOnly required  className="form-control" value={this.state.price} onChange = {this.onChangeprice}/>
                            </div>
                            <div className="form-group">
                                <label>Date :</label>
                                <input type ="date" readOnly required  className="form-control" value={this.state.date} onChange = {this.onChangeDate}/>
                            </div>
                           
                            <div className="form-group">
                                <label>Your Carde Number :</label>
                                <input type ="number" required placeholder = "Please enter PIN" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <input type = "submit" value = "Pay Now !" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <div className='top-footer'>
                        <div className='col-img'>
                            <img src = "https://limitlessspice.com/wp-content/uploads/2022/02/kottu-g734b601c4_1920.jpg" width="400"/>
                            <h4>Koththu</h4>
                            <h4>Rs 1000/=</h4>
                        </div>
                        <div className='col-img'>
                            <img src = "https://cdn.chinesedragoncafe.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/r/i/rice-with-shrimp-_-chicken.jpg" width="475"/>
                            <h4>Mix Rice</h4>
                            <h4>Rs 900/=</h4>
                        </div>
                        <div className='col-img'>
                            <img src = "https://static.onecms.io/wp-content/uploads/sites/43/2023/01/12/270770-garlic-noodles-ddmfs-4x3-0189.jpg" width="" height=""/>
                            <h4>Noodles</h4>
                            <h4>Rs 1200/=</h4>
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