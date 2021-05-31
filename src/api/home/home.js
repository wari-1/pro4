import axios from '@/api/axios'
import { pre } from '@/api/prefix'
export default {
  fetchTopicHome: data => axios.get(pre + 'get/topics' ,data)
}