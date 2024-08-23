import { FC } from "react";
import { TypedDocumentNode } from "@graphql-typed-document-node/core"; // Import the required type
import { FragmentDefinitionNode } from "graphql";

interface IRegisteredComponent<P, G> {
  component: FC<P>;
  adaptor: (data: G) => P;
  graphql: TypedDocumentNode;
}

class ComponentsStore {
  private components: Record<string, IRegisteredComponent<any, any>> = {};

  addComponent<P, G>(component: IRegisteredComponent<P, G>) {
    const name = (component.graphql.definitions[0] as FragmentDefinitionNode)
      .name.value;
    this.components[name] = component;
  }

  getComponent(name: string): FC | undefined {
    const registeredComponent = this.components[name];
    if (registeredComponent) {
      return registeredComponent.component;
    }
    return undefined;
  }

  getFragmentNames(): string[] {
    return Object.keys(this.components);
  }
  getFragments(): TypedDocumentNode[] {
    return Object.values(this.components).map((component) => component.graphql);
  }

  render({
    content,
  }: {
    content: { __typename: string; [key: string]: any }[];
  }) {
    return content.map(({ __typename, ...props }, index) => {
      const Component = this.getComponent(__typename);
      if (!Component) {
        console.error(`Component '${__typename}' not found.`);
        return null;
      }
      return (
        <Component
          {...this.components[__typename].adaptor({ ...props, __typename })}
          key={index}
        />
      );
    });
  }
}

export default ComponentsStore;
