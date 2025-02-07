import { Layout } from 'antd';

const { Footer } = Layout;

type FooterNavProps = React.HTMLAttributes<HTMLDivElement>;

const FooterNav = ({ ...others }: FooterNavProps) => {
  return (
    <Footer {...others}>
      Product Mobilizer Board © Created By <strong>Credio</strong>
    </Footer>
  );
};

export default FooterNav;
