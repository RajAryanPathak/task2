import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent  {
  card = "card";
  posts = [
      {
        img:
          "https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        caption: "jump in water like a fish",
        like: false
      },
      {
        img:
          "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        caption: "Stayin' still, eyes closedLet the world just pass me by",
        like: false
      },
      {
        img:
          "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        caption: "I feel fear for the very last time",
        like: false
      }
    ];

}
