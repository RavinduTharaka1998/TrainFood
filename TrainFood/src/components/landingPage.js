import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from './footer';
import './css/LandingPage.css';


class LandingPage extends Component{

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
                    
                    <div className='tittle-bottom'>
                        <img src = "https://wallpaperaccess.com/full/1316970.jpg" alt ="food image" width={900} className='main-image'/>

                        <h2>Our Servive</h2>
                        <br/> <br/>
                        <p>We're past the days when pizza was the primary food delivery option. 
                            You can now get almost any food imaginable delivered to 
                            your door without getting out of your pajamas. 
                        </p>
                        <p>
                            Food delivery services, such as Postmates, GrubHub and DoorDash, can bring you meals from your favorite chain restaurant or the local diner. 
                            With so many food delivery service apps, figuring out the best one can be hard. We've evaluated how easy it is to use these apps, 
                            how many restaurants each app works with, how steep the delivery and service fees are and how long the estimated delivery time is for each.   
                            We selected restaurants near each other and about 5 miles from a suburban location. We also examined how delivery to an urban area influenced time and costs. 
                            We ordered similarly priced items from all locations in each app to help determine additional fees, and we looked at these services around midday during the week in 
                            February.

                            Here's a roundup of our favorite food delivery service apps that you can download from the Apple App Store or the Google Play store. 

                            Note: Your experience will likely vary depending on your location, dietary restrictions, the time of day you order and any available promotions. 
                        </p>
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
        );
    }
}

export default LandingPage;