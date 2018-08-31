module.exports = (app) => {

    const business = app.business.feed;

    const FeedController = {
        
        index : function(req, resp) {
            resp.send('Hello feed');
        },

        insert : function(req, resp) {
            business.insert(req.body).then((feed) => resp.send(200, feed._id), (err) => resp.send(500, err));
        },

        incrementLikes (req, resp) {
            business.incrementLikes(req.body).then((feed) => resp.send(200, feed), (err) => resp.send(500, err));
        },

        addComentario (req, resp) {
            business.addComentario(req.body).then((feed) => resp.send(200, feed), (err) => resp.send(500, err));
        },

        findByFriends (req, resp) {
            business.findByFriends(req.body).then((feed) => resp.send(200, feed), (err) => resp.send(500, err));
        }
    };
    
    return FeedController;
};