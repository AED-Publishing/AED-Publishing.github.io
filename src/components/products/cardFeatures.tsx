interface Props {
  feature_card_collection: Array<object>;
  color: string;
  card_font: string;
}

const renderCard = ({ thumb_src, title, classList, cta, buttonColor, font, link }) => {
  const classBody = cta != null ? "align-items-end d-flex" : "text-center w-100 pt-8";
  const color = buttonColor ? buttonColor : "white";
  const card_font = font ? ` text-${font}` : "";
  return (
    <>
      <div className="col-md-6 col-lg-3 pb-2">
        <div
          className={`card card-background transparent-background align-items-start mb-4 mb-lg-0 h-100 ${classList}`}
        >
          <div
            className="full-background top-justified semi-transparent"
            style={{ backgroundImage: `url(${`${import.meta.env.BASE_URL}${thumb_src}`})`, backgroundSize: "cover" }}
          ></div>
          <div className={`card-body ${classBody}`}>
            <div className="d-block mt-10">
              <a href={`${link || "#"}`}>
                {/* <p className="text-white font-weight-bold mb-1">{collection}</p> */}
                <h1 className={`text-${color} font-weight-bolder${card_font}`}>{title}</h1>
                {cta != null && (
                  <a href={`${link || "#"}`} className={`text-${color} text-lg font-weight-semibold mb-0${card_font}`}>
                    {cta} &#62;
                  </a>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function CardFeatures({ feature_card_collection }: Props) {
  // const classes = `h-30 col-md-4 mr-3`;
  const classes = ``;
  feature_card_collection = [
    {
      thumb_src: `images/Ashton%20Fee.png`,
      title: `Get 5C News`,
      classList: classes,
      cta: `Join the Mailing List`,
      buttonColor: ``,
      font: `sabon`,
      link: `/mailer`,
    },
    {
      thumb_src: `images/Marie%20Rattlestilt.png`,
      title: `What is 5th Conspiracy?`,
      classList: classes,
      cta: `Discover the Truth`,
      buttonColor: ``,
      font: `sabon`,
      link: `/ip/5th-Conspiracy`,
    },
    {
      thumb_src: `images/Notch.png`,
      title: `Play 5C`,
      classList: classes,
      cta: `Join Our Playtest Community on Discord`,
      buttonColor: ``,
      font: `sabon`,
      link: `https://discord.com/invite/ZD72Jx4zsn`,
    },
  ];
  return (
    <div className="row mb-3 justify-content-center">
      {feature_card_collection.map((card_data) => renderCard(card_data))}
    </div>
  );
}

// thumb_src: string;
// title: string;
// collection: string;
// classList: string;
// cta: string;

{
  /* <div class="col-md-6 col-lg-3">
  <CardCategory thumb_src={category.thumb_src} title={category.title} collection={category.collection} />
</div> */
}

// <a className={`btn btn-${color} btn-lg text-lg${btn_font}`} aria-current="page" href={`${buttonLink}`}>
//   {buttonText}
// </a>
