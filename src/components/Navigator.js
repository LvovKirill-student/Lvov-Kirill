import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupIcon from '@material-ui/icons/Group';
import DateRangeIcon from '@material-ui/icons/DateRange';


const buttonArray = [
  {
    text: 'ФИО',
    icon: <AccountBoxIcon />,
  },
  {
    text: 'Группа',
    icon: <GroupIcon />,
  },
  {
    text: 'Возраст',
    icon: <DateRangeIcon />,
  }
]

class Navigator extends React.Component {
  upData = (number) =>{
    const { updateData } = this.props;
    updateData(number);
  }
  
  render(){ 

      return (
      <div className="navigator">
        {buttonArray.map((button,index) => (
            <div>
              {button.icon}
              <button onClick={() => this.upData(index)}> {button.text} </button>
            </div>
          ))}
      </div> 
      );
    }
  }

  export default Navigator;