import BrandLogo from "./extensions/brandLogo.png"
import favicon from "./extensions/favicon.ico"

export default {
  config: {
    locales: ["fr", "cs", "de", "dk", "es"],
    auth: {
      logo: BrandLogo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: BrandLogo,
    },
    theme: {
      colors: {
        primary100: "#e9f9f7",
        primary200: "#bdccd7",
        primary500: "#6e7c90",
        primary600: "#404558",
        primary700: "#2b2c35",
        danger700: "#b72b1a",
      },
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "think. broadly.",
      },
    },
  },
  bootstrap(app) {
    console.log(app)
  },
}

