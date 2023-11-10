import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

export default defineConfig({
 resolve:{
  alias:[
    {find:'@', replacement: resolve(__dirname,'src')},
    {find:'~', replacement: resolve(__dirname,'nikeShoes')}
  ]
  },	
  plugins: [react()],
})
