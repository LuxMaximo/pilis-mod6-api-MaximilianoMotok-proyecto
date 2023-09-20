import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from "./routes/usuario.router";
import postreRoutes from "./routes/postre.router"
import bebidaRoutes from "./routes/bebida.router"
import comidaRoutes from "./routes/comida.router"
import menuRoutes from "./routes/menu.router"
import pedidoRoutes from "./routes/pedido.router"
import ticketRoutes from "./routes/ticket.router"

/*
import passportMiddleware from './middlewares/passport';
import passport from 'passport'
import passportLocal from "passport-local";*/


const app = express()


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", postreRoutes)
app.use("/api", bebidaRoutes)
app.use("/api", comidaRoutes)
app.use("/api", menuRoutes)
app.use("/api", pedidoRoutes)
app.use("/api", ticketRoutes)
/*
//Agregar para jwt
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);*/


app.use("/api/users", userRoutes)

export default app;