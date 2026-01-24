import './InputPassword.css'
import VisibilityIcon from '@mui/icons-material/Visibility';


const InputPassword = () => {
    return (
        <input type="password" placeholder="Password" className="inputPassword">{VisibilityIcon}</input>
    )
}

export default InputPassword