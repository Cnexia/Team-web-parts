import { Web } from "sp-pnp-js";

interface Comment {
  Title: string;
  CommentBody: string;
  CommentAuthor: string;
  CommentDate: Date;
}

export class CommentService {
  
  public async addComment(title: string, body: string, author: string): Promise<void> {
    try {
      const web = new Web("https://cnexia.sharepoint.com/sites/Cnexia4everyone/Lists/IntraComments");
      
      await web.lists.getByTitle("IntraComments").items.add({
        Title: title, 
        CommentBody: body, 
        CommentAuthor: author, 
        CommentDate: new Date() 
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  }

  public async getAllComments(): Promise<Comment[]> {
    try {
      const web = new Web("https://cnexia.sharepoint.com/sites/Cnexia4everyone/Lists/IntraComments");
      
      const items = await web.lists.getByTitle("IntraComments").items.select("Title", "CommentBody", "CommentAuthor", "CommentDate").get();
      
      return items as Comment[];
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
  }
}
