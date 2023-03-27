import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/trainFood/deleteOrder/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Order Successfully Deleted....")
        window.location.replace('/myorder/'+this.props.obj.email);
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
                   {this.props.obj.trainname}
               </td>
               <td>
                   {this.props.obj.station}
               </td>
               <td>
                   {this.props.obj.qty}
               </td>
               <td>
                   {this.props.obj.date}
               </td>
               <td>
                   {this.props.obj.price}
               </td>
               <td>
                   {this.props.obj.phone}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.payment}
               </td>
               <td>
                   {this.props.obj.deliveryby}
               </td>
               <td>
                   <Link to={"/adminassigndeliver/"+this.props.obj._id} className="btn btn-success">Assign Deliver</Link>
               </td>
           </tr>
        );
    }
}

export default TableRow;