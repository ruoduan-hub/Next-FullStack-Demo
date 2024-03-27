import React from "react";
import type { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ background: "#fff" }}>
      layput page1
      {children}
    </div>
  );
};

export default Layout;
