// Top menu bar for site
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
            <section id={this.key} className="page-header" style={this.getStyle()}>
                <div className="header-logo-wrapper" style={this.pageHeaderSpecs['logoStyle']}>
                    <a href={this.pageHeaderSpecs['logoURL']}>
                        <img src={this.pageHeaderSpecs['logo']}>
                        </img>
                    </a>
                </div>            
                <div className="header-title" style={this.getHeaderStyle()}>
                    {this.pageHeaderSpecs['title']}
                </div>
                <HeaderTabs sections={this.sections} moreIcon={this.pageHeaderSpecs['mobileMoreIcon']} moreStyle={this.pageHeaderSpecs['mobileMoreStyle']} />
            </section>
        );
    }
}