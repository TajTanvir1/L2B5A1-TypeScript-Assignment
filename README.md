# Blogs

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. Some times we need to choose or need access to get the properties name from a type or interface.

### keyof

Keyof keyword in TypeScript is used to get property keys as union from a type or interface. Keyof mostly used in generic functions.

Here giving an example of using keyof.

type Vehicle = {
bike: string;
car : string;
ship: string
}

- If we need Vehicle type properties as union keys we manually write like this,

type Owner = "bike" | "car" | "ship";

- But with keyof keyword of TypeScript we can easily get these properties as union in a short time.

type Owner2 = keyof Vehicle;

### An example with generic keyof keyword

const getProperty =<X,Y extends keyof X>(obj: X, key: Y)=> {
return obj[key];
}

const user = {
name : "Tanvir Ahamed",
age: 27,
address: "Munshiganj"
}

// user["name"] //result will -> Tanvir Ahamed

const res1 = getProperty(user, 'name')

Here, getProperty Function receive 2 parameters. First one is type or interface name and second parameter receive a key name to get the value of this key. But anyone can make a mistake with this that they don't know or typing mistake of property name. and TypeScript solve this problem with keyof. keyof extends the properties from X and user can ony give the property name which is include in X type.

---

---

## 7. Provide an example of using union and intersection types in TypeScript.

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. In Typescript Union and Intersection types are very important. Union types allow a variable to be one of several possible types, denoted by the "|" symbol and Intersection types combine multiple types into one, denoted by the "&" symbol.

Here giving an example of using Union and Intersection types.

### Union Type

Union type helps us to use a set of possible multiple types. If we are not sure about upcoming data type then we can set multiple choices by Union type. Union type symbol is '|'. An example below,

type UserId = string | number;

userId = 123
or
userId = "id123"

Here, we see a type of user where the user id could be a string or number but we are not sure about the upcoming data type and their Union types help us to choose multiple data types.

### Intersection Type

Intersection type helps us add data types to another type. If we have a data type and we want to add another data type with this we use Intersection type. Intersection type symbol is '&'. An example below,

type User = {
name: string;
age: number;
};

type Admin = {
role: string;
};

type AdminUser = User & Admin;

Here, we see a type of User where name and age type are declared, and after that role of Admin type is declared so now if we need to combine Admin and User along we need to use Intersection type to combine as AdminUser.

So, Union and Intersection types are very important features in typescript. They help in large-scale projects and simple projects. Union and Intersection types enhance our code and make it easy for developers.
