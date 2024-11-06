<template>
  <Layout>
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="p-6 w-full max-w-md bg-gray-800 rounded-3xl shadow-2xl flex flex-col justify-center items-center mx-auto">
        <h2 class="text-4xl font-extrabold mb-6 text-center text-gray-100">Calculadora</h2>
        <div class="relative w-full">
          <input
            type="text"
            v-model="display"
            readonly
            class="w-full p-8 mb-4 text-right text-5xl font-mono border-0 rounded-lg bg-gray-900 text-gray-100 shadow-inner focus:outline-none"
          />
          <hr>
          <div class="grid grid-cols-4 gap-4">
            <button class="span-2" @click="handleClick('C')">C</button>
            <button @click="handleClick('(')">(</button>
            <button @click="handleClick(')')">)</button>
            <button class="operator" @click="handleClick('mod')">mod</button>

            <button @click="handleClick('7')">7</button>
            <button @click="handleClick('8')">8</button>
            <button @click="handleClick('9')">9</button>
            <button class="operator" @click="handleClick('/')">/</button>

            <button @click="handleClick('4')">4</button>
            <button @click="handleClick('5')">5</button>
            <button @click="handleClick('6')">6</button>
            <button class="operator" @click="handleClick('*')">*</button>

            <button @click="handleClick('1')">1</button>
            <button @click="handleClick('2')">2</button>
            <button @click="handleClick('3')">3</button>
            <button class="operator" @click="handleClick('-')">-</button>

            <button class="span-2" @click="handleClick('0')">0</button>
            <button @click="handleClick('.')">.</button>
            <button class="equals span-2" @click="handleClick('=')">=</button>
            <button class="operator" @click="handleClick('+')">+</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import Layout from './Layout.vue';

const display = ref('');
const handleClick = (value) => {
  if (value === '=') {
    try {
      display.value = eval(display.value.replace(/mod/g, '%')).toString();
    } catch (e) {
      display.value = 'Error';
    }
  } else if (value === 'C') {
    display.value = '';
  } else {
    display.value += value;
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
}

button:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
}

input:focus {
  outline: none;
  border-color: rgba(66, 153, 225, 0.6);
}

input {
  transition: background-color 0.3s, transform 0.2s;
}

input:hover {
  background-color: rgba(75, 85, 99, 0.7);
}

button {
  transition: transform 0.2s;
}

button:active {
  transform: scale(0.95);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 20px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #555;
}

button:active {
  transform: scale(0.95);
}

button.span-2 {
  grid-column: span 2;
}

button.operator {
  background-color: #f39c12;
}

button.operator:hover {
  background-color: #e67e22;
}

button.equals {
  background-color: #27ae60;
}

button.equals:hover {
  background-color: #2ecc71;
}
</style>
