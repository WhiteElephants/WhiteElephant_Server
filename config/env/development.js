module.exports = {
    mongo: {
        db: 'mongodb://localhost/wechat-web-shop',
        port: 1128,
        env: 'development'
    },
    mysql: {
        env: "development",
        connection: {
            "database": "wechat",
            "username": "gordon",
            "password": "something"
        },
        port: 1128
    }
};
