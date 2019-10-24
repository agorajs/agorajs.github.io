import React from 'react';
export const LogoLink: React.FC<{
  link: string;
  imageurl: string;
  alt: string;
}> = React.memo(({ link, imageurl, alt }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img height="64px" src={imageurl} alt={alt} />
    </a>
  );
});
