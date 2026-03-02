import saaslogo from '../../src/assets/saalaiLogo.png';
import codmlogo from "../../src/assets/imgs/template/image17.png";
const hostname = window.location.hostname;



const brandConfig = {
  codm: {
    name: "CODM Software",
    logo:codmlogo,
    key:"codm_Logo"
  },
  saasai: {
    name: "SaasAi Labs",
    logo: saaslogo,
    key:"saas_logo"
  }
};

let brand = "codm";

if (hostname.includes("saasailabs")) {
  brand = "saasai";
}

export default brandConfig[brand];