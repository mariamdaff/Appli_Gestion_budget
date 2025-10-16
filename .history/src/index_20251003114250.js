
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();

app.use(express.json());

//route test
app.get("/", (req, res) => {
 res.send("Bienvenue dans l'API de gestion de budget 🚀");
});

// route pour voir tous les utilisateurs
app.use("/users", userRoutes) ;
app.use("/transactions", transactionRoutes) ;

// serveur qui écoute sur le port 3000
app.listen(3000, () => {
  console.log("Serveur en ligne sur http://localhost:3000");
});
