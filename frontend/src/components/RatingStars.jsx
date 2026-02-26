import tokens from '../theme/tokens';

const RatingStars = ({ value = 0, outOf = 5 }) => (
  <div aria-label={`Rating ${value} of ${outOf}`} style={{ color: tokens.colors.warning, letterSpacing: '2px' }}>
    {Array.from({ length: outOf }, (_, index) => (index < Math.round(value) ? '★' : '☆')).join('')}
  </div>
);

export default RatingStars;
