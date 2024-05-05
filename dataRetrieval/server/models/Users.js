const mongoose = require("mongoose");

// UserSchema adında bir Mongoose şeması tanımlanır. Bu şema, MongoDB'deki "users" 
// koleksiyonu için alanların ve veri tiplerinin belirlenmesini sağlar.
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// UserModel adında bir Mongoose modeli tanımlanır. Bu model, UserSchema 
// şemasına dayanarak MongoDB'deki "users" koleksiyonunu temsil eder.
const UserModel = mongoose.model("users", UserSchema);
// UserModel dışa aktarılır.
module.exports = UserModel;