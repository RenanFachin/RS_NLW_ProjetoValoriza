import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from "./controllers/CreateComplimentController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

export const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()


router.post("/users", createUserController.handle)

// Primeiro faz a autenticação e depois verificar se o usuário é admin
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)

router.post("/compliments", ensureAuthenticated, createComplimentController.handle)