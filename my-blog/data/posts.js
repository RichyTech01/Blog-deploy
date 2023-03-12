import { comments } from "./comments"
export const posts = [
    {
      "id": 1,
      "datetime": '14:03:2023' ,
      "title": "My First Blog Post",
      "body": "quia et suscipit\nsuscipit am et saepe reiciendis voluptatem adipisci\nsit amet au am et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquitem assumenda provident rerum culpa\nqui recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
       comments: comments.filter((comment) => comment.postId === 1),
    },
    {
      "id": 2,
      "datetime": '14:03:2023' ,
      "title": "My Second Blog Post",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae am et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nqui ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      comments: comments.filter((comment) => comment.postId === 2),
    },
    {
      "id": 3,
      "datetime": '14:03:2023' ,
      "title": "My Third Blog Post",
      "body": "et iusto sed quo iure\nvoluptatem occaecati om am et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquinis eligendi aut ad\nvoluptatem doloribus vel accusantium am et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nqui quis pariatur\nmolestiae porro eiu am et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis odio et labore et velit aut",
      comments: comments.filter((comment) => comment.postId === 3),
    },
    {
      "id": 4,
      "datetime": '14:03:2023' ,
      "title": "My Fourth Blog Post",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis am et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nqui hic commodi nesciunt rem tenetur doloremque am et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquiipsam iure\nquis sunt voluptatem rerum illo velit",
      comments: comments.filter((comment) => comment.postId === 4),
    },
    {
      "datetime": '14:03:2023' ,
      "id": 5,
      "title": "My Fifth Blog Post",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      comments: comments.filter((comment) => comment.postId === 5),
    },
  
]