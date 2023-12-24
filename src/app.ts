import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  let values: [string, string, number] = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  doc =
    type.value === "invoice" ? new Invoice(...values) : new Payment(...values);

  list.render(doc, type.value, "end");
});

//tuples
let person: [string, string, number, boolean] = ["peter", "martin", 11, true];

//enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

//generics
const addUID = <T extends object>(obj: T): object => {
  const uid = Math.floor(Math.random() * 1000);
  return { ...obj, uid };
};

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const doc1: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.AUTHOR,
  data: { name: "peter" },
};
