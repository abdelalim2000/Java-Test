let myObject = (name, message) => {
  this.name = name.toLowerCase();
  this.message = message.toLowerCase();

  this.getName = () => {
    return this.name;
  };

  this.getMessage = () => {
    return this.message;
  };
};

//still dont have answer for that ?!
