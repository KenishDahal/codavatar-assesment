import Button from "@/components/button";
import Drop from "@/components/drop";

const page = () => {
  return (
    <div className="form">
      <div>Multi-Step Process Form Assignment</div>
      <div className="form__line">
        <div className="dot dot--first" style={{ left: "0%" }}></div>
        <div className="line-between-dots"></div>
        <div className="dot dot--second" style={{ left: "14%" }}></div>
        <div className="dot" style={{ left: "28%" }}></div>
        <div className="dot" style={{ left: "42%" }}></div>
        <div className="dot" style={{ left: "56%" }}></div>
        <div className="dot" style={{ left: "70%" }}></div>
        <div className="dot" style={{ left: "84%" }}></div>
        <div className="dot" style={{ left: "100%" }}></div>

        <div className="dotText" style={{ top: "550%", left: "0%" }}>
          Business <br/>Type
        </div>
        <div className="dotText" style={{ top: "550%", left: "14%" }}>
          Business <br/>Details
        </div>
        <div className="dotText" style={{ top: "550%", left: "28%" }}>
          Authorized<br/> Representative
        </div>
        <div className="dotText" style={{ top: "550%", left: "42%" }}>
          Business<br/> Owners
        </div>
        <div className="dotText" style={{ top: "550%", left: "56%" }}>
          Company<br/> Directors
        </div>
        <div className="dotText" style={{ top: "550%", left: "70%" }}>
          Support<br/>Information
        </div>
        <div className="dotText" style={{ top: "550%", left: "84%" }}>
          Add<br/>Details
        </div>
        <div className="dotText" style={{ top: "550%", left: "100%" }}>
          Complete Registration
        </div>
      </div>

      <div className="form__table">
        <div className="h6">Tell us more about your business</div>
        <div className="form__table__text">
          Your info is like the Wi-Fi password—totally crucial for keeping
          things running, impressing the money folks, and making sure you get
          top-notch service without any buffering!
        </div>

        <form className="form__table__data">
          <div className="form-group">
            <div htmlFor="LegalName" className="inputLabel">
              Legal Name *
            </div>
            <input type="text" id="input1" placeholder="Input 1" />
          </div>
          <div className="form-group">
            <div className="inputLabel">Doing business as *</div>
            <input type="text" id="input2" placeholder="Doing business as" />
          </div>
          <div className="form-group">
            <div className="inputLabel">Company Registration Number *</div>
            <input
              type="text"
              id="input3"
              placeholder="Company Registration Number"
            />
          </div>
          <div className="form-group">
            <div className="inputLabel">Random Registration Number *</div>
            <input
              type="text"
              id="input4"
              placeholder="Random Registration Number"
            />
          </div>
          <div className="form-group">
            <div className="inputLabel">Website URL *</div>
            <input type="text" id="input5" placeholder="Website URL" />
          </div>
          <div className="form-group">
            <div className="inputLabel">Industry Name *</div>
            <input type="text" id="input6" placeholder="Industry Name *" />
          </div>
          <div className="form-group">
            <div className="inputLabel">One Random Dropdown? *</div>
            <input type="text" id="input7" placeholder="Options nai options" />
          </div>
          <div className="form-group">
            <div className="inputLabel">
              Which dropdown would you like to select? *
            </div>
            <input type="text" id="input8" placeholder="More Options" />
          </div>
          <div className="form-group">
            <div className="inputLabel">Another Random Dropdown Appears *</div>
            <input
              type="text"
              id="input9"
              placeholder="Return of the options"
            />
          </div>
          <div className="form-group">
            <div className="inputLabel" htmlFor="input10">
              Account Usage Intent *
            </div>
            <input type="text" placeholder="Account Usage Intent" />
          </div>

          <div className="form-group">
            <div className="inputLabel">Random count per month *</div>
            <input type="text" placeholder="Put the value get the answer" />
          </div>

          <div className="form-group">
            <div className="inputLabel">
              Expected total visits in this page *
            </div>
            <input type="text" placeholder="In Number" />
          </div>
          <div className="form-group">
            <div className="inputLabel">Purpose of using fake form *</div>
            <input type="text" placeholder="Purpose of using fake form" />
          </div>
          <div className="form-group">
            <div className="inputLabel">Ek description toh banta hai *</div>
            <input type="text" placeholder="Product Description" />
          </div>
          <div className="form-group">
            <div>Contact email *</div>
            <input type="text" placeholder="Contact email" />
          </div>
        </form>

        <Drop
          topic={"Certification of Incorporation *"}
          text={"Upload the incorporation certificate"}
        />
        <Drop topic={"Company Logo *"} text={"Upload the company logo"} />

        <div className="next">
          <Button className="button" text={"Previous"} />
          <Button className="button" text={"Next"} />
        </div>
      </div>
    </div>
  );
};

export default page;
