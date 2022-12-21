import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import basicSsl from '@vitejs/plugin-basic-ssl'
import * as fs from 'fs'
import * as path from 'path'

let pk = fs.readFileSync(path.join(__dirname, './https/privkey.pem'));
let cert = fs.readFileSync(path.join(__dirname, './https/cert.pem'));

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
  plugins: [
    svelte(),
    //basicSsl(),
  ],
  server: {port: 4002,
          https:{key: pk, cert: cert,}}
})
}
