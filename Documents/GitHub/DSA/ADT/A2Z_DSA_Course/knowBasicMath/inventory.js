function Inventory() {
    this.inventory = {};
  }
  
  Inventory.prototype.addItem = function(item, price) {
    if (!this.inventory[item]) {
      this.inventory[item] = { price, quantity: 1 };
    } else {
      this.inventory[item].quantity++;
      this.inventory[item].price = price;
    }
  };
  
  Inventory.prototype.deleteItem = function(item) {
    if (this.inventory[item]) {
      if (this.inventory[item].quantity > 0) {
        this.inventory[item].quantity--;
        return 'Deleted';
      } else {
        return 'Nothing to delete';
      }
    } else {
      return 'Item is not in inventory';
    }
  };
  
  Inventory.prototype.checkItem = function(item) {
    if (this.inventory[item]) {
      return this.inventory[item];
    } else {
      return 'Item is not in inventory';
    }
  };
  
  // Create an instance of Inventory
  const myInventory = new Inventory();
  
  // Uncomment these lines to check your work!
  myInventory.addItem('carrot', 1);
  console.log(myInventory.checkItem('cucumber')); // Logs: { price: 1, quantity: 1 }
  myInventory.addItem('cucumber', 2); 
  console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
  console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
  console.log(myInventory); // Logs: { carrot: { price: 1, quantity: 0 }, cucumber: { price: 2, quantity: 1 } }
  console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'
  