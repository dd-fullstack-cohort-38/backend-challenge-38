import {Tag} from "../interfaces/Tag"
import {connect} from "../../src/database"
import { RowDataPacket } from 'mysql2/promise'

export async function selectTagByTagId(tagId: string): Promise<Tag|null> {
  const mysqlConnection =  await connect()
  const mysqlQuery = 'SELECT BIN_TO_UUID(tagId) as tagId, tagName FROM tag WHERE tagId = UUID_TO_BIN(:tagId)'
 const result = await mysqlConnection.execute(mysqlQuery, {tagId}) as RowDataPacket[]
  await mysqlConnection.release()
  const tags: Tag[] = result[0] as Tag[]
  return tags.length === 1 ? {...tags[0]} : null

}