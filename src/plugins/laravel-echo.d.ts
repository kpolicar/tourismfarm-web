import Echo from "laravel-echo";

declare global {
  interface Window { Pusher: any; }
}

declare module 'vue/types/vue' {
  interface Vue {
    $echo: Echo
  }
}
