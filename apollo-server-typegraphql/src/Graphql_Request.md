# Get Categories

```
query {
  categories {
    _id
    name,
    description,
  }
}
```

# Create Category

```
mutation {
  createCategory(categoryInput: {
    name: "nome",
    description: "descricao"
  }){
    _id
  }
}
```

# Get Videos

```
query {
  videos {
    _id,
    name,
    description,
    category
  }
}
```

# Create Video

```
mutation {
  createVideos(videoInput: {
    name: "video",
    description: "descricao",
    category: "5fda79fa6a1e65242c7b165a"
  }){
    _id
  }
}
```
