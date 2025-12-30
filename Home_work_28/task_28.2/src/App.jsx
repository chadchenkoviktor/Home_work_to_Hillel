import { Form } from 'react-final-form'
import UserForm from './components/UserForm';

const validateForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  }

  return errors;
}

const App = () => {
  const handleSubmit = (values) => {
    console.log('submit', values);
  }

  return (
    <Form render={UserForm} onSubmit={handleSubmit} validate={validateForm}/>
  )
}

export default App
