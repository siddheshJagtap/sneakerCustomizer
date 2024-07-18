import React, { Component } from "react";
import { SneakerWrapper } from "../assets/SneakerWrapper.ts";

interface ISneakerProps {
  baseValue: string;
  logoValue: string;
  laceValue: string;
  soleValue: string;
  threadValue: string;
  shoeMidValue: string;
  shoeTongueValue: string;
}

class Sneaker extends Component<ISneakerProps> {
  render() {
    console.log("New values", this.props);

    return (
      <>
        <div className="container">
          <SneakerWrapper.ShoeToe baseValue={this.props.baseValue}>
            <div className="toe-panel">
              {/* <div className="toe-panel-patch"></div> */}
              <div className="shoe-opening"></div>
            </div>
          </SneakerWrapper.ShoeToe>
          <SneakerWrapper.ShoeMid
            shoeMidValue={this.props.shoeMidValue}
            shoeTongueValue={this.props.shoeTongueValue}
          />

          <SneakerWrapper.ShoeHeel baseValue={this.props.baseValue} />
          <div className="heel-panel"></div>
          <SneakerWrapper.ShoeBase soleValue={this.props.soleValue}>
            <SneakerWrapper.Stitching threadValue={this.props.threadValue} />
            <div className="heel-logo"></div>
          </SneakerWrapper.ShoeBase>
          <SneakerWrapper.Logo
            baseValue={this.props.baseValue}
            logoValue={this.props.logoValue}
          />

          <div className="laces"></div>
          <SneakerWrapper.LacesRight laceValue={this.props.laceValue} />
          <SneakerWrapper.LacesLeft laceValue={this.props.laceValue} />
        </div>
      </>
    );
  }
}

export default Sneaker;
