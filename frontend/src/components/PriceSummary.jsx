import tokens from '../theme/tokens';

const PriceSummary = ({ subtotal = 0, delivery = 0, tax = 0 }) => {
  const total = subtotal + delivery + tax;

  const Row = ({ label, value, bold = false }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: bold ? tokens.typography.weight.bold : tokens.typography.weight.regular }}>
      <span>{label}</span>
      <span>${value.toFixed(2)}</span>
    </div>
  );

  return (
    <section style={{ background: tokens.colors.surface, borderRadius: tokens.radius.md, padding: tokens.spacing.lg, display: 'grid', gap: tokens.spacing.sm }}>
      <Row label="Subtotal" value={subtotal} />
      <Row label="Delivery" value={delivery} />
      <Row label="Tax" value={tax} />
      <hr style={{ border: 0, borderTop: `1px solid ${tokens.colors.border}`, width: '100%' }} />
      <Row label="Total" value={total} bold />
    </section>
  );
};

export default PriceSummary;
