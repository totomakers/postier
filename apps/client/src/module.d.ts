declare module "virtual:config" {
  const component: {
    emailsKey: string[];
  };
  export default component;
}

declare module "virtual:emails" {
  export const emails: { [key: string]: { [key: string]: unknown } };
  export default emails;
}
