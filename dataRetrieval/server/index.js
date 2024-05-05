// Express.js çatısını kullanmak için içe aktarılır.
const express = require("express");
// MongoDB veritabanına erişmek için kullanılan bir kütüphanedir.
const mongoose = require("mongoose");
// CORS politikalarını atlatmak için kullanılır.
const cors = require("cors");
// MongoDB'de kullanılacak kullanıcı verileri için bir model tanımlayan dosyadan içe aktarılır.
const UserModel = require("./models/Users");

// Express uygulaması oluşturulur.
const app = express();

//? Middleware'ler kullanılır.
app.use(cors());
//  express.json: Gelen isteklerdeki JSON verilerini ayrıştırmak için kullanılır.
app.use(express.json());

// Mongoose kullanarak MongoDB veritabanına bağlanılır. Bağlanılacak MongoDB URI'si belirtilir.
// 127.0.0.1= localhost demek ama biz çevrimiçi ortamda kullanıyoruz.
mongoose.connect("mongodb://127.0.0.1:27017/test");

// "/getUsers" rotası tanımlanır. Bu rotaya gelen GET istekleri, UserModel.find() kullanılarak
//  veritabanındaki tüm kullanıcıları çeker, bulunan kullanıcıları JSON formatında yanıt olarak gönderir 
//  veya bir hata oluşursa hata mesajını gönderir.
app.get("/getUsers", (req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Uygulama 3001 portunda çalışmaya başlar.
app.listen(3001, () => {
  console.log("Server is running");
});
