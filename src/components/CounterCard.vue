<template>
  <div class="card">
    <h2>Counter Store Example</h2>
    <p>The count is: <strong>{{ counter.count }}</strong></p>
    <div class="actions">
      <button type="button" @click="counter.increment">Increment</button>
      <button type="button" class="ghost" @click="loadMessage">Load message</button>
    </div>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import { fetchGreeting } from '../services/api'

const counter = useCounterStore()
const message = ref('')

const loadMessage = async () => {
  message.value = await fetchGreeting()
}
</script>

<style scoped>
.card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 420px;
  background: white;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
}

.actions {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

button {
  appearance: none;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  background: #2563eb;
  color: white;
}

button.ghost {
  background: #e2e8f0;
  color: #0f172a;
}

.message {
  color: #0f766e;
}
</style>
