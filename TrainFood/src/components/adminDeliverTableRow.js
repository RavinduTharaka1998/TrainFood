import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/trainFoodAdmin/admindeleteDeliver/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Deliver Successfully Deleted....")
        window.location.replace('/adminviewdeliver/'+this.props.obj.station);
    }
    render() {
        return (
           <tr>
                {/* <td>
                   {this.props.obj._id}
               </td> */}
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.phone}
               </td>
               <td>
                   {this.props.obj.nic}
               </td>
               <td>
                   {this.props.obj.station}
               </td>
               <td>
                   <Link to={"/admineditdeliver/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;