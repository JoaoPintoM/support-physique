import React, { useRef, useEffect } from 'react';

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef}>
      <div>
        { title && <h1>{title}</h1>}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;