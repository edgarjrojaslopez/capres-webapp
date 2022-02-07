import React from "react";

function ContentLayout({ children }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex-col px-6 py-3 md:flex-row">
      {children}
    </div>
  );
}

export default ContentLayout;
