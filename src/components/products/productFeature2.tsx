import parse from "html-react-parser";

interface Props {
  title: string;
  category: number;
  data: Map<string, string>;
}

export default function ProductOverview({ title, category, data }: Props) {
  const { description, full_description, font, features } = data;

  const fontClass = font ? ` text-${font}` : "";

  const renderTitle = () => {
    return title.length != 0 && <h2 className="mb-3">{title}</h2>;
  };

  const renderDescription = () => {
    if (!description) return;
    return <p className={`mb-3 w-lg-70${fontClass}`}>{description}</p>;
  };

  const renderFullDescription = () => {
    if (!full_description) return;
    return <p className={`mb-5 w-lg-70${fontClass}`}>{full_description}</p>;
  };

  const renderFeatures = () => {
    if (!features || features.length < 1) return;
    return (
      <div>
        <div className="nav-wrapper position-relative end-0 pb-4 border-bottom">
          <ul className="nav nav-pills nav-fill p-1 w-lg-50" role="tablist">
            {features.map((feature, index) => (
              <li className="nav-item">
                <a
                  className={`nav-link mb-0 px-0 py-1 ${index === 0 ? "active" : ""}`}
                  data-bs-toggle="tab"
                  href={`#${titleToSlug(feature.title)}`}
                  role="tab"
                  aria-controls={titleToSlug(feature.title)}
                  aria-selected={index == 0 ? true : false}
                >
                  {feature.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content tab-space">
          {features.map((feature, index) => (
            <div
              className={`tab-pane ${fontClass} ${index === 0 ? "active show" : ""}`}
              id={titleToSlug(feature.title)}
              role="tabpanel"
              aria-labelledby={`#${titleToSlug(feature.title)}`}
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <h5 className="mt-5 mb-4">{feature.title}</h5>
                  <div>{parse(feature.content)}</div>
                </div>
                {feature.image ? (
                  <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                    <img className="w-100 rounded-3" src={feature.image.url} alt={feature.image.description} />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const titleToSlug = (title) => {
    return title.replace(/ /g, "_").toLowerCase();
  };

  return (
    <>
      <div className="card card-product card-plain">
        <div className="row mt-5">
          <div className="col-12 ">
            {renderTitle()}
            {renderDescription()}
            {renderFullDescription()}
            {renderFeatures()}
          </div>
        </div>
      </div>
    </>
  );
}
