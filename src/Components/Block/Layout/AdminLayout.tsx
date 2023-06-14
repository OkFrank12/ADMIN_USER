import React from "react";
import AdminHeader from "../AdminHeader";
import Sider from "../Sider";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Container>
        <Sider />
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminLayout;

const Container = styled.div`
  display: flex;
`;
