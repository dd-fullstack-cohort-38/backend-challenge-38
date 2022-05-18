import { Status } from '../interfaces/Status'
import {connect} from '../../src/database'
import { RowDataPacket } from 'mysql2/promise'

export async function selectStatusByStatusId(statusId: string): Promise<Status| null>{
  const mysqlConnection = await connect()
  const mysqlQuery = 'SELECT BIN_TO_UUID(statusId) as statusId, statusColor, statusValue from status WHERE statusId = UUID_TO_BIN(:statusId)'
  const result = await mysqlConnection.execute(mysqlQuery, {statusId:statusId}) as RowDataPacket[]
 await mysqlConnection.release()
  const statuses = result[0] as Status[]
  return statuses.length === 1 ? {...statuses[0]} : null


}