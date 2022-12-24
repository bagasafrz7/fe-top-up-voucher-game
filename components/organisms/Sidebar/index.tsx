import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

interface SidebarProps {
  activeMenu: String;
}

export default function Siderbar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile />
            <div className="menus">
                <MenuItem title={'Overview'} icon={'icon-menu-overview'} active={activeMenu === 'overview'} href={'/member'} />
                <MenuItem title={'Transactions'} icon={'icon-menu-transaction'} active={activeMenu === 'transaction'} href={'/member/transaction'} />
                <MenuItem title={'Messages'} icon={'icon-menu-message'} href={'/'} />
                <MenuItem title={'Card'} icon={'icon-menu-card'} href={'/'} />
                <MenuItem title={'Rewards'} icon={'icon-menu-rewards'} href={'/'} />
                <MenuItem title={'Settings'} icon={'icon-menu-settings'} active={activeMenu === 'edit-profile'} href={'/member/edit-profile'} />
                <MenuItem title={'Log Out'} icon={'icon-menu-logout'} href={'/sign-in'} />
            </div>
            <Footer />
        </div>
    </section>
  )
}
