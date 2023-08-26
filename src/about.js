import Sidebar from "./components/sidebar";
import TopMenu from "./components/topMenu";

export default function About() {
  return (
    <>
      <Sidebar></Sidebar>
      <TopMenu></TopMenu>
      <div id="about" style={{ width: '100%', marginTop: "100px" }} classNameName="w3-main w3-content w3-padding">

        <div className="w3-container w3-padding-32 w3-center">
          <h3>About Me, The Food Man</h3>
          <img src="https://www.w3schools.com/w3images/chef.jpg" alt="Me" className="w3-image" style={{ display: "block", margin: "auto", width: "800px", height: "533px" }}></img>
          <div className="w3-padding-32">
            <h4><b>I am Who I Am!</b></h4>
            <h6><i>With Passion For Real, Good Food</i></h6>
            <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
        </div>
      </div>
    </>
  );
}