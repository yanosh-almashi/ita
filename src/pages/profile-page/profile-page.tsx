import React, { useEffect } from "react";
import "./profile-page.styled";
import {
  ProfileContainer,
  ProfileAvatarContainer,
  ProfileProgressContainer,
  ProfileTitleContainer
} from "./profile-page.styled";
import { getProfileData } from "../../store/profile/profile.actions";
import { connect } from "react-redux";
import ProfileInfo from "../../components/profile-info/profile-info";
import ProfileAvatar from "../../components/profile-avatar/profile-avatar";
import Chart from "../../components/chart/chart";

interface Props {
  getData: () => void;
  profileData: any;
}

const ProfilePage: React.FC<Props> = ({ getData, profileData }) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  if (!profileData) {
    return <div>Loading</div>;
  }

  return (
    <ProfileContainer>
      <ProfileAvatarContainer>
        <ProfileTitleContainer>Profile Avatar</ProfileTitleContainer>
      </ProfileAvatarContainer>
      <ProfileAvatar
        name={profileData.name}
        group={profileData.group}
        url={profileData.userAvatarUrl}
      />
      <ProfileInfo profileData={profileData} />
      <ProfileProgressContainer>
        <ProfileTitleContainer>Profile Progress</ProfileTitleContainer>
        <Chart />
      </ProfileProgressContainer>
    </ProfileContainer>
  );
};

const mapStateToProps = (state: any) => ({
  profileData: state.profileReducer.profileData
});

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(getProfileData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
