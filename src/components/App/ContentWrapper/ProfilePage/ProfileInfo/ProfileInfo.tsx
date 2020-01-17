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

interface Props {
  profileData: ProfileInfoInterface
}

const ProfileInfo: React.FC<Props> = ({ profileData }) => {
  return (

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
        onSubmit={() => {

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
      </ProfileSummaryContainer>

    
  )
}


export default ProfileInfo;