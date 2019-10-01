import mongoose from "mongoose";

export async function startConnection(){
  await mongoose.connect('mongodb://localhost/prueba',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  });
  console.log('database is connected');
}

