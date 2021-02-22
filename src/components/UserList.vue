<template>
  <div>
    <h2>User List</h2>
    <p v-for="user in users" :key="user.id">{{ user.name }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.commit("user/mu_setUsers");
    });
    const users = computed(() => store.state.user.users);
    return {
      users
    };
  }
};
</script>

<style></style>
