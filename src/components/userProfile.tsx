import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetUser from "../hooks/useGetUser";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  @media screen and (min-width: 1200px) {
    width: 300px;
    height: 300px;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid black;
  position: relative;
  @media screen and (min-width: 1200px) {
    height: 300px;
  }
`;
const AbsoluteText = styled.p`
  position: Absolute;
  top: -12px;
  z-index: 10;
  font-size: 20px;
  background-color: white;
`;
const BoldText = styled.h2`
  font-size: 22px;
`;
const Paragraph = styled.p`
  font-size: 20px;
`;
const UserProfile = () => {
  const { id } = useParams();
  const user = useGetUser(Number(id));
  return (
    <Wrapper>
      <Img src={user?.imageUrl} alt="userimg" />
      <Box>
        <AbsoluteText>Info</AbsoluteText>
        <BoldText>
          {user?.prefix} {user?.name} {user?.lastName}
        </BoldText>
        <Paragraph style={{ fontStyle: "italic", marginBottom: "14px" }}>
          {user?.title}
        </Paragraph>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>Email: </p>
          {user?.email}
        </Paragraph>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>Ip Address: </p>
          {user?.ip}
        </Paragraph>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>Job Area: </p>
          {user?.jobArea}
        </Paragraph>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>Job Type: </p>
          {user?.jobType}
        </Paragraph>
      </Box>
      <Box>
        <AbsoluteText>Address</AbsoluteText>
        <BoldText>
          {user?.company.name} {user?.company.suffix}
        </BoldText>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>City: </p>
          {user?.address.city}
        </Paragraph>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>Country: </p>
          {user?.address.country}
        </Paragraph>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>State: </p>
          {user?.address.state}
        </Paragraph>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>Street Address: </p>
          {user?.address.streetAddress}
        </Paragraph>
        <Paragraph style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "underline" }}>Zip: </p>
          {user?.address.zipCode}
        </Paragraph>
      </Box>
    </Wrapper>
  );
};
export default UserProfile;
