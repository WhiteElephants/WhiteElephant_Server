# WhiteElephant_Server
This is the nodejs server project for wechat writing app.

 ###data storage methods
 for the repeated data like a post, we take the mongodb way to store them, but for the user account data, as they are highly related to each others,
 so we use the sql to store, and considering the efficiency, we use some memory cache lib to better the performance, in our project, we use the redis,
 basically, those are all the main methods.

