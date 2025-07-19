import express from "express";
import cors from "cors";
import 'dotenv/config'

const app = express();
app.use(cors());
app.use(express.json());

import {userRoutes}  from './Routes/user.js'

app.use('/user',userRoutes)




app.listen(process.env.PORT, () => {
  console.log('SERVER STARTED AT');
  console.log(process.env.PORT);
});


