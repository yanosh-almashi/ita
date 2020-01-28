import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ProfileInfo from './ProfileInfo';
import '@testing-library/jest-dom/extend-expect';
import ProfileInfoInterface from './ProfileInfoInterface';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../../../store/rootReducer';

const store = createStore(rootReducer);

afterEach(cleanup);

const fakeInfo: ProfileInfoInterface = {
  email: 'student@of.ita',
  group: 'WebUI',
  name: 'Student',
  tasks: {
    failedTask: 0,
    resolvedTasks: 0
  },
  time: {
    endDate: '',
    endTime: '',
    startData: '',
    startTime: ''
  }
};

describe('AuthPopUp', () => {
  const setup = () => {
    const utils = render(
      <Provider store={store}>
        <ProfileInfo profileData={fakeInfo} />
      </Provider>
    );
    return utils;
  };

  it('Render user info', () => {
    const { getByText } = setup();
    expect(getByText('Student')).toBeInTheDocument();
    expect(getByText('WebUI')).toBeInTheDocument();
  });

  it('Render title', () => {
    const { getByText } = setup();
    expect(getByText('Profile Summary')).toBeInTheDocument();
  });
});
