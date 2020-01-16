import React from 'react';
import './ProfilePageStyles';
import { 
  ProfileContainer, 
  ProfileAvatarContainer, 
  ProfileSummaryContainer,
  ProfileProgressContainer,
  ProfileTitleContainer,
  ProfileSummaryItem,
  ProfileSummaryInnerItem,
  ProfileEditContainer,
  ProfileEditForm
} from './ProfilePageStyles';
import Chart from '../Chart/Chart';
import { getProfileData } from '../../../../store/profile/ProfileActions';
import { connect } from 'react-redux';
import InputValidate from '../../../../HOC/AuthHOC/InputValidateHOC';
import { Button } from '@material-ui/core';
import { composeValidators, required } from '../../../App/Auth/validation';
import { Form } from 'react-final-form';

interface Props {
  getData: () => void,
  profileData: any
}

const ProfilePage: React.FC<Props> = ({ getData, profileData }) => {
  
  

  React.useEffect(() => {
    console.log('1111');
    getData();
  }, []);
  console.log(profileData);
  if (!profileData) {
    return <div>Loading</div>
  }

  return (
    <ProfileContainer>
      <ProfileAvatarContainer>
        <ProfileTitleContainer>Profile Avatar</ProfileTitleContainer>

      </ProfileAvatarContainer>

      <ProfileSummaryContainer>
        <ProfileTitleContainer>Profile Summary</ProfileTitleContainer>
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
        <ProfileEditContainer>
        <Form
        onSubmit={(formObj: any) => {

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
              validate={composeValidators(required)}
              type="text"
              fieldName="name"
            />
            <InputValidate
              id="Group"
              label="Group"
              variant="outlined"
              validate={composeValidators(required)}
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
      </ProfileSummaryContainer>

      <ProfileProgressContainer>
        <ProfileTitleContainer>Profile Progress</ProfileTitleContainer>
        <div>
          <Chart />
        </div>
      </ProfileProgressContainer>

    </ProfileContainer>
  )
}

const mapStateToProps = (state: any) => ({
  profileData: state.profileReducer.profileData
})

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(getProfileData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);