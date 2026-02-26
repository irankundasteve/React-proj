import { AppHeader, PrimaryButton } from '../components';
import tokens from '../theme/tokens';
import { shellStyle, phoneFrameStyle } from './pageStyles';

const Onboarding = () => (
  <main style={shellStyle}>
    <section style={phoneFrameStyle}>
      <AppHeader title="Onboarding" subtitle="Welcome to QuickBite" />
      <div
        style={{
          borderRadius: tokens.radius.md,
          background: tokens.colors.primaryLight,
          padding: tokens.spacing.lg,
          color: tokens.colors.primaryDark,
          lineHeight: 1.5
        }}
      >
        This screen is ready for routing integration and backend wiring.
      </div>
      <PrimaryButton>Continue</PrimaryButton>
    </section>
  </main>
);

export default Onboarding;
