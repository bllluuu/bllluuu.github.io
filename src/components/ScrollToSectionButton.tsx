import React, { useRef } from 'react';

interface Props {
  targetId: string;
//   may wish to add button text
}

const ScrollToSectionButton: React.FC<Props> = ({ targetId }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    const targetElement = targetRef.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    {/* <button onClick={scrollToSection}>{buttonText}</button> */}
      <button onClick={scrollToSection}></button>
      <div id={targetId} ref={targetRef}>
        {/* Your content here */}
      </div>
    </>
  );
};

export default ScrollToSectionButton;