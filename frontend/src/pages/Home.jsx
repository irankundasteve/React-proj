import { AppHeader, BottomNav, CategoryChip, FoodCard } from '../components';
import { categories, foods } from '../data/mockData';
import { shellStyle, phoneFrameStyle } from './pageStyles';

const Home = () => (
  <main style={shellStyle}>
    <section style={phoneFrameStyle}>
      <AppHeader title="Home" subtitle="Discover your next meal" />
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto' }}>
        {categories.map((category, index) => (
          <CategoryChip key={category.id} category={category} selected={index === 0} />
        ))}
      </div>
      <div style={{ display: 'grid', gap: 12 }}>
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
      <BottomNav
        active="home"
        items={[
          { key: 'home', label: 'Home' },
          { key: 'search', label: 'Search' },
          { key: 'cart', label: 'Cart' },
          { key: 'profile', label: 'Profile' }
        ]}
      />
    </section>
  </main>
);

export default Home;
