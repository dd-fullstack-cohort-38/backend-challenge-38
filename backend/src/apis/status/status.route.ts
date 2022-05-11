import {Router} from 'express'
import { getAllStatusesController } from './status.controller'

export const statusRoute = Router()

statusRoute.route('/').get(getAllStatusesController)