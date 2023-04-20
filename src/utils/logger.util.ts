const createLogger = (namespace: string) => {
  return (message: string) => {
    console.log(`⚡️[${namespace.toUpperCase()}]: ${message}`);
  };
};

export const dbLogger = createLogger("DATABASE");
export const serverLogger = createLogger("SERVER");
export const errorLogger = createLogger("ERROR");
export const successLogger = createLogger("SUCCESS");
export const warningLogger = createLogger("WARNING");
export const debugLogger = createLogger("DEBUG");
export const infoLogger = createLogger("INFO");
