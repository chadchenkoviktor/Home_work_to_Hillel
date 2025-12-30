
import { useFormField } from "./hooks/useFormField";

const App = () => {
    const [ email, handleChangeEmail ] = useFormField();
    const [ password, handleChangePassword ] = useFormField();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value, event.target.password.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input type="email" name='email' value={email} onChange={handleChangeEmail}/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" name='password' value={password} onChange={handleChangePassword}/>
      </label>
      <button>Send</button>
    </form>
  )
}

export default App;