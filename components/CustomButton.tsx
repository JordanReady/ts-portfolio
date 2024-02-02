import React from "react";
import Link from "next/link";

interface CustomButtonProps {
  text: string;
  link?: string;
  external?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  link,
  external,
  onClick,
}) => {
  const buttonProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  const buttonContent = link ? (
    <Link
      href={link}
      passHref
      {...buttonProps}
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      {...buttonProps}
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
    >
      {text}
    </button>
  );

  return (
    <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      {buttonContent}
    </button>
  );
};

export default CustomButton;
