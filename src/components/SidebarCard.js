import { withRouter } from 'react-router-dom';

const SidebarCard = (props) => {
  return (
    <div 
    style={{padding : '5px',
            color : 'white',
            textAlign : 'left',
            flexDirection : 'row'}}
    onClick = {() => {props.history.push('/' + props.title)}}>
                {props.icon}
                {props.title}
    </div>
  );
}

export default withRouter(SidebarCard);
