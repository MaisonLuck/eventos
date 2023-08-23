import { Router } from "express";
import { prisma } from "../prisma/prisma.js";

const router = Router();

router.get("/", async (req, res) => {
  const eventos = await prisma.eventos.findMany({});
  res.status(200).send(eventos);
});

router.post("/criar", async (req, res) => {
  const body = req.body;

  await prisma.eventos.create({
    data: {
      nome: body.nome,
      descricao: body.descricao,
      data: body.data,
      tipo: body.tipo,
      modelo: body.modelo,
      local: body.local,
    },
  });

  res.status(201).json({ message: "evento criado" });
});

router.patch("/update/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  await prisma.eventos.update({
    data: body,
    where: {
      id: id,
    },
  });

  res.status(201).json({ result: "Objeto atualizado" });
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await prisma.eventos.delete({
    where: {
      id: id,
    },
  });

  res.status(204).send("");
});

export default router;
