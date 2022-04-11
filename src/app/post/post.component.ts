import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() img = "";
    @Input() caption = "";
    @Input() like = false;

    like_img = "https://www.pngkey.com/png/full/361-3611382_leave-a-reply-cancel-reply-instagram-like-icon.png";
    un_like_img = "https://www.clipartmax.com/png/full/358-3583360_e-3-hearts-hearts-like-icon-instagram-heart-icon-svg.png";
  constructor() { }

  ngOnInit() {
  }

}
