import Collage from "./Collage";
import './landing.css';
import Header from "./Header";
import Stats from "./stats";
import RadialMenu from "./RadialMenu";

const Landing=()=>{
    return(
        <div>
            <Header/>
            <div className="Collage_Main">
                <Collage/>
            </div>
            <Stats/>
            <RadialMenu/>
        </div>
    );
}

export default Landing;