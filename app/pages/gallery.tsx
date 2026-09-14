

const [items, setItems] = useState([])
const [intro, setIntro] = useState("It works but as a state!")

//onready hook, js fetch -> useState([])

export default function Gallery() {

  return <h1>{intro}</h1>;
}
