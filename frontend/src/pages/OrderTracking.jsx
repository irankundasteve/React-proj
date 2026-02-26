import { AppHeader, PrimaryButton } from '../components';
import tokens from '../theme/tokens';
import { shellStyle, phoneFrameStyle } from './pageStyles';

const OrderTracking = () => (
  <main style={shellStyle}>
    <section style={phoneFrameStyle}>
      <AppHeader title="Order Tracking" subtitle="Track your delivery in real-time" />
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
      <PrimaryButton>View More</PrimaryButton>
    </section>
  </main>
);

export default OrderTracking;
