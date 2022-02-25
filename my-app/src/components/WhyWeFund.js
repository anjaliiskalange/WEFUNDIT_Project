import './WhyWeFund.css';


const WhyWeFund= (props)=>{
    return(
        <div>
            <div className='why__point'>
                <img src={props.icon} className="why__logo"></img>
                <div className='why__text'>{props.info}</div>
            </div>
        </div>
    );
}

export default WhyWeFund;