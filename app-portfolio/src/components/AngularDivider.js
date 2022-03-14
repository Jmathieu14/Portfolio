import React from 'react';

class AngularDivider extends React.Component {
    constructor(props) {
        super(props);
        this.divOrientation = props.divOrientation;
        this.backgroundColor = props.backgroundColor;
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
    resizeDividerOnMount() {
        let d = this.element.current;
        if (d != null) {
            d.style.width = "0px";
            const wrapper = d.parentElement;
            const dBorderH = wrapper.clientHeight - d.clientHeight;
            const borderLRText = wrapper.clientWidth + 'px solid black';
            d.style.borderTop = dBorderH + 'px solid transparent';
            if (d.className.indexOf("-rev") > 0) {
                d.style.borderLeft = borderLRText;
            } else {
                d.style.borderRight = borderLRText;
            }
        }
    }
    componentDidMount() {
        this.resizeDividerOnMount();
    }
    render() {
        const cName = this.genClassName();
        return (
            <div className='ang-div-wrapper' style={{backgroundColor: this.props.backgroundColor}}>
                <div ref={this.element} className={cName}></div>
            </div>
        );
    }
}

export default AngularDivider;
