import React from "react";

interface Props {
  children?: JSX.Element[] | JSX.Element;
  title: string;
  className?: any;
}
const CustomContainer = ({ children, title, className }: Props) => {
  console.log(className, "xxxxxxxxxxx");
  return (
    <div className={`container ${className}`}>
      <div>
        <h3 className="tracking-wider text-2xl font-openSans">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default CustomContainer;
