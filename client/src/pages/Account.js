

import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import API from "../utils/API";
import AccountInfoCard from "../components/AccountInfoCard"
import AccountEventCard from "../components/AccountEventCard";
import EventList from "../components/EventList";

class Account extends Component{
    
    state={
        events:[],
        information:[]
    }

    componentDidMount(){
        this.userAccountInfo();
        this.getUserEvents()
    }
    userAccountInfo(){
        API.getUserAccountInfoFromDb()
        .then(results =>{
            console.log(results)
            this.setState({information: results.data})
        })
    }
    getUserEvents(){
        API.getUserInformationFromDb()
        .then(dataRes => {
          console.log ("line 33 "+dataRes.data);
          this.setState({events: dataRes.data})
          
        })
        console.log("ine 37"+this.state.events);
    }





    render(){
        return(
            <div>
                <Nav></Nav>
                <div class="container">
                    <Row>
                        <Col size="6">
                        {this.state.information.map(data =>(
                        
                          <AccountInfoCard
                          firstName= "Jerrica"
                          lastName = "VanAlstyne"
                          street= {data.street}
                          zipcode={data.zipcode}
                          stateCode = {data.stateCode}
                          city = {data.city}
                          />
                            
                        ))}
                        </Col>
                        <Col size ="6">
                          <AccountEventCard>
                        {this.state.events.map(event =>(
                        
                        <EventList
                        name= {event.name}
                        />
                          
                      ))}
                      </AccountEventCard>  
                            
                        </Col>
                    </Row>

                </div>
                <Footer></Footer>
            </div>
        )
    }



}

export default Account;