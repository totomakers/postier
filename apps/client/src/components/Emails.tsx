import config from "virtual:config";
import emails from "virtual:emails";

console.log(emails);

const isJSXElement = (element: any): element is () => JSX.Element => {
  return (
    element && (typeof element === "function" || typeof element === "string")
  );
};

export const Emails = () => {
  return (
    <div>
      {JSON.stringify(config.emailsKey)}

      <div>
        {Object.keys(emails).map((k) => {
          const components = emails[k];

          return Object.keys(components).map((key) => {
            const C = components[key];

            if (isJSXElement(C)) return <C key={key} />;
          });
        })}
      </div>
    </div>
  );
};
