import "./components.css";

export default function TopMenu() {
    
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    return (
        <div className="w3-top">
            <div className="w3-white w3-xlarge" style={{maxWidth: "1200px", margin: "auto"}}>
                <div className="w3-button w3-padding-16 w3-left" onClick={w3_open}>☰</div>
                <div className="w3-right w3-padding-16">marcos.dolce</div>
                <div className="w3-center w3-padding-16">React Demo GL</div>
            </div>
        </div>
    )
}