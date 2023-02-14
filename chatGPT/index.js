import { ChatGPTAPI } from 'chatgpt';

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY
})

const res = await api.sendMessage('Стартуем!');
console.log(res.text)