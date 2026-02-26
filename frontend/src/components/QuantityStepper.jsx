import tokens from '../theme/tokens';

const QuantityStepper = ({ value = 1, onDecrement = () => {}, onIncrement = () => {} }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: tokens.spacing.md }}>
    <button type="button" onClick={onDecrement} style={{ borderRadius: tokens.radius.pill, border: `1px solid ${tokens.colors.border}` }}>
      -
    </button>
    <strong>{value}</strong>
    <button type="button" onClick={onIncrement} style={{ borderRadius: tokens.radius.pill, border: `1px solid ${tokens.colors.border}` }}>
      +
    </button>
  </div>
);

export default QuantityStepper;
