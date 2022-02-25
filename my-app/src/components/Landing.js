import Collage from "./Collage";
import './landing.css';
import Header from "./Header";
import Stats from "./stats";
import RadialMenu from "./RadialMenu";
import WhyWeFund from "./WhyWeFund";
import Sucess from '../images/security.png';
import Users from '../images/people.png';
import Bag from '../images/loan.png';
import Tools from '../images/settings.png';
import Heart from '../images/heart-shape-outline-with-lifeline.png';
import Happy from '../images/smiley.png';

const Landing=(props)=>{
    const points =[
        {
            id:'1',
            icon:Sucess,
            info:'Best fundraising success rate',
        },
        {
            id:'2',
            icon:Users,
            info:'Supported By 55,00,000+ Donors',
        },
        {
            id:'3',
            icon:Bag,
            info:'Withdraw Funds Without Hassle',
        },
        {
            id:'4',
            icon:Tools,
            info:'Easy-To-Manage Tools To Boost Results',
        },
        {
            id:'5',
            icon:Heart,
            info:'help save lives all over the world',
        },
        {
            id:'6',
            icon:Happy,
            info:'Spreading happiness and making more smiles',
        }
    ]
    return(
        <div>
            <Header/>
            <div className="Collage_Main">
                <Collage/>
            </div>
            <Stats/>
            <RadialMenu/>
            <div className="why__row">
                {points.map((item)=>(
                    <WhyWeFund info={item.info}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default Landing;