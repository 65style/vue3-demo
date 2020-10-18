<template>
  <div>
    <form action="">
      <input type="text" v-model="state.stu.id">
      <input type="text" v-model="state.stu.name">
      <input type="text" v-model="state.stu.age">
      <button type="button" @click="useAddStudent">添加</button>
    </form>
    <ul>
      <li
        v-for="(stu, index) in state.stus"
        :key="stu.id"
        @click="useRemoveStudent(index)"
      >
        {{ stu.name }} -- {{ stu.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import { state, useRemoveStudent, useAddStudent } from './handleStat'
export default {
  name: 'App',
  setup() {
    return { state, useRemoveStudent, useAddStudent }
  },
}
</script>
