import { createBrowserRouter, useLocation } from 'react-router-dom';
import React, { ReactNode, useEffect, useState } from 'react';
import SignIn from '../pages/Auth/SignIn';
import ResetPassword from '../pages/Auth/Reset';
import { DashboardLayout } from '../components/Dashboard/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Teller from '../pages/Dashboard/Teller/Teller';
import SearchTeller from '../pages/Dashboard/Teller/SearchTeller';
import TellerInfo from '../pages/Dashboard/Teller/TellerData';
import CustomerPage from '../pages/Customer/Customer';
import DepositAccount from '../pages/Account/DepositAccount';
import LoanAccount from '../pages/Account/LoanAccount';
import VaultAccount from '../pages/Account/VaultAccount';
import TillManagement from '../pages/Account/TillManagement';
import Disbursement from '../pages/Disbursement/Disbursement';
import Batches from '../pages/Disbursement/Batches';
import Partial from '../pages/Disbursement/Partial';
import Pending from '../pages/Disbursement/Pending';
import Source from '../pages/Disbursement/Source';
import Transaction from '../pages/Transaction/Transaction';
import LoanTransaction from '../pages/Transaction/LoanTransaction';
import DepositTransaction from '../pages/Transaction/DepositTransaction';
import TellerTransaction from '../pages/Transaction/TellerTransaction';
import PendingTransaction from '../pages/Transaction/PendingTransaction';
import LedgerTransaction from '../pages/Transaction/LedgerTransaction';
// import {
//   AccountDeactivePage,
//   BiddingDashboardPage,
//   CorporateAboutPage,
//   CorporateContactPage,
//   CorporateFaqPage,
//   CorporateTeamPage,
//   DefaultDashboardPage,
//   EcommerceDashboardPage,
//   Error400Page,
//   Error403Page,
//   Error404Page,
//   Error500Page,
//   Error503Page,
//   ErrorPage,
//   SchoolDashboardPage,
//   PasswordResetPage,
//   DinepointDashboardPage,
//   SignInPage,
//   SignUpPage,
//   SitemapPage,
//   SocialDashboardPage,
//   UserProfileActionsPage,
//   UserProfileActivityPage,
//   UserProfileDetailsPage,
//   UserProfileHelpPage,
//   UserProfileInformationPage,
//   UserProfileSecurityPage,
//   VerifyEmailPage,
//   WelcomePage,
//   LearningDashboardPage,
//   LogisticsDashboardPage,
// } from '../pages';
// import {
//   DashboardLayout,
//   UserAccountLayout,
// } from '../layouts';

// import { AboutPage } from '../pages/About.tsx';
// import { AttendanceDashboardPage } from '../pages/dashboards/Attendance.tsx';
// import CommissionBreakdown from '../pages/dashboards/CommissionBreakdown.tsx';
// import CustomerManagementDashboard from '../pages/dashboards/CustomerManagement.tsx';
// import ManagementDashboard from '../pages/dashboards/ManagementDashboard.tsx';
// import TargetModal from '../pages/dashboards/TrackerModal.tsx';
// import { TransactionPage } from '../pages/dashboards/Transaction.tsx';
// import { CollaborationPage } from '../pages/dashboards/Collaboration.tsx';

// Custom scroll restoration function

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    }); // Scroll to the top when the location changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

type PageProps = {
  children: ReactNode;
};

// Create an HOC to wrap your route components with ScrollToTop
const PageWrapper = ({ children }: PageProps) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <SignIn/>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PageWrapper children={<DashboardLayout/>} />,
    //errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: 'default',
        element: <Dashboard/>,
      },
      {
        path: 'teller',
        element: <Teller/>,
      },
      {
        path: 'teller/search',
        element: <SearchTeller/>,
      },
      {

        path: 'teller/data',
        element: <TellerInfo/>,
      },
      {
        path: 'customer',
        element: <CustomerPage/>,
      },
      {
        path: 'account',
        element: <DepositAccount/>,
      },
      {
        path: 'account/loan',
        element: <LoanAccount/>,
      },
      {
        path: 'account/vault',
        element: <VaultAccount/>,
      },
      {
        path: 'account/till',
        element: <TillManagement/>,
      },
      {
        path: 'disbursement',
        element: <Disbursement/>,
      },
      {
        path: 'disbursement/batches',
        element: <Batches/>,
      },
      {
        path: 'disbursement/partial',
        element: <Partial/>,
      },
      {
        path: 'disbursement/pending',
        element: <Pending/>,
      },
      {
        path: 'disbursement/source',
        element: <Source/>,
      },
      {
        path: 'transaction',
        element: <Transaction/>,
      },
      {
        path: 'transaction/loan',
        element: <LoanTransaction/>,
      },
      {
        path: 'transaction/deposit',
        element: <DepositTransaction/>,
      },
      {
        path: 'transaction/teller',
        element: <TellerTransaction/>,
      }, 
      {
        path: 'transaction/pending',
        element: <PendingTransaction/>,
      }, 
      {
        path: 'transaction/ledger',
        element: <LedgerTransaction/>,
      }, 
      //   path: 'attendance',
      //   element: <AttendanceDashboardPage />,
      // },
      // {
      //   path: 'commission',
      //   element: <CommissionBreakdown />,
      // },
      // {
      //   path: 'customer',
      //   element: <CustomerManagementDashboard customers={[]} role={'PM'} />,
      // }, 
      // {
      //   path: 'management',
      //   element: <ManagementDashboard />,
      // },
      // {
      //   path: 'transaction',
      //   element: <TransactionPage />,
      // },
      // {
      //   path: 'contribution',
      //   element: <CollaborationPage />,
      // },
      // {
      //   path: 'target',
      //   element: <TargetModal />,
      // },
      // {
      //   path: 'dinepoint',
      //   element: <DinepointDashboardPage />,
      // },
      // {
      //   path: 'ecommerce',
      //   element: <EcommerceDashboardPage />,
      // },
      // {
      //   path: 'school',
      //   element: <SchoolDashboardPage />,
      // },
      // {
      //   path: 'social',
      //   element: <SocialDashboardPage />,
      // },
      // {
      //   path: 'bidding',
      //   element: <BiddingDashboardPage />,
      // },
      // {
      //   path: 'learning',
      //   element: <LearningDashboardPage />,
      // },
      // {
      //   path: 'logistics',
      //   element: <LogisticsDashboardPage />,
      // },
    ],
  },
  // {
  //   path: '/sitemap',
  //   element: <PageWrapper children={<DashboardLayout />} />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       path: '',
  //       element: <SitemapPage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/downlines',
  //   element: <PageWrapper children={<DashboardLayout />} />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       path: 'about',
  //       element: <CorporateAboutPage />,
  //     },
  //     {
  //       path: 'team',
  //       element: <CorporateTeamPage />,
  //     },
  //     {
  //       path: 'faqs',
  //       element: <CorporateFaqPage />,
  //     },
  //     {
  //       path: 'contact',
  //       element: <CorporateContactPage />,
  //     },
  
  //   ],
  // },
  // {
  //   path: '/user-profile',
  //   element: <PageWrapper children={<UserAccountLayout />} />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       path: 'details',
  //       element: <UserProfileDetailsPage />,
  //     },
  //     {
  //       path: 'information',
  //       element: <UserProfileInformationPage />,
  //     },
  //     {
  //       path: 'security',
  //       element: <UserProfileSecurityPage />,
  //     },
  //     {
  //       path: 'activity',
  //       element: <UserProfileActivityPage />,
  //     },
  //     {
  //       path: 'actions',
  //       element: <UserProfileActionsPage />,
  //     },
  //     {
  //       path: 'faq',
  //       element: <UserProfileHelpPage />,
  //     },
  //   ],
  // },
  {
    path: '/auth',
    //errorElement: <ErrorPage />,
    children: [
      {
        path: 'password-reset',
        element: <ResetPassword />,
      },
    ],
  },
  // {
  //   path: 'errors',
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: '400',
  //       element: <Error400Page />,
  //     },
  //     {
  //       path: '403',
  //       element: <Error403Page />,
  //     },
  //     {
  //       path: '404',
  //       element: <Error404Page />,
  //     },
  //     {
  //       path: '500',
  //       element: <Error500Page />,
  //     },
  //     {
  //       path: '503',
  //       element: <Error503Page />,
  //     },
  //   ],
  // },
  // {
  //   path: '/about',
  //   element: <PageWrapper children={<DashboardLayout />} />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       path: '',
  //       element: <AboutPage />,
  //     },
  //   ],
  // },
]);

export default router;
