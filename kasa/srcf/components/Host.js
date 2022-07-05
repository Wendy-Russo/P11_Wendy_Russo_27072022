import '../styles/host.css'

function Host (props){

    const FIRST_NAME = props.host.name.split(" ")[0];
    const LAST_NAME = props.host.name.split(" ")[1];
    const IMG_URL = props.host.picture;
    console.log(FIRST_NAME)

    return(
        <div className="host">
            <div className='hostName'>
                <p>
                    {FIRST_NAME}
                </p>
                <p>
                    {LAST_NAME}
                </p>
            </div>
            <div>
                <img src={IMG_URL}></img>
            </div>
        </div>
    );

}

export default Host