import './landing.css';
import dogs_landing from '../images/dogs_landing.png';
import education_landing from '../images/education_landing.jpg';
import medical_landing from '../images/medical_landing.jpg';
import children_landing from '../images/children_landing.jpg';

const collage= ()=>{
    return(
        <div>
            <div className='img1'><img src={dogs_landing} className="Collage_img"></img></div>
            <div className='img2'><img src={education_landing} className="Collage_img"></img></div>
            <div className='img3'><img src={medical_landing} className="Collage_img"></img></div>
            <div className='img4'><img src={children_landing} className="Collage_img"></img></div>
            <div className='Collage_tagline'><span className='tagline'>Need Funds to Pay For a Medical Emergency or Social Cause?</span></div>
        </div>
    );
}

export default collage;