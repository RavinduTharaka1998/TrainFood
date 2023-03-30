import  React, {Component} from 'react';
import axios from 'axios'
import TrainTableRow from './adminTrainTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class AdminSearchTrain extends  Component{


    constructor(props) {
        super(props);
        this.state = {trains : []};
        this.state.Station = this.props.match.params.id;

        //const Email = this.props.match.params.id;
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFoodAdmin/adminsearchtrain/'+this.props.match.params.pathParam1+'/'+this.props.match.params.pathParam2)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({trains : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.trains.map(function (object, i){
            return <TrainTableRow obj = {object} key = {i}/>;
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
                                    <a href ={"/adminviewtrain/"+this.props.match.params.pathParam2} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Go Back</a>
                                </div>
                            </from>
                        </div>
                        <br/><br/><br/>
                       
                        <h3 align="center">Your Search Train(s)</h3>
                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>Train Name</th>
                                    <th>Arrival Time</th>
                                    <th>Deparcher time</th>
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
                                <img src = "https://images.moneycontrol.com/static-mcnews/2021/08/Indian-Railways-770x433.jpg?impolicy=website&width=770&height=431" width="400"/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Ruhunu Kumari</h4>
                            </div>
                            <div className='col-img'>
                                <img src = "https://www.timeforkids.com/wp-content/uploads/2020/02/feature-cover_-train-k1.jpg" width="475"/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Udarata Menike</h4>
                               
                            </div>
                            <div className='col-img'>
                                <img src = "https://static.toiimg.com/thumb/msid-68664756,width-400,resizemode-4/68664756.jpg" width="" height=""/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Yal Dewi</h4>
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