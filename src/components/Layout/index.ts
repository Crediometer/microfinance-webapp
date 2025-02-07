import AppLayout  from './App';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <AppLayout>
      <Outlet/>
    </AppLayout>
  );
};
