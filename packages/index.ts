import Button from './components/Button';

const components = [Button];

const install = (app: any): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default { install };

export { Button };
