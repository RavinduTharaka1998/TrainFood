import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';

export default  class AdminEditFood extends  Component{


    constructor(props){
        super(props);

        this.onChangeFoodName = this.onChangeFoodName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeStation = this.onChangeStation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            foodname: '',
            price: '',
            size:'',
            station:''
        }
    }

    componentDidMount() {
        alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFoodAdmin/adminfoodedit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    foodname: res.data.foodname,
                    price: res.data.price,
                    size: res.data.size,
                    station: res.data.station
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
    onChangePrice(e){
        this.setState( {
            price: e.target.value
        });
    }
    onChangeSize(e){
        this.setState( {
            size: e.target.value
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
            foodname : this.state.foodname,
            price : this.state.price,
            size : this.state.size,
            station : this.state.station
        };

        console.log('Update id '+this.props.match.params.id);

        axios.post('http://localhost:4000/trainFoodAdmin/adminfoodupdate/'+this.props.match.params.id,obj)
            .then(res => console.log(res.data));
        //this.props.history.push('/myorder/'+this.state.email);
        window.location.replace('/adminviewfood/'+this.state.station);
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
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Edit Your Food Details</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Food Name :</label>
                                <select required  value={this.state.foodname} onChange = {this.onChangeFoodName} className="form-control">
                                    <option value="Kottu">Kottu</option>
                                    <option value="Mix Rice">Mix Rice</option>
                                    <option value="Noodles">Noodles</option>
                                </select>
                                {/* <input type ="text" required placeholder = "Please enter name" className="form-control" value={this.state.name} onChange = {this.onChangeName}/> */}
                            </div>
                            <div className="form-group">
                                <label>Price :</label>
                                <input type ="number" required className="form-control" value={this.state.price} onChange = {this.onChangePrice}/>
                            </div>
                            <div className="form-group">
                                <label>Size :</label>
                                <select required  value={this.state.size} onChange = {this.onChangeSize} className="form-control">
                                    <option >Select Size..</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                                {/* <input type ="text" readOnly value={this.state.station} onChange = {this.onChangeStation} className="form-control"/> */}
                            </div>
                            <div className="form-group">
                                <label>Station :</label>
                                <input type ="text" readOnly value={this.state.station} onChange = {this.onChangeStation} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Update Food" className="btn btn-dark"/>
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