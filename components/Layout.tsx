import React from "react";
import { Box } from "./Box";
import Nav from "./Nav";
type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <Box
        css={{
          maxWidth: "100%",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
