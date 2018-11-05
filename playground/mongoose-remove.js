const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5be077e285fa57a4dd6cd825'}).then((todo) => {

});

Todo.findByIdAndRemove('5be077e285fa57a4dd6cd825').then((todo) => {
  console.log(todo);
});
