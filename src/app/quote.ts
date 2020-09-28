export class Quote {
// upvote: string;
// downvote: string;
// showDescription: boolean;
//     constructor(id: number, author: string,quotename: string,public user: string,
//                 public datePosted: Date, public likes: number, public dislike: number ){
//                     this.showDescription=false;
//                     this.upvote = upvote;
//                     this.downvote = downvote;
//                 }
       





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
