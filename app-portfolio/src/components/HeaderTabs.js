const React = require('react');
const { HeaderTab } = require('./HeaderTab');
const { genKey } = require('./Utility');
// Component that wraps one or more HeaderTab
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
        if (this.state.mobileTabsOpacity === 1) {
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
                <div onClick={this.toggleMobileTabs} className="mobile-show-tabs-icon">
                    <img src={this.moreIcon} style={this.moreStyle}>
                    </img>
                </div>
                <div className="mobile-header-tabs" style={this.getMobileTabsStyle()}>
                    {my_mobile_tabs}
                </div>
                <div className="header-tabs">
                    {my_tabs}
                </div>
            </React.Fragment>
        );
    }
}
module.exports = {
    HeaderTabs: HeaderTabs
};
