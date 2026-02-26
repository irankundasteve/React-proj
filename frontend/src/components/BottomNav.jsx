import tokens from '../theme/tokens';

const BottomNav = ({ items = [], active }) => (
  <nav
    style={{
      position: 'sticky',
      bottom: 0,
      background: tokens.colors.surface,
      borderTop: `1px solid ${tokens.colors.border}`,
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length || 1}, 1fr)`,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`
    }}
  >
    {items.map((item) => (
      <button
        type="button"
        key={item.key}
        style={{
          border: 'none',
          background: 'transparent',
          color: active === item.key ? tokens.colors.primary : tokens.colors.textSecondary,
          fontWeight: active === item.key ? tokens.typography.weight.semibold : tokens.typography.weight.regular
        }}
      >
        {item.label}
      </button>
    ))}
  </nav>
);

export default BottomNav;
