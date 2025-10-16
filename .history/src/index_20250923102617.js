// src/index.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); // pour lire le JSON dans les requêtes

// route test
app.get("/", (req, res) => {
  res.send("Bienvenue dans l'API de gestion de budget 🚀");
});

// route pour voir tous les utilisateurs
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// serveur qui écoute sur le port 3000
app.listen(3000, () => {
  console.log("Serveur en ligne sur http://localhost:3000");
});
