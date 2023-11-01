interface Props {
  images: {
    src: string;
    alt: string;
    ori: string;
  }[];
}

export default function ProductGallery({ images }: Props) {
  return (
    <>
      <div className="mt-4 d-block d-md-flex justify-content-between flex-wrap">
        {images.map((image) => {
          const imgDimensions = setDimensions(image);
          return (
            <div className="d-md-flex">
              <img
                className={`${imgDimensions}`}
                src={`${import.meta.env.BASE_URL}images/${image.src}`}
                alt={image.alt}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

const setDimensions = (image) => {
  if (image.ori === "landscape") {
    return "w-100 max-height-200 rounded-3 mb-4 mb-md-3";
  }
  if (image.ori === "portrait") {
    return "w-100 max-height-300 rounded-3 mb-4 mb-md-3";
  }
  if (image.ori === "square") {
    return "w-100 max-height-250 rounded-3 mb-4 mb-md-3";
  }
  return "w-100 max-height-200 rounded-3 mb-4 mb-md-3";
};
