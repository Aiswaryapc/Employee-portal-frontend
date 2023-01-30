import React from "react";
import "./Policies.css"
import ViewPdf from "./ViewPDF";


const Card = (props) => {
return (
<div className="card1" onClick={props.onClick}>
<h2 className="policytitle">{props.title}</h2>
<img className="policyimage"  src={props.image} alt={props.title} />
</div>
);
}

class CardRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPdf1: false };
    this.state = { showPdf2: false };
    this.state = { showPdf3: false };
    this.state = { showPdf4: false };
    this.state = { showPdf5: false };

  }

  handleCodeOfConduct = () => {
    this.setState({ showPdf1: true });
  };
  handlePrivacyPolicy = () => {
    this.setState({ showPdf2: true });

  };
  handleCorporateGovernance  = () => {
    this.setState({ showPdf3: true });
  };
  handleGiftCardPolicy  = () => {
    this.setState({ showPdf4: true });
  };

  render() {
    return (
      <div className="card-row">
        <Card
          title="Code Of Conduct"
          image="https://www.i-sight.com/wp-content/uploads/2017/08/code-of-conduct-examples.jpg"
          onClick={this.handleCodeOfConduct}
        />
        {this.state.showPdf1 && <ViewPdf name="CodeOfConduct" />}
        

        <Card
          title="Privacy Policy               "
          image="https://store.hp.com/app/assets/images/uploads/prod/updating-privacy-policy-hero1561043982812535.jpg"
          onClick={this.handlePrivacyPolicy}
        />
        {this.state.showPdf2 && <ViewPdf name="PrivacyPolicy" />}


        <Card
          title="Corporate Governance"
          image="https://studycafe.in/cdn-cgi/image/fit=contain,format=webp,gravity=auto,metadata=none,quality=80,width=768,height=468/wp-content/uploads/2018/12/corporate-governance.jpg"
          onClick={this.handleCorporateGovernance}
        />
        {this.state.showPdf3 && <ViewPdf name="CorporateGovernance" />}


        <Card
          title="Gift Card Policy"
          image="https://img.etimg.com/thumb/msid-45503399,width-1200,height-900,imgsize-22038,overlay-etwealth/photo.jpg"
          onClick={this.handleGiftCardPolicy}
        />
        {this.state.showPdf4 && <ViewPdf name="GiftCardPolicy" />}
      </div>
    );
  }
}

export default CardRow;
