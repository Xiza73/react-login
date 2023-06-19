import React from "react";

export const createContext = <T>(
  initialContext: T,
  name: string = "Context"
) => {
  const context = React.createContext<T>(initialContext);

  const useContext = () => {
    try {
      const ctx = React.useContext(context);
      if (!ctx)
        throw new Error(
          `use${name} must be inside a ${name}Provider with a value`
        );

      return ctx;
    } catch (error) {
      console.error(error);
      return initialContext;
    }
  };

  return [context, useContext] as const;
};
