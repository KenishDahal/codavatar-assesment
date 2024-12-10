import Card from "@/components/card";
import CodeCard from "@/components/codeCard";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons"; // Import the Left Arrow Icon

const page = () => {
  return (
    <div className="signup">
      {/* left section */}
      <div className="signup__layout">
        <div className="signup__layout__back cardText">
          <ArrowLeftOutlined style={{ fontSize: "15px", width:"19px" }}/>
          Back
        </div>
        <div className="signup__layout__cards">
          <div className="signup__layout__cards__heading h3">Layout Cards</div>
          <Card
            name="Singapore"
            office="Head Office"
            text="Road to nowhere, 06-404, 500 Internal Error"
            imgSrc="./singapore.jpg" // Correct path to image in the public folder
          />
          <div className="row">
            <Card
              name="Hong Kong"
              office="Branches"
              text="Road to nowhere, 06-404, 500 Internal Error"
              imgSrc="./HongKong.jpg" // Correct path to image in the public folder
            />
            <Card
              name="USA"
              office="Branches"
              text="Road to nowhere, 06-404, 500 Internal Error"
              imgSrc="./usa.png" // Correct path to image in the public folder
            />
          </div>
        </div>
      </div>
      {/* RIGHT section */}
      <div className="signup__rightSection">
        <figure>
          <img src="./logo.png" alt="" />
        </figure>
        <CodeCard />
        <div className="signup__rightSection__policy uploadText">
          By continuing, you’re agreeing to Nobody’s{" "}
          <span style={{ color: "#00BFFF" }}>
            Terms of Service, Privacy Policy and Cookie Policy.
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
