import React from "react";
import {
  ProfileTitleContainer,
  ProfileAvatarContainer,
  ProfileAvatarImage,
  ProfileSwipeButton,
  ProfileTitleName,
  ProfileTitleGroup
} from "../../pages/profile-page/profile-page.styled";
import { connect } from "react-redux";
import { changeProfileSummaryWindow } from "../../store/profile/profile.actions";
import { signOutUser } from "../../store/auth/auth.actions";
import Img from "../../assets/images/ava.jpg";

interface Props {
  name: string;
  group: string;
  windowStatus: boolean;
  url: string;
  changeProfileSummaryWindow: () => void;
  signout: () => void;
}

const ProfileAvatar: React.FC<Props> = props => {
  const {
    url,
    name,
    group,
    changeProfileSummaryWindow,
    windowStatus,
    signout
  } = props;

  return (
    <ProfileAvatarContainer>
      <ProfileTitleContainer>Profile Avatar</ProfileTitleContainer>
      <ProfileAvatarImage src={url || Img} />
      <ProfileTitleName>{name}</ProfileTitleName>
      <ProfileTitleGroup>{group}</ProfileTitleGroup>

      <ProfileSwipeButton onClick={() => changeProfileSummaryWindow()}>
        {windowStatus ? "Edit profile" : "Profile summary"}
      </ProfileSwipeButton>
      <ProfileSwipeButton onClick={() => signout()}>Log out</ProfileSwipeButton>
    </ProfileAvatarContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  changeProfileSummaryWindow: () => dispatch(changeProfileSummaryWindow()),
  signout: () => dispatch(signOutUser())
});

const mapStateToProps = (state: any) => ({
  windowStatus: state.profileReducer.windowStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAvatar);
