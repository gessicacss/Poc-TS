# BookList

## About

BookList is a API that rovides endpoints to create, view, update, and delete books.

## Technologies

<p align='center'>
<img style='margin: 2px;' src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'>
<img style='margin: 2px; width:70px' src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white/'>
</p>

## Routes

#### <span style='font-weight:bold;'>POST</span> /new-book

A route that creates a a new book based on the provided data. If there's a book with this title already registered, it returns a 422 status code error. If its sucessfull it returns a 201 status code. The request body should contain:

```
{
    {
    "title": "The Lord of the Rings",
    "image": "https://example.com/book.jpg",
    "description": "A great journey in a fantastic world.",
    "genre": "Fantasy"
    }
}
```

#### <span style='font-weight:bold;'>GET</span> /

A route that will return a list of all books stored in the system, if there's no book on database yet, it'll return a empty list.

```
The answer will be:
{
    {
    "id": 1
    "title": "The Lord of the Rings",
    "image": "https://example.com/book.jpg",
    "description": "A great journey in a fantastic world.",
    "genre": "Fantasy",
    "status": null,
    "review": null
    }
}
```

#### <span style='font-weight:bold;'>GET</span> /books

Returns a book list filtered by genre, if there's no book on database yet, it'll return a empty list.

```
The genre should come as a query, like "/books?genre=fantasy"
[
    {
    "id": 1
    "title": "The Lord of the Rings",
    "image": "https://example.com/book.jpg",
    "description": "A great journey in a fantastic world.",
    "genre": "Fantasy",
    "status": null,
    "review": null
    }
        {
    "id": 2
    "title": "Harry Potter and The Philosopher's Stone",
    "image": "https://example.com/book.jpg",
    "description": "A book about a boy with a lightning scar",
    "genre": "Fantasy",
    "status": "completed",
    "review": "what a great book"
    }
]
```

#### <span style='font-weight:bold;'>PUT</span> /book/:id

A route that Updates the information of an existing book based on the provided ID. If there's no book with this id, it'll give a 404 status code error. It needs to update either the status or the review of the book. The body should contain:

```
{
    {
    "status": "ongoing",
    "review": null
    }
}
```

#### <span style='font-weight:bold;'>DELETE</span> /book/:id

A route that deletes an existing book based on the provided ID. It'll give you a 200 status code in case of sucess. In case that there's no book with this id, it'll give a 404 status code error.

## How to run

To run this project, you'll have to install MongoDB to acess the database.

1. Clone this repository
2. Install the dependencies

```
npm i
```


4. Run the back-end with

```
npm start
```

4. Access http://localhost:5000 on your browser to run the API.
