import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"

export const projects = [
    {
        img : proj1,
        title : "Airline Reservation System",
        details: `This project aimed at creating a Web app where users can book seats from different flights and admin can update
                    different flight schedules Database design principles like normalization was used to create scalable and non-redundant database.
                    Frontend part is done using React JS framework and Backend part is done using Express JS framework`
    },
    {
        img: proj2,
        title: "Go Local Web App",
        details: `This project aimed at creating web app where users can know availability of products in local shops of NITK, and also
        reserve them using real-time chat with shopkeeper.Front-end was built using React JS framework to provide good UI/UX experience
        Backend development was done using Express JS frameworks and also includes a real-time chat feature using
        web-sockets.Database services provided by MongoDb, a NoSQL Database was used to store records of user and shopkeeper for
        authentication and records of products available in each shop`
    }
]

//export default projects