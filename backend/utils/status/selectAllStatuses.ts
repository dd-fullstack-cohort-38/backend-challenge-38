import { Status } from '../interfaces/Status'
import { connect} from '../../src/database'
import { RowDataPacket } from 'mysql2/promise'

export async function selectAllStatuses() : Promise<Status[]> {
  const mysqlConnection = await connect()
  const mysqlQuery = 'SELECT BIN_TO_UUID(statusId) as statusId, statusColor, statusValue FROM status'
  const result = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]
  await mysqlConnection.release()
  return result[0] as Status[]
}