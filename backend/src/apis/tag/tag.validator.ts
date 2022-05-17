import {Schema} from 'express-validator'

export const tagValidator: Schema = {
  tagName: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'tag name must be between 1 and 32 characters',
      options: {min:1, max:32}
    }
  }
}