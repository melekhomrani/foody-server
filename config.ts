import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT ,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/foody',
  JWT_SECRET: process.env.JWT_KEY || "3IaPNr37GjXWxhEbe+ZbOkxL66cRbaZOo40sfT0cd1BCgRQbvP9C1AOoQC0/2HSMnPsFQbytQESYRjg84HhPypOkGLnt43PNNGRpBAvPLjauRkH20mtum9QrzU+UEOgM3HzYyaqZuseou8ItEmdZGlp3+GOhYl1tHuWSucLCgUJk5eDMlFJ+xJyyjN1cb8e81+IGA/3cbcVgzcRxms7kMcsyg93QP9vS+GJiVTMEAKrkaXIV+KJ8RA0eG0Cv1djOw2cGvND2i+j+OypW/EhtzlQnWSVHRXJyU47O+T3RB1BzDxmurvlB7bpt7fN796hxJejuvs6nL7zGaaUmMrHLZQ==",
};