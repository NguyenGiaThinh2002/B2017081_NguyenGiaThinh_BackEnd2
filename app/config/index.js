const config = {
    app: {
        port: process.env.PORT || 3000,
    },

    db:{
        uri: process.env.MONGODB_URI || "mongodb+srv://thinhlatoi4:thinhlatoi2@cluster0.bltd15j.mongodb.net/contactbook"
    }
};
module.exports = config;