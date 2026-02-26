import tokens from '../theme/tokens';
import RatingStars from './RatingStars';

const FoodCard = ({ food }) => (
  <article
    style={{
      background: tokens.colors.surface,
      borderRadius: tokens.radius.lg,
      boxShadow: tokens.shadow.card,
      overflow: 'hidden'
    }}
  >
    <img src={food.image} alt={food.name} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
    <div style={{ padding: tokens.spacing.md }}>
      <h3 style={{ margin: 0, fontSize: tokens.typography.heading.h3 }}>{food.name}</h3>
      <RatingStars value={food.rating} />
      <p style={{ margin: `${tokens.spacing.sm} 0 0`, color: tokens.colors.primary, fontWeight: tokens.typography.weight.bold }}>
        ${food.price.toFixed(2)}
      </p>
    </div>
  </article>
);

export default FoodCard;
