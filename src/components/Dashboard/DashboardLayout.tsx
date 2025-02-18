import { AppLayout } from '../Layout';
import { Outlet } from 'react-router-dom';
// type DashboardLayoutProps = {
//   setAccountType: any;
// };
export const DashboardLayout = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
