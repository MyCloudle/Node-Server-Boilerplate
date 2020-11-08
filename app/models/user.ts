import mongoose from 'mongoose'
import { stringify } from 'querystring'

const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  screenName: String,
  twitterId: String,
  profileImageUrl: String
})

export = mongoose.model('user', userSchema)
