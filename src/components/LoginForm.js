import React from 'react';

class LoginForm extends React.Component {
  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(false);
  }

  render() {
    return (
      <div className='form-log'>
        Логин
        <input type="text"></input>
        <button onClick={this.handleClick}> Войти </button>
      </div>
    );
  }
}

export default LoginForm;