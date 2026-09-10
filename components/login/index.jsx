import "./index.css";

export default function LoginForm({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>☕ Tea House</h1>
        <h2>Admin Login</h2>

       <form
  onSubmit={(e) => {
    e.preventDefault();
    onLogin();
  }}
>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}