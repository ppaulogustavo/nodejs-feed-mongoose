const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

module.exports = (app) => {

    const dao = app.models.feed;

    const FeedBusiness = {

        handler(resolve, reject, err, doc) {
            if (err) {
                reject(err);
                return;
            }

            resolve(doc);
        },

        insert(dto) {
            return new Promise((resolve, reject) => {
                dao.create(dto).then(feed => resolve(feed)).catch(err => console.log(err) || reject(err));
            });
        },

        incrementLikes(dto) {
            return new Promise((resolve, reject) => {
                const condition = { _id: new ObjectID(dto._id) },
                    doc = { $inc: { curtidas: 1 } };
                dao.findOneAndUpdate(condition, doc, (err, doc) => this.handler(resolve, reject, err, doc));
            });
        },

        addComentario(dto) {
            return new Promise((resolve, reject) => {
                const condition = { _id: new ObjectID(dto._id) },
                    docUpdate = { $push: { comentarios: dto.comentario } };
                dao.findOneAndUpdate(condition, docUpdate, (err, doc) => this.handler(resolve, reject, err, doc));
            });
        },

        findByFriends(dto) {
            return new Promise((resolve, reject) => {
                const condition = {usuarios: {$elemMatch: {id: {$in: dto.usuarioIds}}}};

                if (dto._id) {
                    condition['_id'] = {'$gt': dto._id};
                }

                const skip = dto.length || 0;
                dao.find(condition)
                    .sort({'_id': -1})
                    .skip(skip)
                    .limit(30)
                    .exec((err, doc) => this.handler(resolve, reject, err, doc));
            });
        },

        findByUser (dto) {
            return new Promise((resolve, reject) => {

            });
        }

    };

    return FeedBusiness;
};