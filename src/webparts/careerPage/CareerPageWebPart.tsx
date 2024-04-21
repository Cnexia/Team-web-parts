import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp/presets/all";

import * as strings from 'CareerPageWebPartStrings';

import './components/CareerPage.module.scss';


import CareerPage from './components/CareerPage';
import Navbar from './components/Header/navbar';
import Footer from './components/Footer/footer';
import PandC from './components/PandC/PandCPage';
import HomePage from './components/HomePage/HomePage';
export default class CareerPageWebPart extends BaseClientSideWebPart<{}> {

  // Define a state to track whether the initial load has occurred
  state = {
    initialLoad: true,
  };


  protected onInit(): Promise<void> {
    return super.onInit().then(_ => {
      // other init code may be present
      sp.setup({
        spfxContext: this.context as any
      });
    });
  }

  public render(): void {
    const { initialLoad } = this.state;

    const element: React.ReactElement<{}> = (
      <Router> {/* Wrap your components with Router */}
        <React.Fragment>
          <Navbar />
          <Switch> {/* Use Switch to render only the first matching route */}
            {/* Define your routes */}
            {/* Render HomePage only on initial load */}
            {initialLoad && <Route path="/CnexiaForEveryone" exact={true} component={HomePage} />}
            <Route path="/CnexiaForEveryone/career" exact={true} component={CareerPage} />
            <Route path="/CnexiaForEveryone/people-culture" exact={true} component={PandC} />
            {/* You can add more routes here */}
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
