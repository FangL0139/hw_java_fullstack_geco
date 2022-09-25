import Footer from "./Footer";
import Header from "./Header";
import './App.css';

function About(){
  let content = "This is content in About";

  return (
    <div className="Page">
      <Header/>
      <h2>
        This is the heading of About.
      </h2>
      <p>{content}</p>
      <Footer/>
    </div>
  );
}

export default About;