import { reactive } from 'vue'

let state = reactive({
  stus: [
    { id: 1, name: 'zs', age: 10 },
    { id: 2, name: 'ls', age: 20 },
    { id: 3, name: 'ww', age: 30 },
  ],
  stu: {
    id: '',
    name: '',
    age: ''
  }
})

function useRemoveStudent(index) {
    state.stus = state.stus.filter((stu, idx) => idx !== index)
}

function useAddStudent() {
  
  let stu = Object.assign({}, state.stu)
  state.stus.push(stu)
  Object.keys(state.stu).forEach((v, i) => {
    state.stu[v] = ''
  });
}

export {
  state,
  useRemoveStudent,
  useAddStudent
}