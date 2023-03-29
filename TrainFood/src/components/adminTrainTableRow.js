import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/trainFoodAdmin/admindeleteTrain/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Train Successfully Deleted....")
        window.location.replace('/adminviewtrain/'+this.props.obj.station);
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
                   {this.props.obj.arrival}
               </td>
               <td>
                   {this.props.obj.deparcher}
               </td>
               <td>
                   {this.props.obj.station}
               </td>
               <td>
                   <Link to={"/adminedittrain/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;