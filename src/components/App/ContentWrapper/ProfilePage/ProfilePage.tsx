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
import ProfileInfo from './ProfileInfo/ProfileInfo';

interface Props {
  getData: () => void,
  profileData: any
}

const ProfilePage: React.FC<Props> = ({ getData, profileData }) => {
  
  React.useEffect(() => {
    getData();
  }, []);
  
  if (!profileData) {
    return <div>Loading</div>
  }

  return (
    <ProfileContainer>
      <ProfileAvatarContainer>
        <ProfileTitleContainer>Profile Avatar</ProfileTitleContainer>

      </ProfileAvatarContainer>

      <ProfileInfo profileData={profileData} />

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