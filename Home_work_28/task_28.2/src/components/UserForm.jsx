import { Field } from 'react-final-form'
import Input from './input';
import Button from '@mui/material/Button';

const UserForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit ={ handleSubmit }>
            <Field name='email' label='email' component={Input}/>
            <br/>
            <Field name='password' label='password' component={Input}/>
            <br/>
            <Button variant="outlined" type='submit'>Send</Button>
        </form>
    );
}

export default UserForm