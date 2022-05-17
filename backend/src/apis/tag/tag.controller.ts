import {Request, Response} from 'express'
import { Tag } from '../../../utils/interfaces/Tag'
import { insertTag } from '../../../utils/tag/insertTag'
import { selectTagByTagId } from '../../../utils/tag/selectTagByTagId'

export async function postTagController(request: Request, response: Response) : Promise<Response> {
  try {
   // const tagName = request.body.tagName
    const {tagName} = request.body
    const tag : Tag = {tagId:null, tagName}
    const message = await insertTag(tag)
    return response.json({status:200, data: null, message})

  }catch (e) {
    console.error(e)
    return response.json({status:500, data: null, message: 'internal server error please try again.'})
  }
}

export async function getTagByTagIdController(request: Request, response: Response) : Promise<Response> {
  try {
    const {tagId} = request.params
    const data = await selectTagByTagId(tagId)
    return response.json({status: 200, data, message: null})
  } catch (error) {
    console.error(error)
    return response.json({status:500, data: null, message: 'internal server error please try again.'})
  }
}
