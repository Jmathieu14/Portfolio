// An Angularly stylized section of a web page
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
              <SectionLink key={genKey(obj.name)} specs={obj} state={this.state} parentBG={this.hoverBG} childSetParentSectBGAndHoverText={this.childSetParentSectBGAndHoverText}
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
