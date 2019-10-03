export class Post {

    id: number;
    title: String;
    content: String;

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getContent() {
        return this.content;
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

}
