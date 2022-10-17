import { Link } from 'react-router-dom';

export const BackPage = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};