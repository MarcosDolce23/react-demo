import "./components.css";

export default function Pagination({ prevPage, nextPage }) {

    return (
        <div className="w3-center w3-padding-32">
            <div className="w3-bar">
                <a href="#" className="w3-bar-item w3-button w3-hover-black" onClick={prevPage}>«</a>
                <a href="#" className="w3-bar-item w3-button w3-hover-black" onClick={nextPage}>»</a>
            </div>
        </div>
    )
}