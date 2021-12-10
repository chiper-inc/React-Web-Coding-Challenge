import React, { ImgHTMLAttributes, useState } from 'react';

interface ImageProps extends ImgHTMLAttributes<any> {
    fallback?: string
}

const Image = ({
  fallback, src, alt, className,
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const onError = () => setImgSrc(fallback);

  return <img src={imgSrc || fallback} onError={onError} alt={alt} className={className} />;
};

Image.defaultProps = {
  fallback: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
};

export default Image;
