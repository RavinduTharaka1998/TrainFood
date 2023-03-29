import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';

export default  class AdminEditTrain extends  Component{


    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeArrivalTime = this.onChangeArrivalTime.bind(this);
        this.onChangeDeparcherTime = this.onChangeDeparcherTime.bind(this);
        this.onChangeStation = this.onChangeStation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            arrival: '',
            deparcher:'',
            station:''
        }
    }

    componentDidMount() {
        //alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFoodAdmin/admintrainedit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    arrival: res.data.arrival,
                    deparcher: res.data.deparcher,
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
    onChangeArrivalTime(e){
        this.setState( {
            arrival: e.target.value
        });
    }
    onChangeDeparcherTime(e){
        this.setState( {
            deparcher: e.target.value
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
            arrival : this.state.arrival,
            deparcher : this.state.deparcher,
            station : this.state.station
        };

       
                    axios.post('http://localhost:4000/trainFoodAdmin/admintrainupdate/'+this.props.match.params.id,obj)
                        .then(res => console.log(res.data));
                    //this.props.history.push('/myorder/'+this.state.email);
                    window.location.replace('/adminviewtrain/'+this.state.station);
               
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
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Edit Your Train Details</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Train Name :</label>
                                <input type ="text" required  className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Arrival Time :</label>
                                <input type ="time" required className="form-control" value={this.state.arrival} onChange = {this.onChangeArrivalTime}/>
                            </div>
                            <div className="form-group">
                                <label>Deparcher Time :</label>
                                <input type ="time" required value={this.state.deparcher} onChange = {this.onChangeDeparcherTime} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Station :</label>
                                <input type ="text" readOnly value={this.state.station} onChange = {this.onChangeStation} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Update Train" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                    <br/>
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
        )
    }
}