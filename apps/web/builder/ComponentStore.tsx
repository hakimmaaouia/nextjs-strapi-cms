import { ReactNode } from "react";

class ComponentsStore {
  private components: Record<string, any> = {};

  addComponent(name: string, component: ReactNode) {
    this.components[name] = component;
  }

  getComponent(name: string): ReactNode {
    return this.components[name];
  }

  render({ content }: any) {
    return content.map(({ __typename }, index) => {
      let Component = this.getComponent(__typename);
      if (!Component) {
        console.error(`Component '${__typename}' not found.`);
        return null;
      }
      return <Component text="tet" key={index} />;
    });
  }
}

export default ComponentsStore;
