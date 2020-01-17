import React from 'react';
import { 
  ProfileTitleContainer, 
  ProfileAvatarContainer, 
  ProfileAvatarImage, 
  ProfileSwipeButton,
  ProfileTitleName, 
  ProfileTitleGroup
} from '../ProfilePageStyles';
import { connect } from 'react-redux';
import { changeProfileSummaryWindow } from '../../../../../store/profile/ProfileActions';

interface Props {
  name: string;
  group: string;
  windowStatus: boolean
  changeProfileSummaryWindow: () => void,
}

const ProfileAvatar: React.FC<Props> = (props) => {
  const { 
    name, 
    group, 
    changeProfileSummaryWindow, 
    windowStatus } = props;
    
  return (
    <ProfileAvatarContainer>
      <ProfileTitleContainer>Profile Avatar</ProfileTitleContainer>
      <ProfileAvatarImage 
        src="https://media-exp2.licdn.com/dms/image/C4D03AQHrET7kILmAXg/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=6YQmC2IJ9grgB9FICDQvvlCYvRgyzErzsGH2jph3fKM" 
      />
      <ProfileTitleName>{ name }</ProfileTitleName>
      <ProfileTitleGroup>{ group }</ProfileTitleGroup>

      <ProfileSwipeButton
        onClick={() => changeProfileSummaryWindow()}
      >
        { windowStatus ? 'Edit profile' : 'Profile summary' }
      </ProfileSwipeButton>
      
    </ProfileAvatarContainer>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  changeProfileSummaryWindow: () => dispatch(changeProfileSummaryWindow())
});

const mapStateToProps = (state: any) => ({
  windowStatus: state.profileReducer.windowStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAvatar);