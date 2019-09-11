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

// Header for section links (to add clarity and ease of use to site)
class SectionLinksHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="section-links-header">Links</div>
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
        this.childSetParentSectBG = props.childSetParentSectBG;
        this.mouseEnterLogo = this.mouseEnterLogo.bind(this);
        this.mouseLeaveLogo = this.mouseLeaveLogo.bind(this);
        this.arrowClassName = "sl-hover-arrow";
        this.arrowID = props.arrowID;
        this.arrowRef = React.createRef();
        this.arrowStyle = {width: "0.5rem"};
        this.centerArrow();
    }
    // Center the hover arrow to middle of section link
    centerArrow() {
        window.setTimeout(() => {
            let arrow = this.arrowRef.current;
            if (arrow !== null) {
                const imgNode = arrow.previousSibling.children[0];
                const imgWidth = imgNode.clientWidth;
                const nWidth = arrow.clientWidth;
                // Set arrow back to width 0 so we get an arrow shape and not trapezoid shape
                arrow.style.width = "0px";
                const centeringAmount = (imgWidth/2) - nWidth;
                arrow.style.left = centeringAmount + "px";
            }
        }, 25);
    }
    mouseEnterLogo() {
        // Set priority to 1 so that when one moves the mouse from one link to the next, the 
        // background color is not overwritten by the delayed by the dehovering of this link
        var priority = 1;
        this.props.childSetParentSectBG("hover", this.hoverBG, priority);
        
    }
    mouseLeaveLogo() {
        // Set priority to 0 so that this does not overwrite mouse enter of a different link
        var priority = 0;
        this.props.childSetParentSectBG("hover", this.parentBG, priority);
    }
    render() {
        return (
            <React.Fragment>
                <div class='section-link'>
                    <a href={this.url} target='_blank'>
                        <img src={this.logo} onMouseEnter={this.mouseEnterLogo} onMouseLeave={this.mouseLeaveLogo} />
                    </a>
                    <div style={this.arrowStyle} id={this.name + "-arrow"} class={this.arrowClassName}
                    ref={this.arrowRef}>
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
        // Keep track of the priorities set forth by the last active section link
        this.prevSectionLinkPriority = -1;
        this.childSetParentSectBG = this.childSetParentSectBG.bind(this);
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

    // Set the background and state text with the given state text and color; Will be called from the child
    // section links
    childSetParentSectBG(s_text, color, priority) {
        if (priority < this.prevSectionLinkPriority) {
            this.setState({text: s_text, backgroundColor: color});
        } else {
            window.setTimeout(() => {
                this.setState({text: s_text, backgroundColor: color});
            }, 25);
        }
        this.prevSectionLinkPriority = priority;
    }
    render() {
        let section_links = null;
        if (this.sectionLinks !== undefined && this.sectionLinks !== null && this.sectionLinks.length > 0) {
            section_links = this.sectionLinks.map((obj) => 
              <SectionLink key={genKey(obj.name)} name={obj.name} 
                url={obj.url} logo={obj.logo} state={this.state} 
                hoverBG={obj.hoverBG} hoverBGName={obj.hoverBGName} 
                parentBG={this.hoverBG} childSetParentSectBG={this.childSetParentSectBG}
            />);
        }
        return (
            <React.Fragment>
                <div onMouseLeave={this.toggleState} onMouseEnter={this.toggleState} id={this.name} style={this.getBackground()} class="angular-section">
                    <div class="angular-content">
                        <div class="banner-title-img">
                            <img src={this.bannerImg} />
                        </div>
                        <div class="section-links-wrapper">
                            <SectionLinksHeader />
                            {section_links}
                        </div>
                    </div>
                </div>
                <AngularDivider divOrientation={this.divOrientation} state={this.state} />
            </React.Fragment>
        );
    }
}
class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.key = "PAGE_HEADER"
        this.pageHeaderSpecs = props.pageHeader;
        this.state = {
            "description": "active",
            "backgroundColor": this.pageHeaderSpecs['background'],
            "fontColor": this.pageHeaderSpecs['fontColor'],
            "fontFamily": this.pageHeaderSpecs['fontFamily'],
            "logoOpacity": this.pageHeaderSpecs['logoOpacity'],
            "headerOpacity": this.pageHeaderSpecs['headerOpacity']
        }
    }
    getStyle() {
        return {
            backgroundColor: this.state.backgroundColor,
            color: this.state.fontColor,
            fontFamily: this.state.fontFamily
        };
    }
    getLogoStyle() {
        return {
          opacity: this.state.logoOpacity  
        };
    }
    getHeaderStyle() {
        let hStyle = {
            opacity: this.state.headerFontOpacity
        };
        if (this.pageHeaderSpecs['title'].trim() == "") {
            hStyle.display = "None";
        }
        return hStyle;
    }
    getHeaderFontOpacity() {
        return {
            opacity: this.state.headerFontOpacity
        };
    }
    render() {
        const my_opacity = this.getHeaderFontOpacity();
        const my_tabs = this.sections.map((obj) => 
            <a class="header-tab" style={obj.opacityAsTab}>
                {obj.name}
            </a>);
        return(
            <section id={this.key} class="page-header" style={this.getStyle()}>
                <div class="header-title" style={this.getHeaderStyle()}>
                    {this.pageHeaderSpecs['title']}
                </div>
                <div class="header-logo-wrapper" style={this.getLogoStyle()}>
                    <a href="#">
                        <img src={this.pageHeaderSpecs['logo']}>
                        </img>
                    </a>
                </div>
                <div class="header-tabs">
                    {my_tabs}
                </div>
            </section>
        );
    }
}
// Import our custom font(s)
function FontImport(props) {
    return (
        <link href={props.path} rel="stylesheet">
        </link>
    );
}
class SectionList extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.counter = 0;
        this.key = "SECT_LIST";
        this.pageHeader = props.pageHeader;
        this.customFontPath = props.customFontPath;
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
        const my_sections = this.sections.map((obj) => <AngularSection key={genKey(obj.name)} name={obj.name} hoverBG={obj.hoverBG} bannerImg={obj.bannerImg} divOrientation={this.divOrientation()} sectionLinks={obj.sectionLinks}/>);
        return (
            <React.Fragment>
                <FontImport path={this.customFontPath}></FontImport>
                <PageHeader pageHeader={this.pageHeader} sections={this.sections}>
                </PageHeader>
                <section class="section-list">
                    {my_sections}
                </section>
            </React.Fragment>
        );
    }
}
