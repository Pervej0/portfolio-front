import React from "react";

interface Props {
  children?: JSX.Element[] | JSX.Element;
  title: string;
  className?: any;
}
const CustomContainer = ({ children, title, className }: Props) => {
  return (
    <div className={`container md:px-auto px-10 ${className}`}>
      <div>
        <h3 className="tracking-wider text-2xl font-openSans">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default CustomContainer;
