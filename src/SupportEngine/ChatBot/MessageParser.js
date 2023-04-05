class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    }
    else if (lowercase.includes("insulin")) {
      this.actionProvider.insulin();
    }
    else if (lowercase.includes("bye")) {
      this.actionProvider.bye();
    }
    else if (lowercase.includes("thank you")) {
      this.actionProvider.welcome();
    }
    else {
      this.actionProvider.unknown();
    }
  }
}

export default MessageParser;