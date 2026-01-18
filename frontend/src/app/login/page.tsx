import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: 'auto', paddingTop: '100px' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required style={{ color: 'black', padding: '0.5rem' }} />

        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required style={{ color: 'black', padding: '0.5rem' }} />

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button formAction={login} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Log in</button>
          <button formAction={signup} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Sign up</button>
        </div>
      </form>
    </div>
  )
}