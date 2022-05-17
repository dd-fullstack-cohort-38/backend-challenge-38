import {Router} from 'express'
import { getTagByTagIdController, postTagController } from './tag.controller'
import { asyncValidatorController } from '../../../utils/controllers/asyncValidator.controller'

import { tagValidator } from './tag.validator'
import { check, checkSchema } from 'express-validator'

export const tagRoute = Router()

tagRoute.route("/").post(
  asyncValidatorController(checkSchema(tagValidator)),
  postTagController
)

tagRoute.route("/:tagId").get(
  asyncValidatorController([check("tagId","please provide a valid uuid").isUUID()]),
  getTagByTagIdController
)