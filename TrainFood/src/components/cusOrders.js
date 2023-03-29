import  React, {Component} from 'react';
import axios from 'axios'
import OrderTableRow from './cusOrderTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class MyOrders extends  Component{


    constructor(props) {
        super(props);

        this.onChangeSearch = this.onChangeSearch.bind(this);
        

        this.state = {
            orders : [],
            search:'',
            mail : this.props.match.params.id
        }

       
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }
   

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFood/myorders/'+this.props.match.params.id)
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
            return <OrderTableRow obj = {object} key = {i}/>;
        });
    }

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <a href= {"/index/" +this.props.match.params.id}>Home</a>
                        <a href={"/myorder/" +this.props.match.params.id}>My Orders</a>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                        <a href={"/cusprofile/"+this.props.match.params.id}>Profile</a>
                        <a href="/">SignOut</a>

                        <div className='inner-menu'>
                            <a href="/signin">Terms & Condition</a>
                            <a href="/about">Setting</a>
                            <a href="/contact">More</a>
                        </div>
                    </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>Fast Food</h2>
                            <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                                </div>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/searchorder/"+this.state.search+"/"+ this.props.match.params.id} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                                </div>
                            </from>
                        </div>
                       

                        <br/><br/>
                        <h3 align="center">My Orders</h3>

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
        );
    }
}