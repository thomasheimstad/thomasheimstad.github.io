import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import '../css/styles.scss';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="shortcut icon" type="image/ico" href={config.siteLogo} />
          <html lang="en" />
        </Helmet>
        {children}
        <Footer />
      </div>
    );
  }
}
