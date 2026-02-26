import { AppHeader, InputField, PrimaryButton } from '../components';
import { shellStyle, phoneFrameStyle } from './pageStyles';

const SignIn = () => (
  <main style={shellStyle}>
    <section style={phoneFrameStyle}>
      <AppHeader title="Sign In" subtitle="Welcome back" />
      <InputField label="Email" placeholder="name@email.com" />
      <InputField label="Password" type="password" placeholder="••••••••" />
      <PrimaryButton>Sign In</PrimaryButton>
    </section>
  </main>
);

export default SignIn;
