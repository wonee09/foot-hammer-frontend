import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Layout from './Layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
