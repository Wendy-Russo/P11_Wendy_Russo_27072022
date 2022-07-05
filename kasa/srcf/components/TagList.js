import '../styles/tagList.css'

function TagList (props){

    const TAGS = props.tags;

    for(let i = 0 ; i < TAGS.length ; i++){
        TAGS.id = i;
    }

    return(
        <div className="tagList">
            {TAGS.map( (tag,id) => (<p key={id}>{tag}</p>))}
        </div>
    );

}

export default TagList