//babel --plugins @babel/plugin-transform-react-jsx pre/pre-jsx/overhaul.js -d pre/pre-build-js-o &&

// Utility functions ------------------------------------------------
// 
// Return a key for given it's name (n)
function genKey(n) {
    var k = n + "-" + Math.random().toString().substr(2,);
    return k;
}
// Variable to store our display dimensions
var my_display_dimensions = {
    "width": 0,
    "height": 0
}
// Record body dimensions to our display dimensions variable (above)
function recordDisplayDimensions(debug) {
    var b = document.getElementsByTagName("body")[0];
    my_display_dimensions.height = b.clientHeight;
    my_display_dimensions.width = b.clientWidth;
    // Print to console if debugging enabled
    if (debug) console.log(my_display_dimensions);
}
// Variables that store the section list class name and whether 
// or not the section list is displayed
const SECT_LIST_CLASS = "section-list";
var SECT_DISPLAYED = false;
// Represents the maximum allowed width for the mobile view (in pixels)
const MOBILE_VIEW_MAX_WIDTH = 450;

// Show the section list
function showSectionList() {
    if (!SECT_DISPLAYED) {
        var sectList = document.getElementsByClassName(SECT_LIST_CLASS)[0];
        // If there is a section list on the page
        if (sectList !== undefined && sectList !== null) {
            sectList.className = SECT_LIST_CLASS + " show";
            SECT_DISPLAYED = true;
        }
    }
}
// Selectors for angular dividers
const ANGLR_DIV_SEL = ".angular-divider";
const ANGLR_DIV_REV_SEL = ".angular-divider-rev";
// Update dimensions of Angular Section Dividers on page
// (the non-react way)
function resizeDividersOnPageResize() {
    // Enable or disable debugging screen dimensions
    var debug = false;
    // Record the display dimensions
    recordDisplayDimensions(debug);    
    var dividers = document.querySelectorAll(ANGLR_DIV_SEL + ", " + ANGLR_DIV_REV_SEL);
    // Iterate through each angular divider on page
    for (var i = 0; i < dividers.length; ++i) {
        var d = dividers[i];
        var wrapper = d.parentElement;
        var angContent = wrapper.previousElementSibling;
        var dBorderH = wrapper.clientHeight - d.clientHeight;
        
        // Set element d's width to 0, b/c border width takes up space
        d.style.width = "0px";
        d.style.borderTop = dBorderH + "px solid transparent";
        // Apply proper styling to reverse angular divider
        if (d.className.indexOf("-rev") > 0) {
            d.style.borderLeft = wrapper.clientWidth + "px solid black";
        // Else apply normal styling
        } else {
            d.style.borderRight = wrapper.clientWidth + "px solid black";
        }
    }
    // Show the section list if not yet shown
    showSectionList();
}
// End of Utility functions -----------------------------------------

class AngularDivider extends React.Component {
    constructor(props) {
        super(props);
        this.divOrientation = props.divOrientation;
        this.baseName = "angular-divider";
        this.element = React.createRef();
    }
    genClassName() {
        if (this.divOrientation === undefined || this.divOrientation === "") {
            return this.baseName;
        } else {
            return this.baseName + "-" + this.divOrientation;
        }
    }
    // Best compromise between React and non-react approach
    resizeDividerOnMount() {
        let d = this.element.current;
        if (d != null) {
            d.style.width = "0px";
            const wrapper = d.parentElement;
            const dBorderH = wrapper.clientHeight - d.clientHeight;
            const borderLRText = wrapper.clientWidth + 'px solid black';
            d.style.borderTop = dBorderH + 'px solid transparent';
            // Apply proper styling to reverse angular divider
            if (d.className.indexOf("-rev") > 0) {
                d.style.borderLeft = borderLRText;
            // Else apply normal styling
            } else {
                d.style.borderRight = borderLRText;
            }
        }
    }
    componentDidMount() {
        this.resizeDividerOnMount();
    }
    // Get the correct background color from the parent object
    getParentBackgroundForWrapper() {
        return {backgroundColor: this.props.state.backgroundColor};
    }
    render() {
        const cName = this.genClassName();
        return (
            <div class='ang-div-wrapper' style={this.getParentBackgroundForWrapper()}>
                <div ref={this.element} class={cName}></div>
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

class HeaderTab extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.opacityAsTab = props.opacityAsTab;
        this.mobileVersion = props.mobileVersion;
        this.toggleMobileTabsHelper = props.toggleMobileTabsHelper;
        this.delay = 200;
        this.scrollToSection = this.scrollToSection.bind(this);
        this.mobileScrollToSection = this.mobileScrollToSection.bind(this);
        this.mobileMenuActive = props.mobileMenuActive;
    }
    scrollToSection() {
        var thisE = document.getElementById(this.name);
        if (thisE != null) {
            window.setTimeout(function() {
                thisE.scrollIntoView({ behavior: 'smooth' });
            }, this.delay);
        }
    }
    mobileScrollToSection() {
        if (this.mobileMenuActive) {
            this.props.toggleMobileTabsHelper(this.delay * 1.5);
            var thisE = document.getElementById(this.name);
            if (thisE != null) {
                window.setTimeout(function() {
                    thisE.scrollIntoView({ behavior: 'smooth' });
                }, this.delay);
            }
        }
    }
    render() {
        if (!this.mobileVersion) {
            return (
                <a class="header-tab" onClick={this.scrollToSection} style={this.opacityAsTab}>
                    {this.name}
                </a>
            );
        } else {
            return (
                <a class="mobile-header-tab" onClick={this.mobileScrollToSection} style={this.opacityAsTab}>
                    {this.name}
                </a>
            );
        }
    }
}
class HeaderTabs extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.moreIcon = props.moreIcon;
        this.moreStyle = props.moreStyle;
        this.state = {
            mobileTabsOpacity: 0,
            mobileTabsMaxHeight: '0px',
            mobileMenuActive: false
        }
        this.toggleMobileTabs = this.toggleMobileTabs.bind(this);
        this.toggleMobileTabsHelper = this.toggleMobileTabsHelper.bind(this);
    }
    // Get the height of the section list, and use that to set the mobile tab sections' max height
    getSectionListHeight() {
        let my_sl = document.querySelector('section.section-list');
        if (my_sl != null) {
            return my_sl.offsetHeight;
        } else {
            return 0;
        }
    }
    toggleMobileTabsHelper(delay) {
        if (delay > 0) {
            this.toggleMobileTabs();
        } else {
            this.toggleMobileTabs();
        }
    }
    toggleMobileTabs() {
        let slHeight = (this.getSectionListHeight() * 0.6).toString() + 'px';
        if (this.state.mobileTabsOpacity == 1) {
            this.setState({
                mobileTabsOpacity: 0,
                mobileTabsMaxHeight: '0px',
                mobileMenuActive: false
            });
        } else {
            this.setState({
                mobileTabsOpacity: 1,
                mobileTabsMaxHeight: slHeight,
                mobileMenuActive: true
            });
        }
    }
    getMobileTabsStyle() {
        return {
            opacity: this.state.mobileTabsOpacity,
            maxHeight: this.state.mobileTabsMaxHeight
        };
    }
    render() {
        let my_tabs = this.sections.map((obj) => 
        <HeaderTab opacityAsTab={obj.opacityAsTab} 
         name={obj.name} key={genKey(obj.name)} mobileVersion={false} />
        );
        let my_mobile_tabs = this.sections.map((obj) => 
        <HeaderTab opacityAsTab={obj.opacityAsTab} 
         name={obj.name} key={genKey(obj.name)} mobileVersion={true} toggleMobileTabsHelper={this.toggleMobileTabsHelper} mobileMenuActive={this.state.mobileMenuActive} />
        );
        return (
            <React.Fragment>
                <div onClick={this.toggleMobileTabs} class="mobile-show-tabs-icon">
                    <img src={this.moreIcon} style={this.moreStyle}>
                    </img>
                </div>
                <div class="mobile-header-tabs" style={this.getMobileTabsStyle()}>
                    {my_mobile_tabs}
                </div>
                <div class="header-tabs">
                    {my_tabs}
                </div>
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
        return (
            <section id={this.key} class="page-header" style={this.getStyle()}>
                <div class="header-title" style={this.getHeaderStyle()}>
                    {this.pageHeaderSpecs['title']}
                </div>
                <div class="header-logo-wrapper" style={this.pageHeaderSpecs['logoStyle']}>
                    <a href="#">
                        <img src={this.pageHeaderSpecs['logo']}>
                        </img>
                    </a>
                </div>
                <HeaderTabs sections={this.sections} moreIcon={this.pageHeaderSpecs['mobileMoreIcon']} moreStyle={this.pageHeaderSpecs['mobileMoreStyle']} />
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
        this.showSectionList = false;
    }
    // Get orientation of angular divider given the section index
    divOrientation() {
        this.counter++;
        if (this.counter % 2 === 0) {
            return "rev";
        }
        return "";
    }
    // Add 'show' to end of the class name if mobile view is enabled;
    // Otherwise, onload will handle it.
    handleClassName() {
        if (showSectionList) {
            SECT_DISPLAYED = true;
            return SECT_LIST_CLASS + " show";
        } else {
            return SECT_LIST_CLASS;
        }
    }
    componentDidMount() {
        this.showSectionList = true;
    }
    render() {
        const my_sections = this.sections.map((obj) => <AngularSection key={genKey(obj.name)} name={obj.name} hoverBG={obj.hoverBG} bannerImg={obj.bannerImg} divOrientation={this.divOrientation()} sectionLinks={obj.sectionLinks}/>);
        return (
            <React.Fragment>
                <FontImport path={this.customFontPath}></FontImport>
                <PageHeader pageHeader={this.pageHeader} sections={this.sections}>
                </PageHeader>
                <section class={this.handleClassName()}>
                    {my_sections}
                </section>
            </React.Fragment>
        );
    }
}

// Add event listener to window resizing event
window.addEventListener("resize", resizeDividersOnPageResize);
// Help for this from: https://www.tutorialrepublic.com/faq/how-to-capture-browser-window-resize-event-in-javascript.php

//window.onload = () => {
//    // This function also calls 'showSectionList()'
//    resizeDividersOnPageResize();
//}