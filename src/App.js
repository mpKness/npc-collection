import { useQuery, useMutation, gql } from '@apollo/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateNpc from './pages/create-npc/CreateNpc';

const getAllNpc = gql`
 query {
  allNpcs {
    data {
      age
      name
      race
      gender
    }
  }
}
`

const createNpc = gql`
  mutation createNpc($data: NpcInput!) {
    createNpc(data: $data) {
      _id
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(getAllNpc)
  const [createItem] = useMutation(createNpc, {
    refetchQueries: [{ query: getAllNpc }],
    onCompleted: () => {
      console.log('completed')
    },
  })
  
  const handleClick = (event) => {
    event.preventDefault();
    createItem({
      variables: {
        data: {
          name: "Joe",
          age: 31,
          gender: "Male",
          race: "human"
    }}})
  }
  console.log(data)
  return (
    <Router>
      <Switch>
        <Route exact path="/create"><CreateNpc /></Route>
      </Switch>
    </Router>
  )
}

export default App;
