import React, { Component } from "react";
import Sneaker from "./Sneaker.tsx";
import { Outlet, Link } from "react-router-dom";

class InputFields extends Component {
  state: any = {
    baseValue: "#272525", //"rgb(39, 37, 37)",
    logoValue: "#de5b10", //"rgb(222, 91, 16)",
    laceValue: "#949793", //"rgb(148, 151, 147)",
    soleValue: "#545252", //"rgb(84, 82, 82)",
    threadValue: "#ffa500", //"rgb(255 165 0)",
    shoeMidValue: "#545252",
    shoeTongueValue: "#545252",
  };
  public baseChangeHandler = (value: string) => {
    console.log("Selected hex", value);
    this.setState({ baseValue: value });
  };
  public logoChangeHandler = (value: string) => {
    console.log("Selected hex", value);
    this.setState({ logoValue: value });
  };
  public laceChangeHandler = (value: string) => {
    console.log("Selected hex", value);
    this.setState({ laceValue: value });
  };
  public outSoleChangeHandler = (value: string) => {
    console.log("Selected hex", value);
    this.setState({ soleValue: value });
  };
  public threadChangeHandler = (value: string) => {
    console.log("Selected hex", value);
    this.setState({ threadValue: value });
  };
  public shoeMidChangeHandler = (value: string) => {
    console.log("Selected hex", value);
    this.setState({ shoeMidValue: value });
  };
  public shoeTongueChangeHandler = (value: string) => {
    console.log("Selected hex", value);
    this.setState({ shoeTongueValue: value });
  };

  render() {
    return (
      <>
       <div className="fields-container"> 
       
       <Link to="/"><button>Landing page</button></Link>
          <Sneaker
            baseValue={this.state.baseValue}
            logoValue={this.state.logoValue}
            laceValue={this.state.laceValue}
            soleValue={this.state.soleValue}
            threadValue={this.state.threadValue}
            shoeMidValue={this.state.shoeMidValue}
            shoeTongueValue={this.state.shoeTongueValue}
          />
          
      <div className="mainDiv">
          <div className="color-pallete">
          <div className="label">Select base color:</div>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={(e) => {
              this.baseChangeHandler(e?.target?.value);
            }}
            style={{ width: "40%", height: "35px" }}
            value={this.state.baseValue}
          />
          {this.state.baseValue}
        </div>

        <div className="color-pallete">
          <div className="label">Select logo color:</div>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={(e) => {
              this.logoChangeHandler(e?.target?.value);
            }}
            style={{ width: "40%", height: "35px" }}
            value={this.state.logoValue}
          />
          {this.state.logoValue}
        </div>

        <div className="color-pallete">
          <div className="label">Select lace color:</div>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={(e) => {
              this.laceChangeHandler(e?.target?.value);
            }}
            style={{ width: "40%", height: "35px" }}
            value={this.state.laceValue}
          />
          {this.state.laceValue}
        </div>

        <div className="color-pallete">
          <div className="label">Select outsole color:</div>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={(e) => {
              this.outSoleChangeHandler(e?.target?.value);
            }}
            style={{ width: "40%", height: "35px" }}
            value={this.state.soleValue}
          />
          {this.state.soleValue}
        </div>

        <div className="color-pallete">
          <div className="label">Select thread color:</div>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={(e) => {
              this.threadChangeHandler(e?.target?.value);
            }}
            style={{ width: "40%", height: "35px" }}
            value={this.state.threadValue}
          />
          {this.state.threadValue}
        </div>

        <div className="color-pallete">
          <div className="label">Select Mid color:</div>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={(e) => {
              this.shoeMidChangeHandler(e?.target?.value);
            }}
            style={{ width: "40%", height: "35px" }}
            value={this.state.shoeMidValue}
          />
          {this.state.shoeMidValue}
        </div>

        <div className="color-pallete">
          <div className="label">Select Tongue color:</div>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={(e) => {
              this.shoeTongueChangeHandler(e?.target?.value);
            }}
            style={{ width: "40%", height: "35px" }}
            value={this.state.shoeTongueValue}
          />
          {this.state.shoeTongueValue}
        </div>
      
        </div>   
        </div>
        
        
      </>
    );
  }
}

export default InputFields;
