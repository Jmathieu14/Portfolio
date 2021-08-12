const React = require('react');
// Top menu bar 'buttons' used to scroll to specified angular section
export class HeaderTab extends React.Component {
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
            window.setTimeout(function () {
                thisE.scrollIntoView({ behavior: 'smooth' });
            }, this.delay);
        }
    }
    mobileScrollToSection() {
        if (this.mobileMenuActive) {
            this.props.toggleMobileTabsHelper(this.delay * 1.5);
            var thisE = document.getElementById(this.name);
            if (thisE != null) {
                window.setTimeout(function () {
                    thisE.scrollIntoView({ behavior: 'smooth' });
                }, this.delay);
            }
        }
    }
    render() {
        if (!this.mobileVersion) {
            return (
                <a className="header-tab" onClick={this.scrollToSection}
                    style={this.opacityAsTab}>
                    {this.name}
                </a>
            );
        } else {
            return (
                <a className="mobile-header-tab"
                    onClick={this.mobileScrollToSection} style={this.opacityAsTab}>
                    {this.name}
                </a>
            );
        }
    }
}
