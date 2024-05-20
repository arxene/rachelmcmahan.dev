import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";

const TechSurvey = () => {
  return (
    <>
      <Helmet>
        <script src={withPrefix("la-tech-study-refer.js")} type="text/javascript" />
      </Helmet>
    </>
  );
};

export default TechSurvey;
