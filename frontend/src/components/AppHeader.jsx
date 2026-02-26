import tokens from '../theme/tokens';

const AppHeader = ({ title, subtitle, action }) => (
  <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: tokens.spacing.md }}>
    <div>
      <h1 style={{ margin: 0, fontSize: tokens.typography.heading.h2 }}>{title}</h1>
      {subtitle && <p style={{ margin: `${tokens.spacing.xs} 0 0`, color: tokens.colors.textSecondary }}>{subtitle}</p>}
    </div>
    {action}
  </header>
);

export default AppHeader;
