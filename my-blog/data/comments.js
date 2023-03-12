export const comments = [
    {
      postId: 1,
      id: 1,
      text: "this is the first comment ",
      replies: [
        {
          id: 2,
          parentId: 1,
          text: "This is a reply to the first comment",
        },
      ],
    },
    {
      id: 3,
      postId: 1,
      text: "This is the second comment",
      replies: [],
    },
    {
      postId: 2,
      id: 3,
      name: "id labore ex et quam labww",
      text: "first comment on second post",
      replies: [],
    },
    {
      postId: 3,
      id: 4,
      name: "id labore ex et quam laborum",
      text: "first comment on third post",
      replies: [],
    },
    {
      postId: 4,
      id: 5,
      name: "id labore ex et quam laborum",
      text: "first comment on fourth post",
      replies: [],
    },
    {
      postId: 5,
      id: 6,
      name: "id labore ex et quam laborum",
      text: "first comment on fifth post",
      replies: [],
    },
] 