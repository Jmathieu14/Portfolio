
import { imageHelper } from './ImageHelper';

const myOpacity = 0.85;

export const myOpacityStyle = { opacity: myOpacity };
export const fontImportLink = "https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900|Roboto|Source+Sans+Pro&display=swap";

export function pageHeaderLayout(title = "") {
    return {
        "title": title,
        "logo": imageHelper.customLogos.mainLogo,
        "logoURL": "#",
        "logoStyle": myOpacityStyle,
        "background": "#000",
        "backgroundName": "black",
        "fontColor": "#FFF",
        "fontColorName": "White",
        "headerFontOpacity": myOpacity,
        "fontFamily": "'Montserrat', 'Roboto', sans-serif",
        "mobileMoreIcon": imageHelper.utilityLogos.mobileMoreIcon,
        "mobileMoreStyle": { color: "#FFF", opacity: myOpacity }
    };
}