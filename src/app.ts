import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from "./routes/usuario.router";

/*
import passportMiddleware from './middlewares/passport';
import passport from 'passport'
import passportLocal from "passport-local";*/


const app = express()


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
/*
//Agregar para jwt
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);*/


app.use("/api/users", userRoutes)

export default app;