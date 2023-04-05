class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
    }
    
    greet = () => {
        const message = this.createChatBotMessage("Hello!");
        this.addMessageToState(message);
    }

    insulin = () => {
        const message = this.createChatBotMessage("Yes, the coverage includes: Insulin vials pens. Needles and syringes, Glucose monitoring supplies and Insulin pump supplies");
        this.addMessageToState(message);
    }

    welcome = () => {
        const message = this.createChatBotMessage("You're welcome! Let me know if you have any other questions.");
        this.addMessageToState(message);
    }
    bye = () => {
        const message = this.createChatBotMessage("Bye! Let me know if you have any other questions.");
        this.addMessageToState(message);
    }
    unknown = () => {
        const message = this.createChatBotMessage("Sorry, I am not able to understand!");
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
 }
 
 export default ActionProvider;