import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './components/Navigation/PrivateRoute';
import Home from './pages/HomePage/HomePage';


export const App: React.FC = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute children={undefined} authUser={undefined}>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
