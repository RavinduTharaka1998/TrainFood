import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';
import './css/LandingPage.css';

export default  class SignIn extends  Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
        }
    }
    onChangeEmail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();


        const Email = this.state.email;
        let object = {
            email : this.state.email,
            password : this.state.password
        };

        if ((this.state.email === "admin") && (this.state.password === "adminMatara")) {
             const Station = "Matara";
             this.props.history.push('/adminhome/'+Station);

        }
        else if ((this.state.email === "admin") && (this.state.password === "adminGalle")) {

            const Station = "Galle";
            this.props.history.push('/adminhome/'+Station);

       }
       else if ((this.state.email === "admin") && (this.state.password === "adminColombo")) {

        const Station = "Colombo";
        this.props.history.push('/adminhome/'+Station);

       }else {
            axios.post('http://localhost:4000/trainFood/login',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        // alert(res.data.message)
                        // alert(Email)
                        this.props.history.push('/index/'+Email);
                    }
                    else{
                        // alert(res.data.message)
                        this.props.history.push('/signIn');
                    }

                });
        }
        

    }

    render() {
        return(
            <div>
                <div class="sidebar">
                    <a href="/">Home</a>
                    <a href="/create">New Customer</a>
                    <a href="/signin">SignIn</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>

                    <div className='inner-menu'>
                        <a href="/signin">Terms & Condition</a>
                        <a href="/about">Setting</a>
                        <a href="/contact">More</a>
                    </div>
                </div>
                <div class="content">
                    <h2 className= 'tittle'>Fast Food</h2>
                    <br/>
                    <div className="container" style={{marginTop:10}}>
                        <h3 className="text-center">Sign In</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username :</label>
                                <input type ="text" className="form-control" placeholder="raone@gmail.com" value={this.state.email} onChange = {this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password :</label>
                                <input type ="password" className="form-control" placeholder="********" value={this.state.password} onChange = {this.onChangePassword}/>
                            </div>
                            <div className="form-group">
                                <input type = "submit" value = "Sign In" className="btn btn-dark"/>
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
