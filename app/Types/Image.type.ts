type LoadImage = {
  src: any;
  quality: any;
  width: any;
};

type LoadPartialImageType = Partial<LoadImage>;

export const loadImage = ({ src, width, quality }: LoadPartialImageType) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
