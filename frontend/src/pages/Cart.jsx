import { AppHeader, QuantityStepper, PrimaryButton } from '../components';
import { foods } from '../data/mockData';
import { shellStyle, phoneFrameStyle } from './pageStyles';

const Cart = () => (
  <main style={shellStyle}>
    <section style={phoneFrameStyle}>
      <AppHeader title="Cart" subtitle="Adjust quantities before checkout" />
      <div style={{ display: 'grid', gap: 12 }}>
        {foods.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{item.name}</span>
            <QuantityStepper value={1} />
          </div>
        ))}
      </div>
      <PrimaryButton>Proceed to Checkout</PrimaryButton>
    </section>
  </main>
);

export default Cart;
