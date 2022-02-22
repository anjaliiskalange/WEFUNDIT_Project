import Collage from "./Collage";
import './landing.css';
import Header from "./Header";

const Landing=()=>{
    return(
        <div>
            <Header/>
            <div className="Collage_Main">
                <Collage/>
            </div>
        </div>
    );
}

export default Landing;