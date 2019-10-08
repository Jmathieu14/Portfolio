//babel --plugins @babel/plugin-transform-react-jsx pre/pre-jsx/overhaul.js -d pre/pre-build-js-o &&

// Utility functions ------------------------------------------------
// 
// Return a key for given it's name (n)
function genKey(n) {
    var k = n + "-" + Math.random().toString().substr(2, );
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
        var angContent = wrapper.previousElementSibling.previousElementSibling;
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
// Return the string repeated n times (as a string)
function repeatStringNTimes(str, n, sep) {
    if (n <= 0) return "";
    let strPlusSep = str + sep;
    let res = "";
    let ctr = 0;
    while (ctr < n - 1) {
        res = res + strPlusSep;
        ++ctr;
    }
    return res + str;
}
// Return true if the object 'o' is not undefined and contains the key 'k'
function checkObjAndKey(o, k) {
    return o != null && k in o;
}

// Old domain we do not want users using any further
// Make sure it is in lowercase or redirect will fail!
const oldDomain = "rawgit";
// Redirect the user to the github pages location of the site if the url is of domain rawgit
function redirectToGitHubPages() {
    let curDomain = window.location.hostname;
    console.log(curDomain);
    if (curDomain.toLowerCase() === oldDomain) {
        // Where to redirect to
        const updatedLoc = "https://jmathieu14.github.io/Portfolio/html/home.html";
        console.log("Redirecting to most up to date page");
        window.open(updatedLoc, "_self");
    }
}
// End of Utility functions -----------------------------------------

// Begin custom react components
// A divider for our Angular Sections
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

class BottomSpawnModal extends React.Component {
    constructor(props) {
        super(props);
        this.specs = props.modalSpecs;
        this.state = {
            show: false
        }
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState() {
        this.setState({ show: !this.state.show });
    }
    getStyle() {
        if (checkObjAndKey(this.specs, 'style')) {
            return this.specs['style'];
        }
    }
    getTitle() {
        if (checkObjAndKey(this.specs, 'title')) {
            return this.specs['title'];
        }
        return "";
    }
    getClassName() {
        const baseCName = "bottom-spawn-modal";
        if (this.state.show) {
            return baseCName + " show";
        }
        return baseCName;
    }
    getCloseImagePath() {
        if (checkObjAndKey(this.specs, 'close')) {
            return this.specs['close'];
        }
    }
    render() {
        let imageSlider = null;
        if (checkObjAndKey(this.specs, 'imageSliderSpecs') && this.specs.imageSliderSpecs !== null) {
            imageSlider = <JssorImageSlider specs={this.specs.imageSliderSpecs}
            id={genKey("IMAGE_SLIDER")} 
            key={genKey("IMAGE_SLIDER_KEY")}
            />
        }        
        return (
            <span class={this.getClassName()} style={this.getStyle()}>
                <span class="bs-modal-menu-bar">
                    <span class="bs-modal-header">
                        {this.getTitle()}
                    </span>
                    <span class="bs-modal-close" onClick={this.toggleState}>
                        <img src={this.getCloseImagePath()}>
                        </img>
                    </span>
                </span>
                <span class="bs-modal-content">
                    {imageSlider}
                </span>
            </span>
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

// Links that appear under their respective Angular Sections
class SectionLink extends React.Component {
    constructor(props) {
        super(props);
        this.url = props.url; this.logo = props.logo;
        this.name = props.name; this.hoverBG = props.hoverBG;
        this.hoverBGName = props.hoverBGName; this.parentBG = props.parentBG;
        this.childSetParentSectBGAndHoverText = props.childSetParentSectBGAndHoverText;
        this.mouseEnterLogo = this.mouseEnterLogo.bind(this);
        this.mouseLeaveLogo = this.mouseLeaveLogo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.arrowClassName = "sl-hover-arrow";
        this.arrowID = props.arrowID; this.arrowRef = React.createRef();
        this.arrowStyle = {width: "0.5rem"};
        this.target = props.target; this.centerArrow();
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
        let priority = 1; const hoverTextShow = true; const hoverText = this.name;
        this.props.childSetParentSectBGAndHoverText("hover", this.hoverBG, priority, hoverText, hoverTextShow);
        
    }
    mouseLeaveLogo() {
        // Set priority to 0 so that this does not overwrite mouse enter of a different link
        let priority = 0; const hoverTextShow = false; const hoverText = this.name;
        this.props.childSetParentSectBGAndHoverText("hover", this.parentBG, priority, hoverText, hoverTextShow);
    }
    handleClick() {
        if (this.target === "MODAL") {
            console.log("Yo open this modal boi!");
        } else {
            window.open(this.url, this.target);
        }
    }
    render() {
        return (
            <React.Fragment>
                <div class='section-link'>
                    <a onClick={this.handleClick}>
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

function SectionLinkHoverText(props) {
    return (
        <div class={props.specs['className']} style={props.specs['textColor']}>
            {repeatStringNTimes(props.specs['text'], 200, ' ')}
        </div>
    );
}

class JssorImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.specs = props.specs;
        this.images = this.specs.images;
        this.options = { $AutoPlay: 1, $FillMode: 1 };
        this.slider = null;
        this.id = props.id;
    }
    componentDidMount() {
        new $JssorSlider$(this.id, this.options);
    }
    render() {
        let imageElements = this.images.map((obj) => 
            <div>
                <img data-u="image" src={obj.path} />
            </div>
        );
        return (
            <div id={this.id} class="ec-image-slider">
                <div data-u="slides">
                    {imageElements}
                </div>
            </div>
        );
    }
}

class ExpandableContent extends React.Component {
    constructor(props) {
        super(props);
        this.eCSpecs = props.eCSpecs;
        this.handleContentExpansion = props.handleContentExpansion;
        this.state = props.state;
        this.updateParentObject = this.updateParentObject.bind(this);
        this.toggleLocalState = this.toggleLocalState.bind(this);
    }
    // Toggle the local state of this object
    toggleLocalState() {
        if (this.state !== null) {
            this.setState({ contentExpanded: !this.state.contentExpanded })
        }
    }
    updateParentObject() {
        this.toggleLocalState();
        this.props.handleContentExpansion();
    }
    getECClassName() {
        if (this.state !== null && this.state.contentExpanded) {
            return "expandable-content-wrapper expanded";
        } else return "expandable-content-wrapper"; 
    }
    render() {
        if (checkObjAndKey(this.eCSpecs, 'show') && this.eCSpecs['show']) {
            let imageSlider = null;
            if (checkObjAndKey(this.eCSpecs, 'imageSliderSpecs') && this.eCSpecs.imageSliderSpecs !== null) {
                imageSlider = <JssorImageSlider specs={this.eCSpecs.imageSliderSpecs}
                id={genKey("IMAGE_SLIDER")} 
                key={genKey("IMAGE_SLIDER_KEY")}
                />
            }
            return (
                <div class={this.getECClassName()}>
                    <div class="ec-menu-bar">
                        <button onClick={this.updateParentObject} class="ec-button">
                            <img class="ec-icon" src={this.eCSpecs['icon']}>
                            </img>
                        </button>
                    </div>
                    <div class="expandable-content">
                        {imageSlider}
                    </div>
                </div>
            );
        } else return null;
    }
}

class AngularSection extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.hoverBG = props.hoverBG;
        this.bannerSpecs = props.bannerSpecs;
        this.eCSpecs = props.eCSpecs;
        this.sectionLinks = props.sectionLinks;
        this.divOrientation = props.divOrientation;
        this.state = {
            text: "normal",
            backgroundColor: "",
            hoverText: "test",
            hoverTextShow: false,
            contentExpanded: false
        };
        this.toggleState = this.toggleState.bind(this);
        // Keep track of the priorities set forth by the last active section link
        this.prevSectionLinkPriority = -1;
        this.childSetParentSectBGAndHoverText = this.childSetParentSectBGAndHoverText.bind(this);
        this.handleContentExpansion = this.handleContentExpansion.bind(this);
        this.sectionRef = React.createRef();
    }
    toggleState() {
        // Do not update state if the expandable section is active
        if (!this.state.contentExpanded) {
            if (this.state.text === "normal") {
                this.setState({text: "hover", backgroundColor: this.hoverBG, hoverTextShow: false});
            } else this.setState({text: "normal", backgroundColor: "", hoverTextShow: false});
        }
    }
    handleContentExpansion() {
        if (this.state.contentExpanded) {
            this.setState({contentExpanded: false});
        } else this.setState({contentExpanded: true});
    }
    // Get style for the section
    getStyle() {
        let debug = false;
        recordDisplayDimensions(debug);
        let element = this.sectionRef.current;
        let as_style = {backgroundColor: this.state.backgroundColor};
        let new_height = my_display_dimensions.height * 0.8;
        if (element != null && this.state.contentExpanded && element.style.height != new_height) {
            as_style['height'] = new_height.toString() + 'px';
        }
        return as_style;
    }

    // Set the background and state text with the given state text and color; Will be called from the child
    // section links
    childSetParentSectBGAndHoverText(s_text, color, priority, hoverText, hoverTextShow) {
        // Do not update background color if the expandable section is active
        if (!this.state.contentExpanded) {
            if (priority < this.prevSectionLinkPriority) {
                this.setState({text: s_text, backgroundColor: color, hoverText: hoverText, hoverTextShow: hoverTextShow});
            } else {
                window.setTimeout(() => {
                    this.setState({text: s_text, backgroundColor: color, hoverText: hoverText, hoverTextShow: hoverTextShow});
                }, 25);
            }
            this.prevSectionLinkPriority = priority;
        }
    }
    // Get the specs needed for the section link hover text component
    getSLHoverTextSpecs() {
        let specs = {
            className: 'sl-hover-text',
            text: this.state['hoverText'],
            textColor: { color: this.state['backgroundColor'] }
        }
        if (this.state['hoverTextShow']) {
            specs.className = specs.className + " show";
        }
        return specs;
    }
    getBannerTextStyle() {
        if (checkObjAndKey(this.bannerSpecs, 'bannerTextStyle')) {
            return this.bannerSpecs['bannerTextStyle'];
        }
    }
    getBannerImgStyle() {
        if (checkObjAndKey(this.bannerSpecs, 'bannerImgStyle')) {
            return this.bannerSpecs['bannerImgStyle'];
        }
    }
    getBannerTextHTML() {
        if (checkObjAndKey(this.bannerSpecs, 'bannerText')) {
            return (<div class="banner-title-text" style={this.getBannerTextStyle()}>
                        {this.bannerSpecs['bannerText']}
                    </div>
            );
        } else return null;
    }
    getBannerImgHTML() {
        if (checkObjAndKey(this.bannerSpecs, 'bannerImg')) {
            return (<div class="banner-title-img" style={this.getBannerImgStyle()}>
                        <img src={this.bannerSpecs['bannerImg']} />
                    </div>
            );
        } else return null;
    }
    render() {
        let section_links = null;
        if (this.sectionLinks !== undefined && this.sectionLinks !== null && this.sectionLinks.length > 0) {
            section_links = this.sectionLinks.map((obj) => 
              <SectionLink key={genKey(obj.name)} name={obj.name} 
                url={obj.url} logo={obj.logo} state={this.state} 
                hoverBG={obj.hoverBG} hoverBGName={obj.hoverBGName} 
                parentBG={this.hoverBG} target={obj.target} childSetParentSectBGAndHoverText={this.childSetParentSectBGAndHoverText}
            />);
        }
        let banner_text = this.getBannerTextHTML();
        let banner_img = this.getBannerImgHTML();
        return (
            <React.Fragment>
                <div onMouseLeave={this.toggleState} onMouseEnter={this.toggleState} id={this.name} style={this.getStyle()} class="angular-section" ref={this.sectionRef}>
                    <div class="angular-content">
                        {banner_text}
                        {banner_img}
                        <div class="section-links-wrapper">
                            <SectionLinksHeader />
                            {section_links}
                        </div>
                    </div>
                    <ExpandableContent eCSpecs={this.eCSpecs} state={this.state} handleContentExpansion={this.handleContentExpansion} />
                </div>
                <SectionLinkHoverText specs={this.getSLHoverTextSpecs()} />
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
            "headerFontOpacity": this.pageHeaderSpecs['headerFontOpacity']
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
    render() {
        return (
            <section id={this.key} class="page-header" style={this.getStyle()}>
                <div class="header-logo-wrapper" style={this.pageHeaderSpecs['logoStyle']}>
                    <a href={this.pageHeaderSpecs['logoURL']}>
                        <img src={this.pageHeaderSpecs['logo']}>
                        </img>
                    </a>
                </div>            
                <div class="header-title" style={this.getHeaderStyle()}>
                    {this.pageHeaderSpecs['title']}
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
// Set title for tab of web page in browser
function PageTitle(props) {
    return (
        <title>{props.text}</title>
    );
}

class SectionList extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.counter = 0;
        this.key = "SECT_LIST";
        this.showSectionList = false;
        this.modalSpecs = {'title': 'My Modal', 'close': '../img/page/Google Icons/baseline_close_white_48dp.png'};
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
        redirectToGitHubPages();
        this.showSectionList = true;
    }
    render() {
        const my_sections = this.sections.map((obj) => <AngularSection key={genKey(obj.name)} name={obj.name} hoverBG={obj.hoverBG} bannerSpecs={obj.bannerSpecs} eCSpecs={obj.expandableContentSpecs} divOrientation={this.divOrientation()} sectionLinks={obj.sectionLinks}/>);
        return (
            <React.Fragment>
                <section class={this.handleClassName()}>
                    {my_sections}
                </section>
                <BottomSpawnModal modalSpecs={this.modalSpecs} />
            </React.Fragment>
        );
    }
}

// Add event listener to window resizing event
window.addEventListener("resize", resizeDividersOnPageResize);
// Help for this from: https://www.tutorialrepublic.com/faq/how-to-capture-browser-window-resize-event-in-javascript.php
