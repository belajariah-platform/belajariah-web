import { combineReducers } from 'redux'

import UserReducer from './user'
import StoryReducer from './story'
import MentorReducer from './mentor'
import { QuranReducer, QuranDetailReducer } from './alquran'
import { UserClassReducer, UserClassDetailReducer } from './user-class'
import {
  TransactionReducer,
  TransactionAllReducer,
  TransactionClassReducer,
  TransactionAcceptReducer,
  TransactionDeclineReducer,
} from './transaction'
import {
  ConsultationReducer,
  ConsultationAllReducer,
  ConsultationAcceptReducer,
  ConsultationDeclineReducer,
} from './consultation'

export default combineReducers({
  UserReducer,
  QuranReducer,
  StoryReducer,
  MentorReducer,
  UserClassReducer,
  QuranDetailReducer,
  TransactionReducer,
  ConsultationReducer,
  TransactionAllReducer,
  ConsultationAllReducer,
  UserClassDetailReducer,
  TransactionClassReducer,
  TransactionAcceptReducer,
  TransactionDeclineReducer,
  ConsultationAcceptReducer,
  ConsultationDeclineReducer,
})
