interface Props {
  socialDetails: Array<object>;
}

export default function SocialList({ socialDetails }: Props) {
  const socials: Array<object> = [];

  Object.entries(socialDetails).map(([id, { type, handle, href }]) => {
    socials.push(
      <div className="col-12">
        <div className="d-flex">
          <a href={href}>
            <p className="text-xl">
              {getIcon(type)} {handle}
            </p>
          </a>
        </div>
      </div>
    );
  });

  return <>{socials}</>;
}

const getIcon = (type) => {
  if (type === "x") {
    return <i className="text-lg fa-brands fa-x-twitter"></i>;
  }
  if (type === "bluesky") {
    return <i className="text-lg fa-brands fa-bluesky"></i>;
  }
  if (type === "youtube") {
    return <i className="text-lg fa-brands fa-youtube"></i>;
  }
  if (type === "patreon") {
    return <i className="text-lg fa-brands fa-patreon"></i>;
  }
  if (type === "instagram") {
    return <i className="text-lg fa-brands fa-instagram"></i>;
  }
  if (type === "facebook") {
    return <i className="text-lg fa-brands fa-facebook"></i>;
  }
  if (type === "linkedin") {
    return <i className="text-lg fa-brands fa-linkedin"></i>;
  }
  if (type === "tiktok") {
    return <i className="text-lg fa-brands fa-tiktok"></i>;
  }
  if (type === "twitch") {
    return <i className="text-lg fa-brands fa-twitch"></i>;
  }
};
