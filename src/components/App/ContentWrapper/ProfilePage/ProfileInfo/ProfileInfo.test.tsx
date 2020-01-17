import React from 'react';
import { cleanup, fireEvent, render } from "@testing-library/react";
import ProfileInfo from './ProfileInfo';
import "@testing-library/jest-dom/extend-expect";
import ProfileInfoInterface from "./ProfileInfoInterface";

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

describe("AuthPopUp", () => {

  it('Render user info', () => {
      const { getByText } = render( <ProfileInfo profileData={fakeInfo}/> );
      expect(getByText('Student')).toBeInTheDocument();
      expect(getByText('WebUI')).toBeInTheDocument();
    })

  it('Render title', () => {
      const { getByText } = render( <ProfileInfo profileData={fakeInfo}/> );
      expect(getByText('Profile Summary')).toBeInTheDocument();
    })

    it('Render edit form', () => {
      const { container, getByText } = render( <ProfileInfo profileData={fakeInfo}/> );
      const inputItemEmail = container.querySelector('input[name="name"]');
      const inputItemPassword = container.querySelector('input[name="group"]');

      expect(inputItemEmail).toBeInTheDocument();
      expect(inputItemPassword).toBeInTheDocument();
      expect(getByText('UPDATE PROFILE')).toBeInTheDocument();
    })
});
