/*
=======
  Events specific to the page

=======
*/

export default class {
  constructor(options){
    this.options = options;
    this.elements = {}
    this.init();
  }

  pageFunction = () => {
    console.log('working');
  }

  init(){
    this.pageFunction();
  }

}


