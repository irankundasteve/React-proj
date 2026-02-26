import tokens from '../theme/tokens';

const CategoryChip = ({ category, selected = false }) => (
  <button
    type="button"
    style={{
      border: `1px solid ${selected ? tokens.colors.primary : tokens.colors.border}`,
      borderRadius: tokens.radius.pill,
      background: selected ? tokens.colors.primaryLight : tokens.colors.surface,
      color: selected ? tokens.colors.primaryDark : tokens.colors.textPrimary,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`
    }}
  >
    {category.icon} {category.name}
  </button>
);

export default CategoryChip;
