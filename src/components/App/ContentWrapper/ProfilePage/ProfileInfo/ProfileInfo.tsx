import React from 'react';
import { 
  ProfileSummaryContainer,
  ProfileTitleContainer,
  ProfileSummaryItem,
  ProfileSummaryInnerItem,
  ProfileEditContainer,
  ProfileEditForm
} from '../ProfilePageStyles';
import { Form } from 'react-final-form';
import { composeValidators } from '../../../../../components/App/Auth/validation';
import InputValidate from '../../../../../HOC/AuthHOC/InputValidateHOC';
import { Button } from '@material-ui/core';
import ProfileInfoInterface from './ProfileInfoInterface';
import { connect } from 'react-redux';
import { db } from '../../../../../firebase/firebase.config';
import { getProfileData } from '../../../../../store/profile/ProfileActions';

interface Props {
  profileData: ProfileInfoInterface,
  windowStatus: boolean,
  uid: string,
  getData: () => void
}

const ProfileInfo: React.FC<Props> = (props) => {
  const { 
    profileData, 
    windowStatus,
    uid,
    getData } = props;

  const updateData = (formObj: any) => {
    db
    .collection('users')
    .doc(uid)
    .set({ ...formObj }, { merge: true })
    .then(() => getData());
  }

  const profileInfo = (
    <div>
      <ProfileSummaryItem>
        1. Name:
        <ProfileSummaryInnerItem>
        { profileData.name }
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        2. Group:
        <ProfileSummaryInnerItem>
        { profileData.group }
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        3. Finished tasks:
        <ProfileSummaryInnerItem>
        { profileData.tasks.resolvedTasks }
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        4. Failed tasks:
        <ProfileSummaryInnerItem>
          { profileData.tasks.failedTasks }
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>
    </div>
  );

  const profileEdit = (
    <ProfileEditContainer>
      <Form
      onSubmit={(formObj) => {
        updateData(formObj);
      }}
      render={({ handleSubmit }: any) => (
        <ProfileEditForm
          onSubmit={(e: any) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <InputValidate
            id="Name"
            label="Name"
            variant="outlined"
            validate={composeValidators()}
            type="text"
            fieldName="name"
          />
          <InputValidate
            id="Group"
            label="Group"
            variant="outlined"
            validate={composeValidators()}
            type="text"
            fieldName="group"
          />
          <Button variant="contained" color="primary" type="submit">
            UPDATE PROFILE
          </Button>
        </ProfileEditForm>
      )}
    />
    </ProfileEditContainer> 
  );

  return (
    <ProfileSummaryContainer>
      <ProfileTitleContainer>
        { windowStatus ? 'Profile Summary' : 'Edit profile' }
      </ProfileTitleContainer>
      { windowStatus ? profileInfo : profileEdit }
    </ProfileSummaryContainer>
  )
}

const mapStateToProps = (state: any) => ({
  windowStatus: state.profileReducer.windowStatus,
  uid: state.authReducer.uid,
})

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(getProfileData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);