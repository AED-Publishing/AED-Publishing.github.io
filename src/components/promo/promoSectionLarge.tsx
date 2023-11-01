interface Props {
  title: string;
  titleImage: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonColor: string;
  font: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
  bgOpacity: number;
  position: string;
}

export default function TestimonialsFade({
  title,
  titleImage,
  description,
  buttonText,
  buttonLink,
  buttonColor,
  font,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
  bgOpacity,
  position,
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
      return <img src={`${import.meta.env.BASE_URL}images/${titleImage}`} className="" alt={`${title}`} />;
    }

    return <h1 className="text-white mb-4">{title}</h1>;
  };

  const renderLinkButton = () => {
    if (!buttonText || !buttonLink) return;
    const color = buttonColor ? buttonColor : "white";
    const btn_font = font ? ` text-${font}` : "";
    return (
      <a className={`btn btn-${color} btn-lg text-lg${btn_font}`} aria-current="page" href={`${buttonLink}`}>
        {buttonText}
      </a>
    );
  };

  const renderDescription = () => {
    if (!description) return;
    const desc_font = font ? ` text-${font}` : "";
    return <p className={`lead text-white mb-sm-6 mb-4${desc_font}`}>{description}</p>;
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
              <div className="col-lg-8 col-sm-9 text-center mx-auto">
                {renderTitle()}
                {renderDescription()}
                {renderLinkButton()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
