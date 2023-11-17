import CardFeatures from "../products/cardFeatures";

interface Props {
  title: string;
  titleImage: string;
  tag_line: string;
  buttonText: string;
  buttonLink: string;
  buttonColor: string;
  font: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
  bgOpacity: number;
  position: string;
  feature_collection: Array<object>;
}

export default function TestimonialsFade({
  title,
  titleImage,
  tag_line,
  buttonText,
  buttonLink,
  buttonColor,
  font,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
  bgOpacity,
  position,
  feature_collection,
}: Props) {
  const styles = {
    pageHeader: {
      backgroundImage: "url(" + pageHeaderBgImg + ")",
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius,
    },
  } as const;

  const renderTitle = () => {
    if (titleImage) {
      return <img src={`${import.meta.env.BASE_URL}images/${titleImage}`} className="mw-100" alt={`${title}`} />;
    }

    return <h1 className="text-white mb-4">{title}</h1>;
  };

  const renderLinkButtons = () => {
    if (!buttonText || !buttonLink) return;
    return <CardFeatures feature_card_collection={feature_collection} />;
  };

  const renderTagLine = () => {
    if (!tag_line) return;
    const desc_font = font ? ` text-${font}` : "";
    return <p className={`lead text-white mb-sm-6 mb-4${desc_font}`}>{tag_line}</p>;
  };

  const setBgOpacity = () => {
    return isNaN(bgOpacity) ? 6 : bgOpacity;
  };

  const setPosition = () => {
    if (!position) return "";
    if (position === "top") {
      return " top";
    }
  };

  return (
    <>
      <section className="mb-0">
        <div className={`page-header py-5 py-md-0${setPosition()}`} style={styles.pageHeader}>
          <span className={`mask bg-black opacity-${setBgOpacity()}`}></span>
          <div className={`container`}>
            <div className="row justify-content-center">
              <div className="text-center mx-auto">
                <div className="d-block text-center mb-5">
                  {renderTitle()}
                  {renderTagLine()}
                </div>
                {renderLinkButtons()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
