import Footer from "./Footer";
import Header from "./Header";
import './App.css';

function Home(){
  let content = "This is my content in Home";

  return (
    <div className="Page">
      <Header/>
      <h2>
        This is the heading of Home.
      </h2>
      <p>{content}</p>
      <Footer/>
    </div>
  );
}

export default Home;