let todoList = [
    {
      id: 1,
      task: "Hit the gym",
      completed: false,
    },
    {
      id: 2,
      task: "Pay bills",
      completed: true,
    },
    {
      id: 3,
      task: "Meet george",
      completed: false,
    },
    {
      id: 4,
      task: "Buy eggs",
      completed: false,
    },
    {
      id: 5,
      task: "Read a book",
      completed: false,
    },
    {
      id: 6,
      task: "Organize office",
      completed: false,
    },
  ];
  // ham su dung de in va xoa khoi man hinh
  function showlist() {
    let ul = document.getElementById("myUL");
    ul.innerHTML = ""; // lam lai the ul
  
    todoList.forEach((element, index) => {
      // them the li vao ul
      let li = document.createElement("li");
      li.textContent = element.task;
      ul.appendChild(li);
  
      //them the span vao the li
      let close = document.createElement("span");
      close.classList.add("close");
      close.textContent = "X";
  
      // kiem tra true false
      if (element.completed === true) {
        li.classList.add("checked");
      }
  
      //them close vao li
      li.appendChild(close);
  
      // khi bam vao li thi se thay doi trang thai
      li.addEventListener("click", function () {
        li.classList.toggle("checked");
        if (todoList[index].completed === true) {
          todoList[index].completed = false;
        } else {
          todoList[index].completed = true;
        }
        console.log(todoList);
      });
  
      // khi bam vao close
      close.addEventListener("click", function () {
        todoList = todoList.filter((member) => {
          return member.id != element.id;
        }); // xoa phan tu trong mang
        showlist();
      });
    });
  }
  showlist();
  
  function addNewTask() {
    let input = document.getElementById("myInput");
    let add = document.getElementsByClassName("addBtn")[0];
    add.addEventListener("click", () => {
      console.log(add);
      let content = input.value;
      if (content !== "") {
        let ob = {};
        ob.id = todoList[todoList.length - 1].id + 1;
        ob.task = content;
        ob.completed = false;
        todoList.push(ob);
        input.value = "";
        showlist();
      }
    });
  }
  addNewTask();