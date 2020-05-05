import styled, { css } from 'styled-components';

const ProfileItem = css`
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
  padding: 25px;
  border-radius: 15px;
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  padding: 50px;
  overflow-y: auto;
  height: 100vh;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileAvatarContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  flex-flow: column;
  align-items: center;
  ${ProfileItem}

  @media (max-width: 1300px) {
    grid-column: 1/1;
    grid-row: 1;
  }
`;

export const ProfileSummaryContainer = styled.div`
  grid-column: 2/5;

  @media (max-width: 1300px) {
    grid-column: 1/1;
  }
  ${ProfileItem}
`;

export const ProfileSummaryItem = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 5px;
  &:last-child {
    padding-bottom: 0px;
  }
`;

export const ProfileSummaryInnerItem = styled.span`
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
`;

export const ProfileProgressContainer = styled.div`
  grid-column: 2/5;
  margin-bottom: 50px;
  ${ProfileItem}

  @media (max-width: 1300px) {
    grid-column: 1/1;
  }
`;

export const ProfileTitleContainer = styled.h3`
  padding-bottom: 10px;
  text-align-last: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 30px auto;
  border-bottom: 1px solid #dedde3;
  color: #20233f;
  font-size: 25px;
`;

export const ProfileEditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1300px) {
    flex-flow: column-reverse;
  }
`;

export const ProfileEditForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export const ProfileAvatarImage = styled.img`
  background-color: #24c3f9;
  border-radius: 100%;
  height: 200px;
  width: 200px;
`;

export const ProfileSwipeButton = styled.button`
  width: 100%;
  padding: 8px 0px;
  margin: 13px 0px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border: 1px solid #24c3f9;
  background-color: #fff;
  border-radius: 50px;
  outline: none;
`;

export const ProfileTitleName = styled.h3`
  font-size: 20px;
  padding-top: 10px;
  font-weight: 700;
`;

export const ProfileTitleGroup = styled.span`
  font-size: 18px;
  padding-top: 10px;
  font-weight: 400;
`;