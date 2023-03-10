import { ChatGPTAPI } from 'chatgpt'

async function example() {
  const api = new ChatGPTAPI({
    apiKey: 'sk-...'
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
}

example();
