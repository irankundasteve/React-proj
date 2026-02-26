import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/menu', label: 'Menu' },
  { to: '/cart', label: 'Cart' },
  { to: '/orders', label: 'Orders' },
  { to: '/profile', label: 'Profile' },
  { to: '/wallet', label: 'Wallet' },
  { to: '/settings', label: 'Settings' },
];

export default function MainLayout() {
  return (
    <div className="app-shell">
      <header>
        <h1>Food Delivery</h1>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
