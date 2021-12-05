import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/Storage/storage.service';

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
  userId = null;
  file: File;
  fileComponent;

  constructor(private http: HttpClient, private storage: StorageService) {
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
      let formData = new FormData();

      formData.append('file', this.file, this.file.name);
      formData.append('content', this.post);
      formData.append('user_id', this.userId);

      this.http
        .post('https://edu-social.herokuapp.com/api/posts', formData)
        .subscribe((response: any) => {
          // this.postList = response.data;
          this.getPosts();
          this.post = '';
          this.fileComponent = '';
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
          user_id: this.userId,
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

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];

    console.log(this.file);
  }

  ionViewDidEnter() {
    this.storage.get('userId').then(
      result => {
        console.log(result)
        this.userId = result;
      }, err => {}
    ).catch(err => {});
  }
}
