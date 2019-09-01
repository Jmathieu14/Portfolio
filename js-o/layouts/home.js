"use strict";

// Set up layout of homepage
var mainPageSects = {
  "angular-sections": [{
    "name": "jmusic",
    "hoverBGName": "lightGrey",
    "hoverBG": "#DDD",
    "bannerImg": "../img/page/jm logo 3 -- music - clean.svg",
    "sectionLinks": [{
      "name": "jmSoundcloud",
      "url": "https://soundcloud.com/jacques_mathieu",
      "logo": "../../img/page/Social Media/SVG/24/4419136 - cloud logo sound sound cloud soundcloud square icon.svg",
      "hoverBG": "#F50",
      "hoverBGName": "scloudOrange"
    }]
  }, {
    "name": "jprojects",
    //            "hoverBGName": "sharpYellow",
    //            "hoverBG": "#FFDD0E",
    "hoverBGName": "lightBlueGrey",
    "hoverBG": "#DDEEDD",
    "bannerImg": "../img/page/jm logo 3 -- project.svg",
    "sectionLinks": [{
      "name": "GitHub",
      "url": "https://github.com/Jmathieu14",
      "logo": "../../img/page/Social Media/SVG/24/4419165 - circle github outline social-media icon.svg",
      "hoverBG": "#A54AB0",
      "hoverBGName": "githubDesktopPurple"
    }]
  }] // Render layout to main view

};
ReactDOM.render(React.createElement(SectionList, {
  sections: mainPageSects["angular-sections"]
}), document.getElementById('page-content'));