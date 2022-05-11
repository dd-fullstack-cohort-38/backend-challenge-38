import { Request, Response } from 'express'
import { selectAllStatuses } from '../../../utils/status/selectAllStatuses'

export async function getAllStatusesController(req: Request, res: Response) : Promise<Response> {
  try {
    const data = await selectAllStatuses()
    return res.json({status:200, data, message:null})
  } catch (error) {
    return res.json({status:500, data:null, message: 'server error please try again'})
  }
}