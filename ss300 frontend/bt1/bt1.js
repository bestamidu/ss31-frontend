
let products = [
   
    {
      
      id: 1,
      name: "mèn mén",
      price: 20000,
      quantity: 20,
      category: "món ăn dân tộc Mông",
    },
    {
      
      id: 2,
      name: "mứt",
      price: 80000,
      quantity: 21,
      category: "món ăn dân tộc Kinh",
    },
    {
    
      id: 3,
      name: "com lam",
      price: 40000,
      quantity: 15,
      category: "món ăn dân tộc Mông",
    },
    {
      
      id: 4,
      name: "bánh đậu xanh",
      price: 60000,
      quantity: 30,
      category: "món ăn dân tộc Kinh",
    },
  ];
  let cart = [];
  let menu =
    "1 hien thi san pham theo ten danh muc\n" +
    "2 chon san pham de mua bang cach nhap id san pham\n" +
    "3 sap xep cac san pham trong cua hang theo gia\n" +
    "4 tinh so tien thanh toan trong gio hang\n" +
    "5 thoat";
  
  let t = 1;
  while (t) {
    let choice = Number(window.prompt(menu, "nhap vao lua chon cua ban"));
    switch (choice) {
      case 1: {
        showListProducts(products);
        break;
      }
      case 2: {
        selectProductInMenu(products, cart);
        break;
      }
      case 3: {
        sapxepsp(products);
        break;
      }
      case 4: {
          bill(cart);
        break;
      }
      case 5: {
        t--;
        break;
      }
    }
  }

  function showListProducts(list) {
    for (let member of list) {
      console.log(member);
    }
  }
 
  function selectProductInMenu(list, cart) {
    let ob = {};
    ob.name = prompt("nhap ten san pham ban can them vao gio hang");
    for (let member of list) {
      if (ob.name === member.name) {
        alert("co san pham trong cua hang");
        ob.number = Number(prompt("nhap vao so luong can mua"));
        if (ob.number <= member.quantity) {
          member.quantity = member.quantity - ob.number;
          ob.price = member.price;
          ob.id = member.id;
          ob.category = member.category;
          cart.push(ob);
        
          for (let element in ob) {
            console.log(element + " = " + ob[element]);
          }
        } else {
          alert("so luong san pham khong du");
        }
  return;
      }
    }
    console.log("khong tim thay san pham");
  }

  function sapxepsp(list) {
    let luachon = Number(
      window.prompt("1. tang dan\n2. giam dan\nnhap lua chon cua ban")
    );
    switch (luachon) {
      case 1: {
        for (let element in list) {
          for (let member in list) {
            if (list[element].price < list[member].price) {
              let temp = list[element];
              list[element] = list[member];
              list[member] = temp;
            }
          }
        }
        break;
      }
      case 2: {
        for (let element in list) {
          for (let member in list) {
            if (list[element].price > list[member].price) {
              let temp = list[element];
              list[element] = list[member];
              list[member] = temp;
            }
          }
        }
        break;
      }
    }
    alert("sap xep thanh cong");
  }

  
  function bill(list){
      let sum = 0;
      for(let member of list){
          sum = sum + member.number * member.price;
      }
      console.log(`tong so tien phai thanh toan la: ${sum}`);
  }