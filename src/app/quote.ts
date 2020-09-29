export class Quote {
id: number;
author: string;
quotename: string;
user: string;
datePosted: Date;
upvote: number;
downvote: number;
constructor(id: number,author:string, quotename:string,user: string,datePosted: Date ){
    this.id = id;
    this.author = author;
    this.quotename = quotename;
    this.datePosted = datePosted;
    this.upvote = 0;
    this.downvote = 0;
    this.user = user;
}
}
