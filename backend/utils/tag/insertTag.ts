import {Tag} from "../interfaces/Tag"
import {connect} from "../../src/database"
export async function insertTag(tag: Tag) : Promise<string> {
  const mysqlConnection = await connect()
  const mysqlQuery = 'INSERT INTO tag(tagId, tagName) VALUES (UUID_TO_BIN(UUID()), :tagName)'
  await mysqlConnection.execute(mysqlQuery, tag)
  await mysqlConnection.release()
  return "tag inserted successfully"

}
