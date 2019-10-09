import { Comment } from '../app/comment';
export class Post {

    id: number;
    title: String;
    content: String;
    comments: Comment[];

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getContent() {
        return this.content;
    }

    getComments() {
        return this.comments;
    }

    setId(id: number){
         this.id = id;
    }

    setTitle(title: String) {
        this.title = title;
    }

    setContent(content: String) {
        this.content = content;
    }

    setComments(comments: Comment[]) {
        this.comments = comments;
    }

}
