import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  postList = [
    {
      user: {
        first_name: 'Jon',
        last_name: 'Doe'
      },
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet',
      comments: [
        {
          user: {
            first_name: 'Jon',
            last_name: 'Doe'
          },
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper'
        },
        {
          user: {
            first_name: 'Jon',
            last_name: 'Doe'
          },
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    },
    {
      user: {
        first_name: 'Amanda',
        last_name: 'Silva'
      },
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet',
      comments: [
        {
          user: {
            first_name: 'Jon',
            last_name: 'Doe'
          },
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper'
        },
        {
          user: {
            first_name: 'Zé',
            last_name: 'Carlos'
          },
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    },
  ]

  constructor() {}

}
