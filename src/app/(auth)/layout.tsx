import React, { Children } from "react";

interface props {
  children: React.ReactNode;
}

const layout = ({ children }: props) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  );
};

export default layout;
