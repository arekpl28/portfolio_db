const size = {
  fold: "279px",
  mobileS: "320px",
  mobileM: "360px",
  mobileL: "410px",
  surface: "539px",
  tablet: "767px",
  laptop: "1024px",
  laptopM: "1279px",
  laptopL: "1440px",
  desktop: "1919px",
  desktopM: "2432px",
  // desktopM: "2560px",
};

export const device = {
  fold: `(min-width: ${size.fold})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  surface: `(min-width: ${size.surface})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopM: `(min-width: ${size.desktopM})`,
};
