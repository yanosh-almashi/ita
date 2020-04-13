import React, { useState } from "react";
import {
  ProfileSummaryContainer,
  ProfileTitleContainer,
  ProfileSummaryItem,
  ProfileSummaryInnerItem,
  ProfileEditContainer,
  ProfileEditForm
} from "../../pages/profile-page/profile-page.styled";
import { Form } from "react-final-form";
import InputValidate from "../../HOC/input-validation/input-validation.hoc";
import { Button } from "@material-ui/core";
import ProfileInfoInterface from "./profile-info.interface";
import { connect } from "react-redux";
import { db, collectionTypes } from "../../firebase/firebase.config";
import { getProfileData } from "../../store/profile/profile.actions";
import FileUpload from "../file-upload/file-upload";
import { putFile, getFileTypes } from "../../api/profile/ProfileApi";
import { composeValidators } from "../../utils/validation.utils";

interface Props {
  profileData: ProfileInfoInterface;
  windowStatus: boolean;
  uid: string;
  getData: () => void;
}

const ProfileInfo: React.FC<Props> = props => {
  const [avatar, setAvatar] = useState(null);

  const { profileData, windowStatus, uid, getData } = props;

  const updateAvatar = () => {
    putFile(
      avatar,
      getFileTypes.avatar.path,
      getFileTypes.avatar.name,
      uid
    ).then(() => getData());
  };

  const updateTextData = (formObj: any) => {
    db.collection(collectionTypes.users)
      .doc(uid)
      .set({ ...formObj }, { merge: true })
      .then(() => getData());
  };

  const updateData = (formObj: any) => {
    updateTextData(formObj);
    updateAvatar();
  };

  const handleFile = (file: any) => {
    setAvatar(file);
  };

  const profileInfo = (
    <div>
      <ProfileSummaryItem>
        <span>1. Name:</span>
        <ProfileSummaryInnerItem>{profileData.name}</ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        <span>2. Group:</span>
        <ProfileSummaryInnerItem>{profileData.group}</ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        <span>3. Finished tasks:</span>
        <ProfileSummaryInnerItem>
          {profileData.tasks.resolvedTasks}
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        <span>4. Failed tasks:</span>
        <ProfileSummaryInnerItem>
          {profileData.tasks.failedTasks}
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>
    </div>
  );

  const profileEdit = (
    <ProfileEditContainer>
      <Form
        onSubmit={formObj => {
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
      <FileUpload putFile={handleFile} />
    </ProfileEditContainer>
  );

  return (
    <ProfileSummaryContainer>
      <ProfileTitleContainer>
        {windowStatus ? "Profile Summary" : "Edit profile"}
      </ProfileTitleContainer>
      {windowStatus ? profileInfo : profileEdit}
    </ProfileSummaryContainer>
  );
};

const mapStateToProps = (state: any) => ({
  windowStatus: state.profileReducer.windowStatus,
  uid: state.authReducer.uid
});

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(getProfileData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
