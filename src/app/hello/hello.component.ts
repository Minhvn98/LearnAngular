import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  person = {
    name: 'Lò Văn Son',
    role: 'CTO',
    university: 'Con Cac',
    fb: 'fb',
    twitter: null,
  };

  posts = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 2,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 2,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body:
        'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    alert('Con cac sieu to');
  }
}
