import tokens from '../theme/tokens';

const InputField = ({ label, type = 'text', ...props }) => (
  <label style={{ display: 'grid', gap: tokens.spacing.sm }}>
    {label && (
      <span style={{ color: tokens.colors.textSecondary, fontSize: tokens.typography.body.md }}>{label}</span>
    )}
    <input
      type={type}
      style={{
        border: `1px solid ${tokens.colors.border}`,
        borderRadius: tokens.radius.md,
        padding: tokens.spacing.md,
        fontSize: tokens.typography.body.lg,
        outlineColor: tokens.colors.primary
      }}
      {...props}
    />
  </label>
);

export default InputField;
