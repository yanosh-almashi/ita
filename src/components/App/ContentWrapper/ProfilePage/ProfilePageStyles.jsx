import styled, { css } from 'styled-components';

const ProfileItem = css`
  background-color: #fff;
  box-shadow: 2px 10px 31px -10px rgba(0,0,0,0.2);
  padding: 25px;
  border-radius: 15px;
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  padding: 40px;
`;

export const ProfileAvatarContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  ${ProfileItem}
`;

export const ProfileSummaryContainer = styled.div`
  grid-column: 2/5;
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
  ${ProfileItem}
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