const mongoose = require('mongoose');
const autoInc = require('mongoose-plugin-autoinc');

const TaskSchema = mongoose.Schema({
  text: { type: String, required: true },
  description: String,
  isDone: { type: Boolean, required: true },
});

TaskSchema.plugin(autoInc.autoIncrement, {
  model: 'Task',
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

mongoose.model('Task', TaskSchema);
