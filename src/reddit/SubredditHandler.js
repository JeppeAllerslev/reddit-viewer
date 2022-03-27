import Snoowrap from "snoowrap";
import urlFilter from "./urlFilter";
const credentials = require("./credentials.json");

const r = new Snoowrap(credentials);

export default class SubredditHandler {
   constructor(subreddit) {
      this.index = -1;
      this.posts = [{ url: "" }];
      this.url = "";
      this.subreddit = "";
   }

   handleListing(listing) {
      this.listing = listing;
      this.posts = listing.filter((post) => urlFilter(post.url));
      if (this.index < 0) {
         this.index = 0;
         this.url = this.posts[this.index].url;
      }
   }

   setSubreddit(subreddit) {
      console.log("Subreddit: ", subreddit);
      this.index = -1;
      if (subreddit != null && subreddit !== this.subreddit) {
         this.subreddit = subreddit;
         r.getSubreddit(this.subreddit)
            .getHot()
            .then((listing) => this.handleListing(listing));
      }
   }

   getMore() {
      this.listing
         .fetchMore({ append: true, amount: 25 })
         .then((listing) => this.handleListing(listing));
   }

   prevUrl() {
      this.index = Math.max(this.index - 1, 0);
      this.url = this.posts[this.index].url;
   }

   nextUrl() {
      if (this.index === this.posts.length - 6) {
         this.getMore();
      }
      this.index = Math.min(this.index + 1, this.posts.length - 1);
      this.url = this.posts[this.index].url;
      console.log("Index: ", this.index, " Length: ", this.posts.length);
   }
}
