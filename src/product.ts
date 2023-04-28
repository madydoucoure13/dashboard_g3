class Products {
    static defaultRole: string = "employee";
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    getName() {
      return name;
    }
  }
  