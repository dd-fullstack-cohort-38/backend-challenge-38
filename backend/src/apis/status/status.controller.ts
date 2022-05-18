import { Request, Response } from 'express'
import { selectAllStatuses } from '../../../utils/status/selectAllStatuses'
import { selectStatusByStatusId } from '../../../utils/status/selectStatusByStatusId'
import { Status } from '../../../utils/interfaces/Status'
import { insertStatus } from '../../../utils/status/insertStatus'

export async function getAllStatusesController(req: Request, res: Response) : Promise<Response> {
  try {
    const data = await selectAllStatuses()
    return res.json({status:200, data, message:null})
  } catch (error) {
    return res.json({status:500, data:null, message: 'server error please try again'})
  }
}

export async function getStatusByStatusIdController(request: Request, response: Response) : Promise<Response> {
  try {
    const {statusId} = request.params
    const data = await selectStatusByStatusId(statusId)
    return response.json({status: 200, message: null, data})
  } catch (error) {
    console.error(error)
    return response.json({status:500, data:null, message: 'server error please try again'})

  }
}

// create my controller x
// route the controller x
// test validation x
// write mysql Enabled Function x
// wire mysql Enabled Function
export async function postStatusController(request: Request, response: Response) : Promise<Response> {
  try {
    const {statusColor, statusValue} = request.body
    const status : Status = {statusId:null, statusColor, statusValue}
    const message = await insertStatus(status)
    return response.json({status:200, data: null, message})
  } catch (error) {
      console.error(error)
      return response.json({status:500, data:null, message: 'server error please try again'})

    }
}


