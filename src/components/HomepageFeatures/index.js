import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "REST API",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Serverless REST API for Web Monetization Statistics.</>,
  },
  {
    title: "Platform Agnostic",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        PipeWebMonetization API is platform agnostic. It can be used with any
        framework or library.
      </>
    ),
  },
  {
    title: "Powers PipeWebMonetization Dashboard",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <a href="https://dashboard.pipewebmonetization.com/" target="_blank">
          PipeWebMonetization Dashboard
        </a>{" "}
        is powered by PipeWebMonetization API
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
