import { useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Insert from '../../helpers/UI_Helpers/NewPostHelper/Insert'

const CreatePost = () => {
  const login = useSelector((state)=>state.login.value)
  let navigate = useNavigate();
  
return (
  login.isLoggedIn ?
      <div>
          <Insert/>
      </div>:<p>No Permission For This {navigate("/")}</p>
    )
  }
 
export default CreatePost