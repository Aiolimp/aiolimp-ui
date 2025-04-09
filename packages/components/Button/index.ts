import Button from './Button.vue';
import { App } from 'vue';

Button.install = (app: App) => {
  app.component('MyButton', Button);
};

export default Button;
