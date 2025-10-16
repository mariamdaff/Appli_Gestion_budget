
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

//route test
app.get("/", (req, res) => {
 res.send("Bienvenue dans l'API de gestion de budget 🚀");
});

// route pour voir tous les utilisateurs
app.use("/users", userRoutes) ;
app.use("/newUsers", userRoutes);


// // Récupérer un utilisateur précis
// app.get("/users/:id", async (req, res) => {
//   const user = await prisma.user.findUnique({
//     where: { id: parseInt(req.params.id) },
//   });
//   if (!user) {
//     return res.status(404).json({ error: "Utilisateur non trouvé" });
//   }
//   res.json(user);
// });

// // Supprimer un utilisateur
// app.delete("/users/:id", async (req, res) => {
//   try {
//     await prisma.user.delete({
//       where: { id: parseInt(req.params.id) },
//     });
//     res.json({ message: "Utilisateur supprimé" });
//   } catch (err) {
//     res.status(404).json({ error: "Utilisateur non trouvé" });
//   }
// });


// serveur qui écoute sur le port 3000
app.listen(3000, () => {
  console.log("Serveur en ligne sur http://localhost:3000");
});
