
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Stats = ()=>{
    return (
        <div className="stats">
            <div className="stats__container">
                <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                        <h1 className="stat__number">
                        {isVisible ? <CountUp start={0} end={50} /> : "0"} Lakh +
                        </h1>
                    )}
                </VisibilitySensor>
                <div className="stats__name">DONORS</div>
            </div>
            <div className="stats__container">
                <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                        <h1 className="stat__number">
                        Over {isVisible ? <CountUp start={0} end={55} /> : "0"} Lakh
                        </h1>
                    )}
                </VisibilitySensor>
                <div className="stats__name">FUNDRAISERS</div>
            </div>
            <div className="stats__container">
                <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                        <h1 className="stat__number">
                        {isVisible ? <CountUp start={0} end={45} /> : "0"} Lakh +
                        </h1>
                    )}
                </VisibilitySensor>
                <div className="stats__name">RECOVER</div>
            </div>
        </div>
    );
}

export default Stats;