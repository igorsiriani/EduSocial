import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public hideRuleContent: boolean[] = [];
  public postComment: string[] = [];
  public buttonName: any = 'Expand';

  postList = [];
  post = '';

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  toggle(index) {
    // toggle based on index
    this.hideRuleContent[index] = !this.hideRuleContent[index];
  }

  getPosts() {
    this.http
      .get('https://edu-social.herokuapp.com/api/posts')
      .subscribe((response: any) => {
        this.postList = response.data;
        console.log(response);
      });
  }

  sendPost() {
    if (this.post) {
      this.http
        .post('https://edu-social.herokuapp.com/api/posts', {
          content: this.post,
          user_id: '1',
        })
        .subscribe((response: any) => {
          // this.postList = response.data;
          this.getPosts();
          this.post = '';
          console.log(response);
        });
    }
  }

  postNewComment(index) {
    console.log(this.postComment[index]);

    if (this.postComment[index]) {
      this.http
        .post('https://edu-social.herokuapp.com/api/comments', {
          content: this.postComment[index],
          user_id: 1,
          post_id: index + 1,
        })
        .subscribe((response: any) => {
          // this.postList = response.data;
          this.getPosts();
          this.postComment[index] = '';
          console.log(response);
        });
    }
  }
}
