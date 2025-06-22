const MainAray = JSON.parse(localStorage.getItem("ToDo")) || [];
let EditIndex = null;

// Click Enter List Item
const AddToDo = () => {
  let ItemInput = document.getElementById("ToDo");
  let Item = ItemInput.value;

  if (Item == "") {
    alert("Input The ToDo's First");
  } else {
    if (EditIndex != null) {
      MainAray[EditIndex].item = Item;
      localStorage.setItem("ToDo", JSON.stringify(MainAray));
      RenderTable();
      alert("SuccessFully Changed");
      EditIndex = null;
    } else {
      let Obj = { item: Item };
      MainAray.push(Obj);
      localStorage.setItem("ToDo", JSON.stringify(MainAray));
      RenderTable();
      alert("SuccessFully Stored Your ToDo");
    }
  }
  RenderTable();
  ItemInput.value = "";
};

// render The Table
const RenderTable = () => {
  document.getElementById("TableBody").innerHTML = MainAray.map(
    (item, index) => {
      return `
        <tr>
            <td>${index + 1}</td>
            <td>${item.item}</td>
            <td><button class="Delete" onclick="Delete(${index})" >Delete</button></td>
            <td><button class="Edit" onclick="Edit(${index})" >Edit</button></td>
        </tr>
    `;
    }
  ).join("");
};
RenderTable();

// Delete Fnnctions
const Delete = (index) => {
  MainAray.splice(index, 1);
  localStorage.setItem("ToDo", JSON.stringify(MainAray));
  RenderTable();
};

// Edit Function
const Edit = (index) => {
  EditIndex = index;
  document.getElementById("ToDo").value = MainAray[index].item;
};
