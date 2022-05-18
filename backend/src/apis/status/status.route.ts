import {Router} from 'express'
import { getAllStatusesController, getStatusByStatusIdController, postStatusController } from './status.controller'
import { asyncValidatorController } from '../../../utils/controllers/asyncValidator.controller'
import { check, checkSchema } from 'express-validator'
import { statusValidator } from './status.validator'

export const statusRoute = Router()

statusRoute.route('/')
  .get(getAllStatusesController)
  .post(asyncValidatorController(checkSchema(statusValidator)), postStatusController)

statusRoute.route('/:statusId')
  .get(
    asyncValidatorController(
      [check('statusId', 'Please provide a valid uuid').isUUID()]
    ), getStatusByStatusIdController
  )