import tokens from '../theme/tokens';

export const shellStyle = {
  minHeight: '100vh',
  background: `linear-gradient(180deg, ${tokens.colors.background}, #fff)`,
  display: 'flex',
  justifyContent: 'center',
  padding: tokens.spacing.xl,
  fontFamily: tokens.typography.fontFamily
};

export const phoneFrameStyle = {
  width: '100%',
  maxWidth: 430,
  background: tokens.colors.surface,
  border: `1px solid ${tokens.colors.border}`,
  borderRadius: 28,
  boxShadow: tokens.shadow.frame,
  padding: tokens.spacing.lg,
  display: 'grid',
  gap: tokens.spacing.lg
};
