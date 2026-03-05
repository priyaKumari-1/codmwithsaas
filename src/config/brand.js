import saaslogo from '../../src/assets/saalaiLogo.png';
import codmlogo from "../../src/assets/imgs/template/image17.png";
// import codmFavicon from '../../src/assets/imgs/template/CodmFavicon.svg';
// import SaaaAiFavicon from "../../src/assets/saasfavicon.png";

const codmFavicon = "/CodmFavicon.svg";
const SaaaAiFavicon = "saasfavicon.png";

const hostname = window.location.hostname;

const brandConfig = {
  codm: {
    name: "CODM Software",
    logo:codmlogo,
    key:"codm_Logo",
    title : "CODM Software Limited | Top Salesforce Partner",
    favicon:codmFavicon
  },
  saasai: {
    name: "SaasAi Labs",
    logo: saaslogo,
    key:"saas_logo",
    title: "SaasAi Labs | Modern SaaS Solutions",
    favicon:SaaaAiFavicon
  }
};

let brand = "codm";

if (hostname.includes("saasailabs")) {
  brand = "saasai";
}

export default brandConfig[brand];