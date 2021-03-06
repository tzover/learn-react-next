import axios from 'axios'
import { TaskIF } from '../models/tasks'

export async function getAllTasksData() {
  const response = await axios.get<TaskIF[]>(
    `${process.env.NEXT_PUBLIC_URL}/tasks`,
  )
  const tasks = response.data
  return tasks
}

export async function getTaskData(taskNum: string) {
  const response = await axios.get<TaskIF>(
    `${process.env.NEXT_PUBLIC_URL}/tasks/${taskNum}`,
  )
  const task = response.data
  return task
}
