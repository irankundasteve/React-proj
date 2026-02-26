import { AppHeader, PriceSummary, PrimaryButton } from '../components';
import { shellStyle, phoneFrameStyle } from './pageStyles';

const Checkout = () => (
  <main style={shellStyle}>
    <section style={phoneFrameStyle}>
      <AppHeader title="Checkout" subtitle="Review and place your order" />
      <PriceSummary subtotal={28.5} delivery={2.99} tax={1.47} />
      <PrimaryButton>Place Order</PrimaryButton>
    </section>
  </main>
);

export default Checkout;
