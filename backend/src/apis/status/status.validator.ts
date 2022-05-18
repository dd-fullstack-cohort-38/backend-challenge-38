import {Schema} from 'express-validator'


export const statusValidator: Schema = {
  statusColor: {
    isHexColor: {
      errorMessage: 'status color must be a hexadecimal color value'
    }
  },
  statusValue: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'status value must be between 1 and 32 characters',
      options: {min:1, max:32}
    }
  }
}