import Footer from "./Footer";
import Header from "./Header";
import './App.css';

function Contact(){
  let content = "This is my variable in Contact";

  return (
    <div className="Page">
      <Header/>
      <h2>
        Please submit in the contact form.
      </h2>
      {/* <h2>{name}</h2> */}
      <form className="Contact-form">
        <div>
          <label>Title</label>
        </div>
        <div>
          <input type="text" placeholder="Please enter the title."></input>
        </div>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input type="text" placeholder="Please enter your name."></input>
        </div>
        <div>
          <label>Message</label>
        </div>
        <div className="Message_box">
          <textarea placeholder="Please enter your messages."></textarea>
        </div>
        <div>
          <button id="submit_btn" type="button" value="submit">Submit</button>
        </div>
      </form>
      <Footer/>
    </div>
  );
}

export default Contact;