import logo from '../assets/logo.jpg';
//import { ChatBubbleOutlineIcon } from '@material-ui/icons';

import SidebarCard from '../components/SidebarCard'; 

function Sidebar() {

  const titles = ['Dashboard', 'BVG', 'Moderator'];
  const icons = [  ];
  
  return (
    <div>
        <div>
            <img alt = "Logo of the brand" src={logo} width="10%" height="100px"/>
        </div>
        <div style={{paddingLeft: '10px'}}>
            <SidebarCard title={titles[0]} icon={icons}/>
            <SidebarCard title={titles[1]} icon={icons}/>
            <SidebarCard title={titles[2]} icon={icons}/>
        </div>
    </div>
  );
}

export default Sidebar;
