import axios from "axios";
export default {
    getAllPrograms: function (id) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/programs/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        });
    },
    getAllEvents: function (id) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/events/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
           
        })
    },
    getUserInformationFromDb: function () {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/users/information",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    getUserAccountInfoFromDb: function(){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        return axios({
            method: "GET",
            url: "/api/users/account",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    cancelEventRegistration: function(id){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        console.log(token + "inside cancelEventRegistration")
        console.log(id);
        return axios({
            method: "DELETE",
            url: "/api/events/removal/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    cancelProgramRegistration: function(id){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        console.log(token + "inside cancelEventRegistration")
        console.log(id);
        return axios({
            method: "DELETE",
            url: "/api/programs/removal/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },




    getOrganizationsPromos: function (id) {
        console.log("inside of getOrganizationPromoEvents" + id)
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        console.log(token)
        return axios({
            method: "GET",
            url: "/api/events/promos/"+ id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },

    getCalendarEventPrograms: function(id) {
        console.log("inside calendar");
        return axios.get("/api/events/allevents/" + id);
    
    },
    getUserPrograms: function(){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/users/registeredprograms",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    getUserEventsProgramCalendar: function(){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        return axios({
            method: "GET",
            url: "/api/users/calendar",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    getUserBills: function (){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        return axios({
            method: "GET",
            url: "/api/bills",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        }) 
    }


}