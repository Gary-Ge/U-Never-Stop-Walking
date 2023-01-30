import React from "react";

interface IContainer {
  children?: string | JSX.Element | JSX.Element[]
}

const Container:React.FC<IContainer> = ({ children }) => {
  return (
    <div className="min-h-full min-w-full grid place-items-center gap-0">
      {children}
    </div>
  )
}

export default Container
