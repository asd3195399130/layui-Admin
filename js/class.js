class Table {
  constructor(dom, options) {
    console.log(123);
    console.log(this);
    this.parent = dom;
    this.table = document.createComment("table");
    this.config = {
      style: {
        width: "500px",
        height: "500px",
      },
      row: 6,
      col: 6,
    };
    Object.assign(this.config, options);
  }
  //初始化
  init() {
    this.createtable();
  }
  createtable() {
    //生成行和列
    for (let i = 0; i < this.config.row; i++) {
      let trobj = document.createElement("tr");
    }
  }
  //渲染
  render() {}
}
