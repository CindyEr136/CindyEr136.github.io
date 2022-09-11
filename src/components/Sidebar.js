import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import "./Sidebar.css";
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <ProSidebar>
            <SidebarHeader></SidebarHeader>
            <Menu>
                <SidebarContent>Cindy Er</SidebarContent>
                <SidebarContent>erxx6510@mylaurier.ca</SidebarContent>
                <MenuItem>About</MenuItem>
                <SubMenu title="Projects">
                    <Link to="/projects"></Link>
                    <MenuItem>Chess<Link to="/chess"></Link></MenuItem>
                    <MenuItem>TD Case Study<Link to="/TD"></Link></MenuItem>
                    <MenuItem>iFix Case Study<Link to="/iFix"></Link></MenuItem>
                </SubMenu>
                <MenuItem>Art</MenuItem>
                <MenuItem icon={<i class="bi bi-linkedin"></i>}></MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar;