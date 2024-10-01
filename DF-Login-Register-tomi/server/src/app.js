import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./db/database.js";
import { authRouter } from "./routes/authRoutes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use("/user", authRouter)
connectDB()

//configuracion
app.set('port', process.env.PORT || 4000);

//servidor 
app.listen(app.get('port'), () => {
    console.log(`Server corriendo en el puerto ${app.get('port')}`);
})