import {Status} from '../interfaces/Status'
import {connect} from "../../src/database"

export async function insertStatus(status: Status): Promise<string> {
  const mysqlConnection = await connect()
  const mysqlQuery = 'INSERT INTO status(statusId, statusColor, statusValue) VALUES (UUID_TO_BIN(UUID()), :statusColor, :statusValue)'
  await mysqlConnection.execute(mysqlQuery, status)
  await mysqlConnection.release()
  return "status created successfully"
}
