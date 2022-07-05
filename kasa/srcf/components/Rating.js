import '../styles/Rating.css'
//import {ReactComponent  as Star} from '../assets/star.svg'

function Rating (props){

    const RATING = new Array(5);

    for(let i = 0 ; i < 5 ; i++){
        RATING[i] ={color: i < props.starsNumber ? "#FF6060" : "#E3E3E3" , key : i};
    }

    return (
        <div className="rating">
            {RATING.map(({color,key}) => (
                <svg key={key} xmlns="http://www.w3.org/2000/svg" viewBox="4,4,40,40" height="100%" width="100%" fill={color}>
                    <path d="m11.65 44 4.65-15.2 L 4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z"/>
                </svg>
            ))}
        </div>
    )
}

export default Rating