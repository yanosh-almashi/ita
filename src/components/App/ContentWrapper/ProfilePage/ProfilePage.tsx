import React from 'react';
import './ProfilePageStyles';
import { 
  ProfileContainer, 
  ProfileAvatarContainer, 
  ProfileSummaryContainer,
  ProfileProgressContainer,
  ProfileTitleContainer,
  ProfileSummaryItem,
  ProfileSummaryInnerItem
} from './ProfilePageStyles';
import Chart from '../Chart/Chart';
import { getProfileData } from '../../../../store/profile/ProfileActions';
import { connect } from 'react-redux';

interface Props {
  getData: () => void,
  profileData: any
}

const ProfilePage: React.FC<Props> = ({ getData, profileData }) => {
  
  React.useEffect(() => {
    getData();
    console.log(profileData);
  });

  return (
    <ProfileContainer>
      <ProfileAvatarContainer>
        <ProfileTitleContainer>Profile Avatar</ProfileTitleContainer>

      </ProfileAvatarContainer>
      <ProfileSummaryContainer>
        <ProfileTitleContainer>Profile Summary</ProfileTitleContainer>
        <div>
          <ProfileSummaryItem>
            1. Months:
            <ProfileSummaryInnerItem>
              2/3
            </ProfileSummaryInnerItem>
          </ProfileSummaryItem>

          <ProfileSummaryItem>
            2. Reports:
            <ProfileSummaryInnerItem>
              3
            </ProfileSummaryInnerItem>
          </ProfileSummaryItem>

          <ProfileSummaryItem>
            3. Finished tasks:
            <ProfileSummaryInnerItem>
              6
            </ProfileSummaryInnerItem>
          </ProfileSummaryItem>

          <ProfileSummaryItem>
            4. Failed tasks:
            <ProfileSummaryInnerItem>
              2
            </ProfileSummaryInnerItem>
          </ProfileSummaryItem>

        </div>
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