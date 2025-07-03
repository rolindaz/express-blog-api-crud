// import posts list

const posts = require('../data/postsList');



// Create functions for each route

// Create - Store

function store(req, res) {
    console.log('You can add a new post here');
    console.log(req.body);

    // creo un nuovo id incrementando l'id dell'ultimo oggetto dell'array
    const newId = posts[posts.length - 1].id + 1;

    // creo un nuovo oggetto
    const newPost = {
      id: newId,
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      tags: req.body.tags
    };

    // aggiungo il nuovo oggetto all'array di post
    posts.push(newPost);

    // loggo l'array per verifica
    console.log(posts);
    
    // restituisco lo stato corretto (OK) e l'oggetto appena creato
    res.status(201);
    res.json(newPost);
};
  
// Read - Index

function index(req, res) {
      console.log("Here's the posts list");
      // Creo una variabile per la lista di post filtrati, che inizialmente è uguale alla lista originale
      let filteredPosts = posts;
    
      // Se c'è un filtro nella richiesta, filtriamo la lista di post
      if (req.query.tag) {
        filteredPosts = posts.filter(
          post => post.tags.includes(req.query.tag)
        );
        console.log("Here's the filtered posts list");
        
      };
    
      // Restituiamo la lista filtrata
      res.json(filteredPosts);
};
  
// Read - Show

function show(req, res) {
      const id = parseInt(req.params.id);
      console.log(`Here's the post number ${id}`);
      const post = posts.find(post => post.id === id);
      if (!post){
        return res.status(404).json({
          error: "Not Found",
          message: "Post non trovato"
        });
      };
      res.json(post);
};
  
// Update - Update

function update(req, res) {

  // recupero l'id dell'elemento che voglio modificare
  const id = parseInt(req.params.id);
  console.log(`Let's edit the post with id: ${id}`);
  
  // recupero il post tramite l'id
  const post = posts.find(post => post.id === id);

  // imposto una condizione per cui, se il parametro si riferisce ad un post inesistente, viene restituito l'errore 404 e relativo messaggio
  if (!post){
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato"
    });
  };

  // modifico l'oggetto recuperato
  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  // loggo l'array per verifica
  console.log(posts);

  // restituisco il post modificato
  console.log(`Il post con id ${id} è stato modificato`);
  res.json(post);
};
  
// Update - Modify

function modify(req, res) {
      const id = req.params.id;
      console.log(`Let's edit something about the post with id: ${id}`);
      res.send(`Let's edit something about the post with id: ${id}`);
};
  
// Delete - Destroy

function destroy(req, res) {
      const id = parseInt(req.params.id);
      console.log(`Let's delete the post with id: ${id}`);
      const post = posts.find(post => post.id === id);
      if (!post){
        return res.status(404).json({
          error: "Not Found",
          message: "Post non trovato"
        });
      };
      posts.splice(posts.indexOf(post), 1);
      console.log(posts);
      res.sendStatus(204);
};

module.exports = {
    store,
    index,
    show,
    update,
    modify,
    destroy
};