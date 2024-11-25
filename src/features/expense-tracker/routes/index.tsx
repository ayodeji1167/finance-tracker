import { RouteError } from '@/components/error/ErrorElement';
import { lazyImport } from '@/utils/lazyImports';
import { Outlet, RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import { Transactions } from '../components/transaction/Transactions';
const { Home } = lazyImport(() => import('../components/Home'), 'Home');

export const ExpenseTrackerRouteList: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/transactions',
    element: <Transactions />,
  },
];

const LandingPageRouteOutlet = (
  <Layout>
    <Outlet />
  </Layout>
);
export const ExpenseTrackerPageRoutes: RouteObject = {
  path: '',
  element: LandingPageRouteOutlet,
  errorElement: <RouteError />,
  children: ExpenseTrackerRouteList,
};
