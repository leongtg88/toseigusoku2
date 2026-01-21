import React from 'react';

interface ContentSectionProps {
  bgColor: string;
  textColor: string;
  title: string;
  children: React.ReactNode;
  titleColor?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ bgColor, textColor, title, children, titleColor }) => {
  return (
    <div className={`h-[500px] ${bgColor} ${textColor} p-12 md:p-24 flex flex-col justify-center items-center`}>
      <h2 className={`text-4xl font-bold mb-4 ${titleColor ? titleColor : ''}`}>{title}</h2>
      <div className="text-center max-w-4xl">{children}</div>
    </div>
  );
};

export default ContentSection;
