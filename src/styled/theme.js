const size = {
  mobileS: "20em",
  mobileM: "23.43em",
  mobileL: "26.56em",
  tablet: "48em",
  laptop: "64em",
  laptopL: "90em",
  desktop: "160em",
};

const theme = {
  colors: {
    bodyText: "#626262",
  },
  bgColors: {
    main: "background: linear-gradient(270deg, #97B35D 0%, #296F2E 100%)",
    secondary: "#5A8D43",
    button: "linear-gradient(270deg, #90AB64 0%, #619353 100%)",
  },
  mediaQueries: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
};

export default theme;
