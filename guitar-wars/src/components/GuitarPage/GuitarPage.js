import { useParams } from "react-router-dom";


const GuitarPage = ({ gtrPlayers }) => {
  
  const params=useParams();
  const gtrFind = gtrPlayers.find((guitarists) => guitarists.id === params.id)

  return (
    

    <div>
      <h1>whatever man</h1>
    </div>
  )


}

export default GuitarPage;