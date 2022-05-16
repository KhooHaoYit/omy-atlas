export class ServerBuilder {
  constructor() {
    this.url = null;
  }
  setUrl(url){
    this.url = url;
    return this;
  }
  setName(name){
    this.name = name;
    return this;
  }
  setImage(image){
    this.image = image;
    return this;
  }
  build() {
    return {
      url: this.url,
      name: this.name,
      image: this.image,
    };
  }
}
