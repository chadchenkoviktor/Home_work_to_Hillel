import InputText from "../InputText/InputText";
import InputPassword from "../InputPassword/InputPassword";
import SendForm from '../SendForm/SendForm';
import BlockLogo from "../BlockLogo/BlockLogo";
import './Form.css'


const Form = () => {
    return (
        <div className="form">
            <BlockLogo />
            <InputText />
            <InputPassword />
            <SendForm />
        </div> 
    )
}

export default Form