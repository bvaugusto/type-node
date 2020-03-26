import mongoose, { Schema, Document, mongo } from "mongoose";

export interface ITask extends Document {
  title: string;
}

const TaskSchema: Schema = new Schema({
  title: String,
});

export default mongoose.model<ITask>("Task", TaskSchema);
