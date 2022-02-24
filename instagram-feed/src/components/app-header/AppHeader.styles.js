import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 5;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: aliceblue;
  height: 32px;
  padding: 0 16px;
  @media (max-width: 687px) {
    display: flex;
    flex-direction: row;
    padding: 0 8px;
    justify-content: flex-start;
  }
  justify-content: space-between;
`;
export const HorizontalLine = styled.hr`
  margin: 0;
`;
export const ProfilePhoto = styled.div`
  width: 30px;
  height: 30px;
  background: blueviolet;
  border-radius: 22px;
  margin-right: 30px;
`;
