import Snoowrap from "snoowrap";
import urlFilter from "./urlFilter";
const credentials = require("./credentials.json");

const r = new Snoowrap(credentials);

export default class SubredditHandler {
   constructor() {
      this.index = -1;
      this.posts = [{ url: "", title: "" }];
      this.post = this.posts[0];
      this.subreddit = {display_name: ""};
      this.getOptions = {type:"hot", time:"all"};
   }

   handleListing(listing) {
      this.listing = listing;
      this.posts = listing.filter((post) => urlFilter(post.url));
      if (this.index < 0) {
         this.index = 0;
         this.post = this.posts[this.index];
      }
   }

   setSubreddit(subreddit) {
      this.index = -1;
      if (subreddit != null && this.subreddit.display_name !== subreddit) {
         this.subreddit = r.getSubreddit(subreddit);
         this.get();
      }
   }

   setGetOptions(getOptions) {
      this.getOptions = getOptions;
      this.get();
   }

   get() {
      switch(this.getOptions.type) {
         case "hot":
            this.subreddit.getHot().then((listing) => this.handleListing(listing));
            break;
         case "new":
            this.subreddit.getNew().then((listing) => this.handleListing(listing));
            break;
         case "top":
            this.subreddit.getTop({time: this.getOptions.time}).then((listing) => this.handleListing(listing));
            break;
         default:
            this.subreddit.getHot().then((listing) => this.handleListing(listing));
      }
   }

   getMore() {
      this.listing
         .fetchMore({ append: true, amount: 25 })
         .then((listing) => this.handleListing(listing));
   }

   prevUrl() {
      this.index = Math.max(this.index - 1, 0);
      this.post = this.posts[this.index];
   }

   nextUrl() {
      if (this.index === this.posts.length - 6) {
         this.getMore();
      }
      this.index = Math.min(this.index + 1, this.posts.length - 1);
      this.post = this.posts[this.index];
      console.log("Index: " + this.index + " of " + this.posts.length);
   }
}
