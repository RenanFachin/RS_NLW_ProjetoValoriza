import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from "./controllers/CreateComplimentController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";

export const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listTagsController = new ListTagsController()


// Cria usuário
router.post("/users", createUserController.handle)

// Autenticação
router.post("/login", authenticateUserController.handle)

// Primeiro faz a autenticação e depois verificar se o usuário é admin
// Cria tag
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)

// Ewnvia compliments
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)

// Recupera compliments enviados e recebidos
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)

// Listando todas as tags
router.get("/tags", ensureAuthenticated, listTagsController.handle)