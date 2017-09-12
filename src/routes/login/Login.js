/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import s from './Login.css';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.props.title}
          </h1>
          <p className={s.lead}>使用帳號密碼登入</p>
          <strong className={s.lineThrough}>OR</strong>
          <div className={s.formGroup}>
            {/* <label className={s.label} htmlFor="usernameOrEmail">
                帳號:
              </label> */}
            <TextField
              id="usernameOrEmail"
              label="帳號或電子郵件"
              name="usernameOrEmail"
              autoFocus
              fullWidth
              className={s.input}
            />
            <TextField
              id="password"
              label="密碼"
              name="password"
              type="password"
              fullWidth
              className={s.input}
            />
            {/* <input
                className={s.input}
                id="usernameOrEmail"
                type="text"
                name="usernameOrEmail"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              /> */}
          </div>
          {/* <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                密碼:
              </label>
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
              />
            </div> */}
          <div className={s.formGroup}>
            <Button
              className={s.button}
              raised
              style={{ backgroundColor: '#373277', color: '#fff' }}
            >
              登入
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
