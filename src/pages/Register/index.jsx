import Layouts from "../../layouts"
import Login from "../../components/Login"

const Register = () => {
  return (
    <div>
      <Layouts>
        <Login buttonText={"Login"} pathText={"/"}/>
      </Layouts>
    </div>
  )
}

export default Register
