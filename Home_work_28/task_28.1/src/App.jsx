

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input type="email" name='email'/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" name='password'/>
      </label>
      <button>Send</button>
    </form>
  )
}

export default App;
