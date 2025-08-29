import express from 'express';
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes'
import expenseRoute from './routes/expenseRoutes'


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/v1/auth",authRoute)
app.use("/api/v1/expense",expenseRoute)
hsf k s


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})