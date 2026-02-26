import tokens from '../theme/tokens';

const PrimaryButton = ({ children, fullWidth = true, disabled = false, ...props }) => (
  <button
    type="button"
    disabled={disabled}
    style={{
      width: fullWidth ? '100%' : 'auto',
      border: 'none',
      borderRadius: tokens.radius.md,
      padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
      backgroundColor: disabled ? tokens.colors.border : tokens.colors.primary,
      color: tokens.colors.surface,
      fontWeight: tokens.typography.weight.semibold,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
