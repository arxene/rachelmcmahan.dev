import React from "react";
import techSurveyReferrerExample from "./tech-survey-referrer-example.jpg";
import vrHeadset from "./vr-headset.jpg";
import "./techstudy.css";
//import CopyIcon from "./icons8-copy-24.png";

export default function TechStudy() {
  return (
    <div style={{ maxWidth: "95%", marginLeft: "auto", marginRight: "auto", marginTop: "3em", marginBottom: "3em" }}>
      <h1>$225 LA Technology Study</h1>
      <img src={vrHeadset} alt="VR headset" style={{ maxWidth: "100%" }}></img>
      <p>
        This 2.5 hour tech study is a fun, easy way to earn $225 in your free time. You will test a VR (virtual reality)
        headset by making different facial expressions and saying phrases. The location is near Glendale.
      </p>
      <p>We need people whose ethnicity is one of these:</p>
      <table>
        <tr>
          <th>Ethnicity</th>
          <th>Countries</th>
          <th>Ages</th>
        </tr>
        <tr>
          <td>SOUTH ASIAN</td>
          <td>India, Bangladesh, Pakistan, Nepal, Sri Lanka, Maldives</td>
          <td>*14-75</td>
        </tr>
        <tr>
          <td>MIDDLE EASTERN / NORTH AFRICAN</td>
          <td>
            Algeria, Cyprus, Egypt, Iran, Iraq, Israel, Kuwait, Lebanon, Libya, Morocco, Oman, Palestine, Qatar, Saudi
            Arabia, Syria, Tunisia, Turkey, UAE, Yemen
          </td>
          <td>
            *14-17
            <br />
            *40-75
            <br />
            *18-39 female only
          </td>
        </tr>
        <tr>
          <td>EAST ASIAN</td>
          <td>China, Hong Kong, Macau, Taiwan, Japan, Mongolia, Korea</td>
          <td>
            *14-17
            <br />
            *56-75
          </td>
        </tr>
        <tr>
          <td>SOUTHEAST ASIAN</td>
          <td>Cambodia, Indonesia, Laos, Malaysia, Philippines, Singapore, Thailand, Vietnam</td>
          <td>
            *14-17
            <br />
            *56-75
          </td>
        </tr>
        <tr>
          <td>ALL OTHER ETHNICITIES</td>
          <td></td>
          <td>
            *14-17
            <br />
            *70-75
          </td>
        </tr>
      </table>
      <p>
        When you take the survey to sign up for the tech study, fill in the REFERRED BY NAME and EMAIL on question 2 as
        shown below. Once you complete the study you may be able to refer others and receive a $25-50 referral award.
      </p>
      <img
        src={techSurveyReferrerExample}
        alt="Tech study referrer"
        style={{ border: "1px solid black", borderRadius: 15, margin: "10px 0px", maxWidth: "100%" }}
      ></img>
      <div style={{ marginBottom: 20 }}>
        Referred by name: <b>Rachel McMahan</b>
        <br />
        Referred by email: <b>rae.mcmahan@gmail.com</b>
      </div>
      {/* <img src={CopyIcon} alt="Copy button" /> */}
      <a
        href="https://www.surveymonkey.com/r/SamaraLARefer"
        style={{ fontWeight: "bold", fontSize: 24, color: "blue" }}
      >
        Sign up here for the $225 LA Tech Study
      </a>
    </div>
  );
}
