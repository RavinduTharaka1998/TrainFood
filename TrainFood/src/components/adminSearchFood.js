import  React, {Component} from 'react';
import axios from 'axios'
import FoodTableRow from './adminSearchFoodTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class AdminSearchFood extends  Component{


    constructor(props) {
        super(props);
        this.state = {foods : []};
        this.state.Station = this.props.match.params.id;

        //const Email = this.props.match.params.id;
        
    }
   

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFoodAdmin/adminsearchfood/'+this.props.match.params.pathParam1+'/'+this.props.match.params.pathParam2)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({foods : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.foods.map(function (object, i){
            return <FoodTableRow obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
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
                                    <a href ={"/adminviewfood/"+this.props.match.params.pathParam2} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Go Back</a>
                                </div>
                            </from>
                        </div>
                        <br/><br/><br/>
                        <h3 align="center">Your Food(s)</h3>
                       
                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>FoodName</th>
                                    <th>Price</th>
                                    <th>Size</th>
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