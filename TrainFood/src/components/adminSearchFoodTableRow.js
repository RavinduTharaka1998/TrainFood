import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/trainFoodAdmin/admindeleteFood/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Food Successfully Deleted....")
        window.location.replace('/adminviewfood/'+this.props.obj.station);
    }
    render() {
        return (
           <tr>
                {/* <td>
                   {this.props.obj._id}
               </td> */}
               <td>
                   {this.props.obj.foodname}
               </td>
               <td>
                   {this.props.obj.price}
               </td>
               <td>
                   {this.props.obj.size}
               </td>
               <td>
                   {this.props.obj.station}
               </td>
               <td>
                   <Link to={"/admineditfood/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;