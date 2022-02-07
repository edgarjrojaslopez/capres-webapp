import React from "react";

function FooterLayout(props) {
  return (
    <footer className=" bottom-0 left-0 h-auto w-full bg-blue-600 px-10 py-2 ">
      {props.children}
    </footer>
  );
}

export default FooterLayout;
