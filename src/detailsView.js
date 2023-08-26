import "./detailsView.css";

export default function DetailsView() {
    return (
        <div className="card">
            <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{ width: "100%" }}></img>
            <h1>John Doe</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <div style={{ margin: "24px 0" }}>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
            </div>
            <p><button>Contact</button></p>
        </div>
    )
}