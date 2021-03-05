import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PropTypes from 'prop-types';


const buttonExit = {
  text: 'Выйти',
  icon: <ExitToAppIcon />,
};
const stringArray = ["Львов Кирилл Евгеньевич", "ИВТ-42-19", "19 лет"]

class Dashboard extends React.Component {
  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(true);
  }

  render() {
    const { numb } = this.props;

    return (
      <div className="dashboard">
        <div className="exit">
          <button onClick={this.handleClick}>
            {buttonExit.icon}
            {buttonExit.text}
          </button>
        </div>
        <div className='information'>
          {stringArray[numb]}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  numb: PropTypes.number,
  handleLoginClick: PropTypes.func.isRequired
};

Dashboard.defaultProps = {
  numb: 0
};
export default Dashboard;