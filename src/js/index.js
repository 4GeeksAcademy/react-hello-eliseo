//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import Card from "./component/Card.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Cards from "./component/Cards.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(
    <>
    <Navbar/>
    <Jumbotron/>
    <Cards/>
    <Footer/>
    </>
);

