import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';

export default  class AdminAddFood extends  Component{


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

        this.state.station = this.props.match.params.id;
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

        axios.post('http://localhost:4000/trainFoodAdmin/adminaddfood',obj)
        .then(res => {
            alert("Food Add Successfully");
            this.setState({
                foodname :'',
                price :'',
                size :'',
                station:''
    
            })
            console.log(res.data)});
        // this.props.history.push('/signIn');
        window.location.replace('/adminviewfood/'+this.state.station);
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
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Add New Food</h3>
                        <hr/>
                        <br/>
                         <center>
                            <img src = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg" width ="250" height="150"/>
                         </center>
                        <br/>
                        <hr/>
                        <form onSubmit={this.onSubmit}>
                            {/* <div className="form-group">
                                <label>Food Image :</label>
                                <input type ="file" required className="form-control" value={this.state.price} onChange = {this.onChangePrice}/>
                            </div> */}
                            <div className="form-group">
                                <label>Food Name :</label>
                                <select required  value={this.state.foodname} onChange = {this.onChangeFoodName} className="form-control">
                                    <option>Select Food..</option>
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
                                <input type = "submit" value = "Add Food" className="btn btn-dark"/>
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