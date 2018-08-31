module.exports = (app) => {
    const {feed} = app.controllers;

    app.get('/', feed.index);
    app.post('/', feed.insert);
    app.post('/inc-like', feed.incrementLikes);
    app.post('/comentario', feed.addComentario);

    app.post('/feed-friends', feed.findByFriends);
};