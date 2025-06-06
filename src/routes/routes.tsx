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
import ChequeTransaction from '../pages/Transaction/ChequeTransaction';
import UnClearedChequeTransaction from '../pages/Transaction/UnClearedChequeTransaction copy';
import Task from '../pages/Tasks/Tasks';
import Activities from '../pages/Tasks/Activities';
import Branch from '../pages/Tasks/Branch';
import User from '../pages/Tasks/User';
import Platform from '../pages/Tasks/Platform';
import Payroll from '../pages/Tasks/Payroll';
import Mandates from '../pages/Tasks/Mandates';
import Customer from '../pages/Report/Customer';
import Portfolio from '../pages/Report/Loan/Portfolio';
import Due from '../pages/Report/Loan/Due';
import Arrears from '../pages/Report/Loan/Arrears';
import DisbursementLoan from '../pages/Report/Loan/Disbursement';
import ClosedLoan from '../pages/Report/Loan/Closed';
import AccountLoan from '../pages/Report/Loan/Account';
import Balance from '../pages/Report/Loan/Balance';
import Schedule from '../pages/Report/Loan/Schedule';
import Bvn from '../pages/Report/Mobile/Bvn';
import Password from '../pages/Report/Mobile/Password';
import Registration from '../pages/Report/Mobile/Register';
import Airtime from '../pages/Report/Mobile/Airtime';
import Data from '../pages/Report/Mobile/Data';
import Bill from '../pages/Report/Mobile/Bill';
import Transfer from '../pages/Report/Mobile/Transfer';
import Accounting from '../pages/Accounting/Accounting';
import { Management } from '../pages/Management/Management';
import BranchManagement from '../pages/Management/Branch';
import ResetPasswordManagement from '../pages/Management/ResetPassword';
import Role from '../pages/Management/Role';
import Product from '../pages/Management/Product';
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
      {
        path: 'transaction/cheque',
        element: <ChequeTransaction/>,
      }, 
      {
        path: 'task',
        element: <Task/>,
      }, 
      {
        path: 'activities',
        element: <Activities/>,
      }, 
      {
        path: 'user',
        element: <User/>,
      }, 
      {
        path: 'branch',
        element: <Branch/>,
      }, 
      {
        path: 'platform',
        element: <Platform/>,
      }, 
      {
        path: 'payroll',
        element: <Payroll/>,
      }, 
      {
        path: 'mandate',
        element: <Mandates/>,
      }, 
      {
        path: 'accounting',
        element: <Accounting/>,
      }, 
      {
        path: 'report/loan/portfolio',
        element: <Portfolio/>,
      }, 
      {
        path: 'report/customer',
        element: <Customer/>,
      },
      {
        path: 'report/loan/due',
        element: <Due/>,
      }, 
      {
        path: 'report/loan/arrears',
        element: <Arrears/>,
      }, 
      {
        path: 'report/loan/disbursement',
        element: <DisbursementLoan/>,
      }, 
      {
        path: 'report/loan/closed',
        element: <ClosedLoan/>,
      }, 
      {
        path: 'report/loan/account',
        element: <AccountLoan/>,
      }, 
      {
        path: 'report/loan/balance',
        element: <Balance/>,
      }, 
      {
        path: 'report/loan/schedules',
        element: <Schedule/>,
      }, 
      {
        path: 'report/mobile/bvn',
        element: <Bvn/>,
      }, 
      {
        path: 'report/mobile/register',
        element: <Registration/>,
      }, 
      {
        path: 'report/mobile/password',
        element: <Password/>,
      }, 
      {
        path: 'report/mobile/airtime',
        element: <Airtime/>,
      },
      {
        path: 'report/mobile/data',
        element: <Data/>,
      },
      {
        path: 'report/mobile/bill',
        element: <Bill/>,
      },
      {
        path: 'report/mobile/transfer',
        element: <Transfer/>,
      },
      {
        path: 'management',
        element: <Management/>,
      }, 
      {
        path: 'management/branch',
        element: <BranchManagement/>,
      }, 
      {
        path: 'management/reset',
        element: <ResetPasswordManagement/>,
      },
      {
        path: 'management/role',
        element: <Role/>,
      },
      {
        path: 'management/product',
        element: <Product/>,
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
