//babel --plugins @babel/plugin-transform-react-jsx pre/pre-jsx/overhaul.js -d pre/pre-build-js-o &&

// Return a key for given it's name (n)
function genKey(n) {
    var k = n + "-" + Math.random().toString().substr(2,);
    return k;
}

class AngularDivider extends React.Component {
    constructor(props) {
        super(props);
        this.divOrientation = props.divOrientation;
        this.baseName = "angular-divider";
    }
    genClassName() {
        if (this.divOrientation === undefined || this.divOrientation === "") {
            return this.baseName;
        } else {
            return this.baseName + "-" + this.divOrientation;
        }
    }
    // Get the correct background color from the parent object
    getBackgroundFromParent() {
        return {backgroundColor: this.props.state.backgroundColor};
    }
    render() {
        const cName = this.genClassName();
        return (
            <div class='ang-div-wrapper' style={this.getBackgroundFromParent()}>
                <div class={cName}></div>
            </div>
        );
    }
}
class SectionLink extends React.Component {
    constructor(props) {
        super(props);
        this.url = props.url;
        this.logo = props.logo;
        this.name = props.name;
        this.hoverBG = props.hoverBG;
        this.hoverBGName = props.hoverBGName;
        this.parentBG = props.parentBG;
        this.setBackground = props.setBackground;
        this.mouseEnterLogo = this.mouseEnterLogo.bind(this);
        this.mouseLeaveLogo = this.mouseLeaveLogo.bind(this);
        this.slaHover = props.slaHover;
        this.arrowClassName = "";
        this.updateArrowClass = this.updateArrowClass.bind(this);
        this.updateArrowClass(!this.slaHover);
        window.setTimeout(50, () => {this.updateArrowClass(this.slaHover);});
    }
    toggleSLAState() {
        this.slaHover = !this.slaHover;
    }
    mouseEnterLogo() {
        this.toggleSLAState()
        this.updateArrowClass(this.slaHover);
        window.setTimeout(300, () => {
            this.props.setBackground("hover", this.hoverBG);
        });
    }
    mouseLeaveLogo() {
        this.toggleSLAState()
        this.updateArrowClass(this.slaHover);
        window.setTimeout(300, () => {
            this.props.setBackground("hover", this.parentBG);
        });
    }
    updateArrowClass(hover) {
        const arrowClass = this.slaHover ? "sl-hover-arrow react-hover" : "sl-hover-arrow";
        this.arrowClassName = arrowClass;
        let myArrow = document.getElementById(this.key);
        this.slaHover ? console.log(this) : console.log("nah");
    }
    render() {
        return (
            <React.Fragment>
                <div onMouseEnter={this.mouseEnterLogo} onMouseLeave={this.mouseLeaveLogo} class='section-link'>
                    <a href={this.url} target='_blank'>
                        <img src={this.logo} />
                    </a>
                    <div style={this.slStyle} id={this.key} class={this.arrowClassName}>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
class AngularSection extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.hoverBG = props.hoverBG;
        this.bannerImg = props.bannerImg;
        this.sectionLinks = props.sectionLinks;
        this.divOrientation = props.divOrientation;
        this.state = {
            text: "normal",
            backgroundColor: ""
        };
        this.toggleState = this.toggleState.bind(this);
        this.setBackground = this.setBackground.bind(this);
    }
    toggleState() {
        if (this.state.text === "normal") {
            this.setState({text: "hover", backgroundColor: this.hoverBG});
        } else {
            this.setState({text: "normal", backgroundColor: ""});
        }
    }
    getBackground() {
        return {backgroundColor: this.state.backgroundColor};
    }
    // Get the appropriate style modifications for Section Link Arrows
    // if hover is activated
    getArrowState(slBG) {
        // If the section is in the hover state and the background color has changed to the matching section link's hover color, enable hover style for the section link's hover arrow indicator
        if (this.state.text === "hover" && this.state.backgroundColor === slBG) {
            return true;
        } else {
            return false;
        }
    }
    // Set the background and state text with the given state text and color
    setBackground(s_text, color) {
        this.setState({text: s_text, backgroundColor: color});
    }
    render() {
        let section_links = null;
        if (this.sectionLinks !== undefined && this.sectionLinks !== null && this.sectionLinks.length > 0) {
            section_links = this.sectionLinks.map((obj) => 
              <SectionLink key={genKey(obj.name)} name={obj.name} 
                url={obj.url} logo={obj.logo} state={this.state} 
                hoverBG={obj.hoverBG} hoverBGName={obj.hoverBGName} 
                parentBG={this.hoverBG} setBackground={this.setBackground} 
                slaHover={this.getArrowState(obj.hoverBG)}
            />);
        }
        return (
            <React.Fragment>
                <div onMouseLeave={this.toggleState} onMouseEnter={this.toggleState} id={this.name} style={this.getBackground()} class="angular-section">
                    <div class="angular-content">
                        <div class="banner-title-img">
                            <img src={this.bannerImg} />
                        </div>
                        {section_links}
                    </div>
                </div>
                <AngularDivider divOrientation={this.divOrientation} state={this.state} />
            </React.Fragment>
        );
    }
}
class SectionList extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.counter = 0;
        this.key = "SECT_LIST";
    }
    // Get orientation of angular divider given the section index
    divOrientation() {
        this.counter++;
        if (this.counter % 2 === 0) {
            return "rev";
        }
        return "";
    }
    render() {
        const my_sections = this.sections.map((obj) => <AngularSection key={genKey(obj.name)} name={obj.name} hoverBG={obj.hoverBG} bannerImg={obj.bannerImg} divOrientation={this.divOrientation()} sectionLinks={obj.sectionLinks} />);
        return (
            <section class="section-list">
                {my_sections}
            </section>
        );
    }
}

// Load in mainPageSects variable
//const mainPageSects = require("./layouts/main-page-layout.json");
const mainPageSects = {
    "angular-sections": [
        {
            "name": "jmusic",
            "hoverBGName": "lightGrey",
            "hoverBG": "#DDD",
            "bannerImg": "../img/page/jm logo 3 -- music - clean.svg",
            "sectionLinks": [
                {
                    "name": "jmSoundcloud",
                    "url": "https://soundcloud.com/jacques_mathieu",
                    "logo": "../../img/page/Social Media/SVG/24/4419136 - cloud logo sound sound cloud soundcloud square icon.svg",
                    "hoverBG": "#F50",
                    "hoverBGName": "scloudOrange"
                }
            ]
        },
        {
            "name": "jprojects",
//            "hoverBGName": "sharpYellow",
//            "hoverBG": "#FFDD0E",
            "hoverBGName": "lightBlueGrey",
            "hoverBG": "#DDEEDD",
            "bannerImg": "../img/page/jm logo 3 -- project.svg",
            "sectionLinks": [
                {
                    "name": "GitHub",
                    "url": "https://github.com/Jmathieu14",
                    "logo": "../../img/page/Social Media/SVG/24/4419165 - circle github outline social-media icon.svg",
                    "hoverBG": "#A54AB0",
                    "hoverBGName": "githubDesktopPurple"
                }
            ]
        }
    ]
}

// Render to main view
ReactDOM.render(
  <SectionList sections={mainPageSects["angular-sections"]} />,
  document.getElementById('page-content')
);
