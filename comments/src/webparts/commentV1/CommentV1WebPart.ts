import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp/presets/all";
import * as strings from 'CommentV1WebPartStrings';



import CommentV1 from './components/CommentV1';






export default class CareerPageWebPart extends BaseClientSideWebPart<{}> {

  protected onInit(): Promise<void> {

    return super.onInit().then(_ => {
  
      
  
      sp.setup({
        spfxContext: this.context as any
      });
    });
  }
  
  public render(): void {
    const element: React.ReactElement<{}> = React.createElement(
      React.Fragment,
      {},
       // Include here any other componnet
      React.createElement(CommentV1),
     
      
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
