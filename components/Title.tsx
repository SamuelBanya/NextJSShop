import { AppProps } from "next/app";
import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1 className="text-2xl pb-4">{children}</h1>
      <p>[TODO: display products]</p>
    </>
  );
}

export default Title;
