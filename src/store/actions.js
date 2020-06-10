export const changeName = (name) => ({
  type: 'CHANGE_NAME',
  name,
})

export const changeJob = (job) => ({
  type: 'CHANGE_JOB',
  job,
})

export const changeAge = (age) => ({
  type: 'CHANGE_AGE',
  age,
})

export const toggleHiddenContent = () => ({
  type: 'TOGGLE_HIDDEN_CONTENT',
})
