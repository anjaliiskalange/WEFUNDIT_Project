import Collage from "./Collage";
import './landing.css';
import Header from "./Header";
import Stats from "./stats";

const Landing=()=>{
    return(
        <div>
            <Header/>
            <div className="Collage_Main">
                <Collage/>
            </div>
            <Stats/>
        </div>
    );
}

export default Landing;