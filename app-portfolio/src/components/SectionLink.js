const React = require('react');
const ReactDOM = require('react-dom');
const { checkObjAndKey, repeatStringNTimes } = require('./Utility');
const { BottomSpawnModal } = require('./Modal');
const { Link } = require('react-router-dom');
// One of multiple links that appear under their respective Angular Sections
class SectionLink extends React.Component {
    constructor(props) {
        super(props);
        this.specs = props.specs;
            // this.specs has the following keys:
            // name, url, logo, hoverBG, hoverBGname, target
            // ---------------------------------------------
            // it sometimes has:
            // modalSpecs
        this.parentBG = props.parentBG;
        this.childSetParentSectBGAndHoverText = props.childSetParentSectBGAndHoverText;
        this.mouseEnterLogo = this.mouseEnterLogo.bind(this);
        this.mouseLeaveLogo = this.mouseLeaveLogo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.arrowClassName = "sl-hover-arrow";
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
        let priority = 1; const hoverTextShow = true; const hoverText = this.specs.name;
        this.props.childSetParentSectBGAndHoverText("hover", this.specs.hoverBG, priority, hoverText, hoverTextShow);
        
    }
    mouseLeaveLogo() {
        // Set priority to 0 so that this does not overwrite mouse enter of a different link
        let priority = 0; const hoverTextShow = false; const hoverText = this.specs.name;
        this.props.childSetParentSectBGAndHoverText("hover", this.parentBG, priority, hoverText, hoverTextShow);
    }
    handleClick() {
        if (this.specs.target === "MODAL" && checkObjAndKey(this.specs, "modalSpecs")) {
            const modalTarget = document.getElementById('MODAL_RENDER_TARGET');
            const initialState = { show: true };
            // Remove previous modal if it exists
            ReactDOM.unmountComponentAtNode(modalTarget);
            ReactDOM.render(
                <BottomSpawnModal specs={this.specs.modalSpecs} state={initialState}>
                </BottomSpawnModal>
            , modalTarget);
        } else {
            window.open(this.specs.url, this.specs.target);
        }
    }
    render() {
        if (checkObjAndKey(this.specs, "routerLink") && this.specs.routerLink) {
            return (
                <React.Fragment>
                    <div className='section-link'>
                        <Link to={this.specs.url}>
                            <img src={this.specs.logo} />
                        </Link>
                        <div style={this.arrowStyle} id={this.specs.name + "-arrow"} className={this.arrowClassName}
                        ref={this.arrowRef}>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className='section-link'>
                        <a onClick={this.handleClick}>
                            <img src={this.specs.logo} onMouseEnter={this.mouseEnterLogo} onMouseLeave={this.mouseLeaveLogo} />
                        </a>
                        <div style={this.arrowStyle} id={this.specs.name + "-arrow"} className={this.arrowClassName}
                        ref={this.arrowRef}>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
// Header for section links (to add clarity and ease of use to site)
class SectionLinksHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="section-links-header">Links</div>
        );
    }
}
// Section link hover text element
function SectionLinkHoverText(props) {
    return (
        <div className={props.specs['className']} style={props.specs['textColor']}>
            {repeatStringNTimes(props.specs['text'], 200, ' ')}
        </div>
    );
}
module.exports = {
    SectionLink: SectionLink,
    SectionLinksHeader: SectionLinksHeader,
    SectionLinkHoverText: SectionLinkHoverText
};
