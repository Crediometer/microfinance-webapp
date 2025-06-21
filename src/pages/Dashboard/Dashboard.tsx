import React, { useEffect, useMemo, useState } from 'react';
import { Card, Select, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';
import CountUp from 'react-countup';
import { RiHandCoinFill } from 'react-icons/ri';
import { FaBell, FaRegUser, FaWifi } from 'react-icons/fa6';
import { LuArrowLeftRight } from 'react-icons/lu';
import { WalletOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { IoTrendingUpOutline } from 'react-icons/io5';

import { useStylesContext } from '../../context';
import StatCard from '../../components/Card/StatCard';
import { WeeklyActivityCard } from '../../components/Card/dashboard';
import { PieChart } from '../../components/Card/dashboard/default/WeeklyActivityCard/PieChart';
import HeaderNav from '../../components/Layout/HeaderNav';
import { COLOR } from '../../App';

// Import customer images
import customer from '../../assets/customer2.png';
import customer2 from '../../assets/customer.png';
import customer3 from '../../assets/Customer3.png';
import customer4 from '../../assets/customer4.png';
import customer5 from '../../assets/customer6.png';
import avatar from '../../assets/avatar.png';

// Types and Interfaces
interface ActivityData {
    day: string;
    value: number;
}

interface PieData {
    label: string;
    value: number;
}

interface StatCardData {
    name: string;
    value: number;
    status: string;
    color: string;
}

interface NotificationItem {
    icon: React.ReactNode;
    title: string;
    time: string;
    backgroundColor?: string;
}

interface CustomerActivity {
    id: string;
    name: string;
    time: string;
    image: string;
    amount?: string;
}

interface Repayment {
    name: string;
    amount: number;
    currency?: string;
}

type CurrencyOption = {
    value: string;
    label: string;
    symbol: string;
    rate?: number;
};

// Constants
const DEFAULT_CURRENCY_OPTIONS: CurrencyOption[] = [
    { value: 'NGN', label: 'Nigerian Naira', symbol: '₦' },
    { value: 'USD', label: 'US Dollar', symbol: '$', rate: 0.0013 },
    { value: 'EUR', label: 'Euro', symbol: '€', rate: 0.0012 },
    { value: 'GBP', label: 'British Pound', symbol: '£', rate: 0.0010 },
];

const ACTIVITY_DATA: ActivityData[] = [
    { day: 'Jan', value: 50000 },
    { day: 'Feb', value: 22000 },
    { day: 'Mar', value: 60000 },
    { day: 'Apr', value: 45000 },
    { day: 'May', value: 35000 },
    { day: 'Jun', value: 18000 },
    { day: 'Jul', value: 30000 },
];

const PIE_DATA: PieData[] = [
    { label: 'N0 - N100,000', value: 52.1 },
    { label: 'N100,000 - N300,000', value: 22.8 },
    { label: 'N300,000 - N500,000', value: 13.9 },
    { label: 'N500,000 - N1,000,000', value: 11.2 },
];

const STAT_CARDS_DATA: StatCardData[] = [
    {
        name: 'Active Customers',
        value: 7265,
        status: '+11.01%',
        color: '#EDEEFC',
    },
    {
        name: 'Active Saving',
        value: 36,
        status: '+6.01%',
        color: '#E6F1FD',
    },
    {
        name: 'Loans Pending Approval',
        value: 15,
        status: '+11.01%',
        color: '#EDEEFC',
    },
    {
        name: 'Loans Due Today',
        value: 2,
        status: '+15.05%',
        color: '#E6F1FD',
    },
];

const NOTIFICATIONS: NotificationItem[] = [
    {
        icon: <RiHandCoinFill className="text-blue-500" />,
        title: 'Loan Request',
        time: 'Just now',
        backgroundColor: '#EDEEFC',
    },
    {
        icon: <FaRegUser className="text-blue-500" />,
        title: 'New Customer Joined',
        time: '59 minutes ago',
        backgroundColor: '#EDEEFC',
    },
    {
        icon: <LuArrowLeftRight className="text-blue-500" />,
        title: 'New Transaction',
        time: '12 hours ago',
        backgroundColor: '#EDEEFC',
    },
    {
        icon: <FaWifi className="text-blue-500" />,
        title: 'Disbursement',
        time: 'Today, 11:59 AM',
        backgroundColor: '#EDEEFC',
    },
];

const CUSTOMER_ACTIVITIES: CustomerActivity[] = [
    {
        id: '1',
        name: 'Temitayo Ope Joined',
        time: 'Just now',
        image: customer,
    },
    {
        id: '2',
        name: 'Femi David Joined',
        time: '59 minutes ago',
        image: customer2,
    },
    {
        id: '3',
        name: 'Temidayo Freeman',
        time: '12 hours ago',
        image: customer3,
    },
    {
        id: '4',
        name: 'Ferunmi Olubunmi',
        time: 'Today, 11:59 AM',
        image: customer4,
    },
];

const CUSTOMER_TRANSACTIONS: CustomerActivity[] = [
    {
        id: '1',
        name: 'Temitayo Ope Joined',
        time: 'Just now',
        image: customer,
        amount: 'N500',
    },
    {
        id: '2',
        name: 'Femi David Joined',
        time: '59 minutes ago',
        image: customer2,
        amount: 'N500',
    },
    {
        id: '3',
        name: 'Temidayo Freeman',
        time: '12 hours ago',
        image: customer3,
        amount: 'N500',
    },
    {
        id: '4',
        name: 'Ferunmi Olubunmi',
        time: 'Today, 11:59 AM',
        image: customer4,
        amount: 'N500',
    },
];

const DEFAULT_REPAYMENTS: Repayment[] = [
    { name: "Koray Okumus", amount: 10000 },
    { name: "Kate Morrison", amount: 500000 },
    { name: "Melody Macy", amount: 50000 },
    { name: "Kate Morrison", amount: 20000 },
    { name: "Melody Macy", amount: 76000 },
    { name: "Kate Morrison", amount: 4000 },
];

// Components
const NotificationItem: React.FC<{ notification: NotificationItem }> = ({ notification }) => (
    <div className="flex items-start mb-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 mr-3">
            {notification.icon}
        </div>
        <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
            <p className="text-xs text-gray-500">{notification.time}</p>
        </div>
    </div>
);

const CustomerActivityItem: React.FC<{ activity: CustomerActivity; showAmount?: boolean }> = ({
    activity,
    showAmount = false
}) => (
    <div className="flex items-center mb-4 p-2 hover:bg-gray-50 rounded-lg transition-colors">
        <img
            src={activity.image}
            className="w-10 h-10 rounded-full mr-3"
            alt={activity.name}
        />
        <div className="flex-1">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                {showAmount && activity.amount && (
                    <span className="text-sm font-medium" style={{ color: COLOR['100'] }}>
                        {activity.amount}
                    </span>
                )}
            </div>
        </div>
    </div>
);

const RepaymentsCard: React.FC<{
    repayments?: Repayment[];
    title?: string;
    currency?: string;
    loading?: boolean;
}> = ({
    repayments = DEFAULT_REPAYMENTS,
    title = "Repayments Today",
    currency = "N",
    loading = false,
}) => {
        const formatAmount = (amount: number) => {
            return `${currency}${amount.toLocaleString()}`;
        };

        return (
            <Card
                loading={loading}
                className="w-full h-full"
                bodyStyle={{ padding: '16px' }}
            >
                <div className="h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
                    <div className="flex-1 overflow-y-auto">
                        {repayments.map((repayment, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-2 px-1 hover:bg-gray-50 rounded-lg"
                            >
                                <p className="text-sm font-medium text-gray-900">{repayment.name}</p>
                                <p className="text-sm text-gray-600">{formatAmount(repayment.amount)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        );
    };

const VaultBalanceCard: React.FC<{
    balance?: number;
    title?: string;
    subtitle?: string;
    currencyOptions?: CurrencyOption[];
    defaultCurrency?: string;
    showCurrencySelector?: boolean;
    showBalanceToggle?: boolean;
    loading?: boolean;
    onCurrencyChange?: (currency: string) => void;
    formatBalance?: (value: number, currency: string) => string;
}> = ({
    balance = 17870,
    title = "Vault Balance",
    subtitle,
    currencyOptions = DEFAULT_CURRENCY_OPTIONS,
    defaultCurrency = 'NGN',
    showCurrencySelector = true,
    showBalanceToggle = true,
    loading = false,
    onCurrencyChange,
    formatBalance,
}) => {
        const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);
        const [isBalanceVisible, setIsBalanceVisible] = useState(true);

        const currentCurrency = useMemo(() =>
            currencyOptions.find(c => c.value === selectedCurrency) || currencyOptions[0],
            [currencyOptions, selectedCurrency]
        );

        const convertedBalance = useMemo(() => {
            if (currentCurrency.rate && selectedCurrency !== defaultCurrency) {
                return balance * currentCurrency.rate;
            }
            return balance;
        }, [balance, currentCurrency.rate, selectedCurrency, defaultCurrency]);

        const formattedBalance = useMemo(() => {
            if (formatBalance) {
                return formatBalance(convertedBalance, selectedCurrency);
            }
            return convertedBalance.toLocaleString('en-US', {
                minimumFractionDigits: selectedCurrency === 'NGN' ? 0 : 2,
                maximumFractionDigits: selectedCurrency === 'NGN' ? 0 : 2,
            });
        }, [convertedBalance, selectedCurrency, formatBalance]);

        const handleCurrencyChange = (value: string) => {
            setSelectedCurrency(value);
            onCurrencyChange?.(value);
        };

        const toggleBalanceVisibility = () => {
            setIsBalanceVisible(!isBalanceVisible);
        };

        return (
            <Card
                loading={loading}
                className="w-full h-full"
                bodyStyle={{
                    height: '100%',
                    padding: '24px',
                    background: 'linear-gradient(135deg, rgba(24, 144, 255, 0.03) 0%, rgba(24, 144, 255, 0.08) 100%)',
                }}
            >
                <div className="h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h4 className="text-lg font-semibold m-0">{title}</h4>
                            {subtitle && <p className="text-xs text-gray-500 m-0">{subtitle}</p>}
                        </div>
                        <div className="flex items-center gap-2">
                            {showBalanceToggle && (
                                <button
                                    onClick={toggleBalanceVisibility}
                                    className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100"
                                    title={isBalanceVisible ? 'Hide balance' : 'Show balance'}
                                >
                                    {isBalanceVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                </button>
                            )}
                            {showCurrencySelector && (
                                <Select
                                    value={selectedCurrency}
                                    onChange={handleCurrencyChange}
                                    placeholder="Currency"
                                    className="min-w-[100px]"
                                    showSearch
                                    options={currencyOptions.map(currency => ({
                                        value: currency.value,
                                        label: `${currency.symbol} ${currency.value}`,
                                    }))}
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                        {isBalanceVisible ? (
                            <>
                                <div className="text-5xl font-bold text-gray-900 mb-2">
                                    <span className="text-3xl text-gray-500 mr-1">
                                        {currentCurrency.symbol}
                                    </span>
                                    <CountUp
                                        end={convertedBalance}
                                        duration={2}
                                        separator=","
                                        decimals={selectedCurrency === 'NGN' ? 0 : 2}
                                    />
                                </div>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                                    {currentCurrency.label}
                                </p>
                                {currentCurrency.rate && selectedCurrency !== defaultCurrency && (
                                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                        <IoTrendingUpOutline />
                                        Rate: 1 {defaultCurrency} = {currentCurrency.rate} {selectedCurrency}
                                    </p>
                                )}
                            </>
                        ) : (
                            <div className="text-5xl text-gray-400 font-bold tracking-[8px]">
                                ••••••
                            </div>
                        )}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                                Last updated: {new Date().toLocaleTimeString()}
                            </span>
                            <span className="text-xs text-gray-500">
                                Available Balance
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
        );
    };

const StatCardsSection: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {STAT_CARDS_DATA.map((card, index) => (
            <StatCard
                key={index}
                name={card.name}
                value={card.value}
                color={card.color}
                status={card.status}
            />
        ))}
    </div>
);

const SidebarCard: React.FC = () => (
    <Card className="w-full">
        <div className="space-y-4">

            <h5 className="text-lg font-semibold mb-2">Notifications</h5>
            <div className="space-y-2">
                {NOTIFICATIONS.map((notification, index) => (
                    <NotificationItem key={index} notification={notification} />
                ))}
            </div>



            <h5 className="text-lg font-semibold mb-2">Customer Activities</h5>
            <div className="space-y-2">
                {CUSTOMER_ACTIVITIES.map((activity) => (
                    <CustomerActivityItem key={activity.id} activity={activity} />
                ))}
            </div>



            <h5 className="text-lg font-semibold mb-2">Customer Transaction</h5>
            <div className="space-y-2">
                {CUSTOMER_TRANSACTIONS.map((transaction) => (
                    <CustomerActivityItem
                        key={transaction.id}
                        activity={transaction}
                        showAmount={true}
                    />
                ))}
            </div>
        </div>
    </Card>
);

// Main Dashboard Component
const Dashboard: React.FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [collapsed, setCollapsed] = useState(isMobile);
    const [navFill, setNavFill] = useState(false);

    useEffect(() => {
        setCollapsed(isMobile);
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            setNavFill(window.scrollY > 5);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container mx-auto px-1 py-1">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Content */}
                <div className="flex-1">
                    <StatCardsSection />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2">
                            <WeeklyActivityCard data={ACTIVITY_DATA} />
                        </div>
                        <RepaymentsCard />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PieChart data={PIE_DATA} />
                        <VaultBalanceCard />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-80">
                    <SidebarCard />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;