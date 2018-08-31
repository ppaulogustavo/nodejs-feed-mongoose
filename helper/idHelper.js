module.exports = function(feed) {
    return `${feed.usuario.id}+${feed.data}`; 
};