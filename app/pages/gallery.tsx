
import {loadData} from "includes/system"

const [items, setItems] = useState([])
const [intro, setIntro] = useState("It works but as a state!")
let list = <div>nothing</div>;

//data loading
//when component ready
useEffect(() => {
    const response = await fetch('www.api.inaturalist.org/v1/observations');
    const result = await response.json();
    setItems(result);

    //React foreach
    list = items.foreEach((item) =>  {
        <div>item</div>
    }}

  }, []); 



export default function Gallery() {

  return <div>{list}</div>;
}
