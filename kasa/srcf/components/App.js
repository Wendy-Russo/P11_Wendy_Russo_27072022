import Rating from "./Rating"
import TagList from "./TagList"
import Host from "./Host"
import Title from "./Title"
import PropretyCard from "./Title"



import logements from "../logements.json"


function App() {
  const CURRENT = logements[10];

  return (
  <div>
    <PropretyCard cover={CURRENT.cover} title = {CURRENT.title} location = {CURRENT.location}/>
    <Title title = {CURRENT.title} location = {CURRENT.location}/>
    <Rating starsNumber = {CURRENT.rating} />
    <Host host = {CURRENT.host} />
    <TagList tags = {CURRENT.tags} />
  </div>)
}

export default App