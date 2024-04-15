import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import CommentComponent from './components/CommentComponent';



export interface ICommentProps {
  description: string;
  comments: any[]; 
}

export default class CommentWebPart extends BaseClientSideWebPart<ICommentProps> {

  public render(): void {
    const { comments } = this.properties;
    
    if (!comments) {
      return; 
    }
  
    const element = React.createElement(CommentComponent, {
      comments: comments, 
    
    });
  
    ReactDom.render(element, this.domElement);
  }

}
